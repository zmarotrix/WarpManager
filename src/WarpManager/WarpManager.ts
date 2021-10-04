import { InjectCore } from 'modloader64_api/CoreInjection';
import { IModLoaderAPI, IPlugin } from 'modloader64_api/IModLoaderAPI';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { BindVar, BindVar_Sizes } from "modloader64_api/BindVar";
import { onTick, onViUpdate } from "modloader64_api/PluginLifecycle";
import { bool_ref, InputTextFlags, MouseButton, string_ref } from 'modloader64_api/Sylvain/ImGui';
import { IZ64Main } from 'Z64Lib/API/Common/IZ64Main';
import { Scenes as MMScenes, SCENES as MM_SCENES } from './MMSceneEnum';
import { Scenes as OOTScenes, SCENES as OOT_SCENES } from './OOTSceneEnum';
import { readFileSync } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import { Z64_GAME } from 'Z64Lib/src/Common/types/GameAliases';
import { Z64LibSupportedGames } from 'Z64Lib/API/Utilities/Z64LibSupportedGames';



export default class WarpManager {
    @ModLoaderAPIInject()
    ModLoader!: IModLoaderAPI;
    @InjectCore()
    core!: IZ64Main;

    //@BindVar(0x803FF39A , BindVar_Sizes.u16 ) this is apparently broken. Would be cool.
    warpAddress: number = 0;
    lastAddress: number = 0;
    targetInput: string_ref = [""];
    searchInput: string_ref = [""];
    window: boolean = false;
    launch: boolean = false;
    overide: bool_ref = [false];
    advanced: bool_ref = [false];
    warpFile!: string;
    targetCheckChanged!: string;
    boot: boolean = true;
    y : number = 0;


    @onTick() // Once per Frame
    onTick() {
        if (Z64_GAME === Z64LibSupportedGames.OCARINA_OF_TIME) { //Ocarina of Time Implementation.
            this.warpAddress = this.core.OOT!.save.entrance_index;
            if (this.warpAddress != 0x0000 && this.warpAddress != this.lastAddress) {
                this.lastAddress = this.warpAddress;
                this.targetInput[0] = this.lastAddress.toString(16).toUpperCase().padStart(4, '0');
                this.targetCheckChanged = this.warpAddress.toString(16).toUpperCase().padStart(4, '0');
            }
        }
        if (Z64_GAME === Z64LibSupportedGames.MAJORAS_MASK) {
            this.warpAddress = this.ModLoader.emulator.rdramRead16(0x803FF39A);
            if (this.warpAddress != 0x0000 && this.warpAddress != this.lastAddress) {
                this.lastAddress = this.warpAddress;
                this.targetInput[0] = this.lastAddress.toString(16).toUpperCase().padStart(4, '0');
                this.targetCheckChanged = this.warpAddress.toString(16).toUpperCase().padStart(4, '0');
            }
        }
    }

    @onViUpdate() // Once per vertical interrupt (refresh, buffer swap)
    onViUpdate() {
        if (this.boot) {


        }
        if (this.ModLoader.ImGui.beginMainMenuBar()) {
            if (this.ModLoader.ImGui.beginMenu("Mods")) {
                if (this.ModLoader.ImGui.menuItem("Warp Manager")) {
                    this.window = !this.window;
                }
                this.ModLoader.ImGui.endMenu();
            }
            this.ModLoader.ImGui.endMainMenuBar();
        }
        if (this.window) {
            if (Z64_GAME === Z64LibSupportedGames.OCARINA_OF_TIME) { //Ocarina of Time Implementation.
                if (this.ModLoader.ImGui.begin("Warp Manager (OoT Beta!)###Maro:WarpManager")) {
                    if(this.core.OOT!.helper.isTitleScreen())
                    {
                        this.ModLoader.ImGui.textColored(`Warp tables are not loaded on the title screen.\nTrying to warp from the title screen will lead\nto reading junk data and possibly crashing.`, {x:1,y:0,z:0,w:1});
                    }
                    if (this.ModLoader.ImGui.isItemClicked(MouseButton.Left)) {
                        // Stuff will go here I assume.
                    }
                    this.ModLoader.ImGui.setNextItemWidth(this.ModLoader.ImGui.calcTextSize("F").x * 8);
                    this.ModLoader.ImGui.inputText("###Maro:target", this.targetInput, InputTextFlags.CharsHexadecimal | InputTextFlags.CharsUppercase | InputTextFlags.EnterReturnsTrue);
                    this.ModLoader.ImGui.sameLine();
                    if (this.ModLoader.ImGui.button(`Void to ${this.targetInput[0] !== this.targetCheckChanged ? 'Custom' : OOTScenes.has(this.core.OOT!.global.scene) ? OOTScenes.get(this.core.OOT!.global.scene)!.name : MM_SCENES[this.core.OOT!.global.scene]}`)) { // DON'T PUT MENU ELEMENTS IN THE FUCKING BUTTON!
                        this.lastAddress = parseInt(this.targetInput[0], 16);
                        this.warp(this.lastAddress);
                    }
                    this.ModLoader.ImGui.separator();
                    this.ModLoader.ImGui.text("Search:");
                    this.ModLoader.ImGui.sameLine();
                    this.ModLoader.ImGui.setNextItemWidth(this.ModLoader.ImGui.calcTextSize("F").x * 21);
                    this.ModLoader.ImGui.inputText("###Maro:search", this.searchInput);
                    if (this.ModLoader.ImGui.isItemHovered()) {
                        this.ModLoader.ImGui.setTooltip("Search by either 'name' or 'hex'.");
                    }
                    this.ModLoader.ImGui.sameLine();
                    if (this.ModLoader.ImGui.checkbox("Advanced", this.advanced)) { /* on change */ }
                    if (this.ModLoader.ImGui.isItemHovered()) {
                        this.ModLoader.ImGui.setTooltip("This enables you to see every\nsingle individual entrance.\nMany Entrances here will NOT\nwork as expected. Use at your own risk.");
                    }
                    this.ModLoader.ImGui.text("Some warps won't work as expected.\nOoT's entrance system is weird.");
                    for (const [key, value] of OOTScenes.entries()) {
                        for (let i = 0; i < value.entranceTable.length && key.valueOf() < 101; i++) {
                            if (this.searchInput[0].length === 0 || (value.name.toUpperCase() + "" + value.entranceTable[i].toString(16).toUpperCase().padStart(4, '0')).indexOf(this.searchInput[0].toUpperCase()) !== -1) {
                                if (this.ModLoader.ImGui.button(this.advanced[0] ? `${value.name} | 0x${value.entranceTable[i].toString(16).toUpperCase().padStart(4, '0')}###Maro:${value.name}-${i}` : `${value.name}###Maro:${value.name}`)) {
                                    this.warp(value.entranceTable[i]);
                                }
                                if (!this.advanced[0]) break;
                            }
                        }
                    }
                }
                this.ModLoader.ImGui.end();
            }
            if (Z64_GAME === Z64LibSupportedGames.MAJORAS_MASK) { //Majora's Mask Implementation.
                if (this.ModLoader.ImGui.begin("Warp Manager###Maro:WarpManager")) {

                    this.ModLoader.ImGui.sameLine();
                    this.ModLoader.ImGui.sameLine();
                    if (this.ModLoader.ImGui.isItemClicked(MouseButton.Left)) {
                        // Stuff will go here I assume.
                    }
                    this.ModLoader.ImGui.setNextItemWidth(this.ModLoader.ImGui.calcTextSize("F").x * 8);
                    this.ModLoader.ImGui.inputText("###Maro:target", this.targetInput, InputTextFlags.CharsHexadecimal | InputTextFlags.CharsUppercase | InputTextFlags.EnterReturnsTrue);
                    this.ModLoader.ImGui.sameLine();
                    if (this.ModLoader.ImGui.button(`Void to ${this.targetInput[0] !== this.targetCheckChanged ? 'Custom' : MMScenes.has(this.core.MM!.global.scene) ? MMScenes.get(this.core.MM!.global.scene)!.name : MM_SCENES[this.core.MM!.global.scene]}`)) { // DON'T PUT MENU ELEMENTS IN THE FUCKING BUTTON!
                        this.lastAddress = parseInt(this.targetInput[0], 16);
                        this.warp(this.lastAddress);
                    }
                    this.ModLoader.ImGui.separator();
                    this.ModLoader.ImGui.text("Search:");
                    this.ModLoader.ImGui.sameLine();
                    this.ModLoader.ImGui.setNextItemWidth(this.ModLoader.ImGui.calcTextSize("F").x * 21);
                    this.ModLoader.ImGui.inputText("###Maro:search", this.searchInput);
                    if (this.ModLoader.ImGui.isItemHovered()) {
                        this.ModLoader.ImGui.setTooltip("Search by either 'name' or 'hex'.");
                    }
                    this.ModLoader.ImGui.sameLine();
                    if (this.ModLoader.ImGui.checkbox("Advanced", this.advanced)) { /* on change */ }
                    if (this.ModLoader.ImGui.isItemHovered()) {
                        this.ModLoader.ImGui.setTooltip("This enables you to see every\nsingle individual entrance.\nJust in case you want a specific door\nCutscenes and Grottos are buggy.");
                    }
                    for (const [key, value] of MMScenes.entries()) {
                        for (let i = 0; i < value.entranceTable.length; i++) {
                            if (this.searchInput[0].length === 0 || (value.name.toUpperCase() + "" + value.entranceTable[i].toString(16).toUpperCase().padStart(4, '0')).indexOf(this.searchInput[0].toUpperCase()) !== -1) {
                                if (this.ModLoader.ImGui.button(this.advanced[0] ? `${value.name} | 0x${value.entranceTable[i].toString(16).toUpperCase().padStart(4, '0')}###Maro:${value.name}-${i}` : `${value.name}###Maro:${value.name}`)) {
                                    this.warp(value.entranceTable[i]);
                                }
                                if (!this.advanced[0]) break;
                            }
                        }
                    }
                    this.ModLoader.ImGui.end();
                }
                //this.ModLoader.ImGui.text(this.lastAddress.toString(16));

            }

        }
    }
    warp(addr: number) {
        if (Z64_GAME === Z64LibSupportedGames.OCARINA_OF_TIME) { //Ocarina of Time Implementation.
            this.core.OOT!.commandBuffer.runWarp(addr, 0);
        }
        if (Z64_GAME === Z64LibSupportedGames.MAJORAS_MASK) { //Majora's Mask Implementation.
            //this.ModLoader.emulator.rdramWrite8(0x803FF39F, 0x04);
            //this.ModLoader.emulator.rdramWrite16(0x803FF39A, addr);
            //this.ModLoader.emulator.rdramWrite8(0x803FF395, 0x01);
            this.core.MM!.commandBuffer.runWarp(addr, 0);
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

}