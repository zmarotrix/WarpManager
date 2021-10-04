export enum SCENES {
    SwampClear= 0,
    Grotto = 7,
    CutsceneMap,
    PotionShop = 10,
    MajorasLair,
    BeneathTheGraveyard,
    CuriosityShop,
    RanchHouseAndBarn = 16,
    HoneyAndDarlingShop,
    MayorsResidence,
    IkanaCanyon,
    PiratesFortress,
    MilkBar,
    StoneTowerTemple,
    TresureChestShop,
    StoneTowerTempleInverted,
    ClockTowerRoof,
    BeforeTermina,
    WoodfallTemple,
    PathToMountainVillage,
    IkanaCastle,
    DekuPlayground,
    OdolwasLair,
    TownShootingGallery,
    SnowheadTemple,
    MilkRoad,
    PiratesFortressInterior,
    SwampShootingGallery,
    PinnacleRock,
    FairyFountain,
    SwampSpiderHouse,
    OceanSpiderHouse,
    AstralObservatory,
    DekuTrial,
    DekuPalace,
    MountainSmithy,
    TerminaField,
    PostOffice,
    MarineResearchLab,
    DampesHouse,
    GoronShrine = 50,
    ZoraHall,
    TradingPost,
    RomaniRanch,
    TwinmoldsLair,
    GreatBayCoast,
    ZoraCape,
    LotteryShop,
    PiratesFortressExterior = 59,
    FishermansHut,
    GoronShop,
    DekuKingsChamber,
    GoronTrial,
    RoadToSouthernSwamp,
    DoggyRacetrack,
    CuccoShack,
    IkanaGraveyard,
    GhotsLiar,
    SouthernSwamp,
    Woodfall,
    ZoraTrial,
    GoronVillageSpring,
    GreatBayTemple,
    WaterfallRapids,
    BeneathTheWell,
    ZoraHallRooms,
    GoronVillage,
    GoronGraveyard,
    SakonsHideout,
    MountainVillage,
    PoeHut,
    DekuShrine,
    RoadToIkana,
    SwordsmanSchool,
    MusicBoxHouse,
    IgosDuIkanasLiar,
    SwampTouristShack,
    StoneTower,
    StoneTowerInverted,
    MountainVillageSpring,
    PathToSnowhead,
    Snowhead,
    TwinIslands,
    TwinIslandsSpring,
    GyorgsLair,
    SecretShrine,
    StockPotInn,
    GreatBayCutscene,
    ClockTowerInterior,
    WoodsOfMystery,
    LostWoods,
    LinkTrial,
    TheMoon,
    BombShop,
    GiantsChamber,
    GormanTrack,
    GoronRacetrack,
    EastClockTown,
    WestClockTown,
    NorthClockTown,
    SouthClockTown,
    LaundryPool
}
    
export interface ISceneEnum {
    name: string
    id: number
    entranceTable: Array<number>
    adjacent: Array<SCENES>
    hasOwlStatue: boolean
}

export class SwampClear implements ISceneEnum {
    name = "Southern Swamp (Clear)";
    id = 0; 
    entranceTable = [0x0C00, 0x0C10, 0x0C20, 0x0C30, 0x0C40, 0x0C50, 0x0C60, 0x0C70, 0x0C80, 0x0C90, 0x0CA0];
    adjacent = [SCENES.Woodfall, SCENES.RoadToSouthernSwamp, SCENES.DekuPalace, SCENES.SwampSpiderHouse, SCENES.Grotto];
    hasOwlStatue = true;
}

export class Grotto implements ISceneEnum {
    name = "Grotto";
    id = 7;
    entranceTable = [0x1400, 0x1410, 0x1420, 0x1430, 0x1440, 0x1450, 0x1460, 0x1470, 0x1480, 0x1490, 0x14A0, 0x14B0, 0x14C0, 0x14D0, 0x14E0, 0x14F0, 0x1500];
    adjacent = [];
    hasOwlStatue = false;
}

export class CutsceneMap implements ISceneEnum {
    name = "Cutscene Map";
    id = 8;
    entranceTable = [0x1C00, 0x1C70, 0x1C80];
    adjacent = [];
    hasOwlStatue = false;
}

export class PotionShop implements ISceneEnum {
    name = "Magic Hags' Potion Shop";
    id = 10;
    entranceTable = [0x0400];
    adjacent = [];
    hasOwlStatue = false;
}

export class MajorasLair implements ISceneEnum {
    name = "Majora's Lair";
    id = 11;
    entranceTable = [0x0200];
    adjacent = [];
    hasOwlStatue = false;
}

export class BeneathTheGraveyard implements ISceneEnum {
    name = "Beneath the Graveyard";
    id = 12;
    entranceTable = [0x0A10, 0x0A00, 0x0E20, 0x0E30];
    adjacent = [];
    hasOwlStatue = false;
}

export class CuriosityShop implements ISceneEnum {
    name = "Curiosity Shop";
    id = 13;
    entranceTable = [0x0E00, 0x0E10];
    adjacent = [SCENES.WestClockTown];
    hasOwlStatue = false;
}

export class RanchHouseAndBarn implements ISceneEnum {
    name = "Ranch House & Barn";
    id = 16;
    entranceTable = [0x0610];
    adjacent = [SCENES.RomaniRanch];
    hasOwlStatue = false;
}

export class HoneyAndDarlingShop implements ISceneEnum {
    name = "Honey & Darling's Shop";
    id = 17;
    entranceTable = [0x0800];
    adjacent = [SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class MayorsResidence implements ISceneEnum {
    name = "Mayor's Residence";
    id = 18;
    entranceTable = [0x0000, 0x0010, 0xFFFF];
    adjacent = [SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class IkanaCanyon implements ISceneEnum {
    name = "Ikana Canyon";
    id = 19;
    entranceTable = [0x2000, 0x2010, 0x2020, 0x2030, 0x2040, 0x2050, 0x2060, 0x2070, 0x2080, 0x2090, 0x20A0, 0x20B0, 0x20C0, 0x20D0, 0x20E0];
    adjacent = [SCENES.RoadToIkana, SCENES.StoneTower, SCENES.BeneathTheWell, SCENES.IkanaCastle, SCENES.FairyFountain, SCENES.PoeHut, SCENES.MusicBoxHouse]; // Missing Castle Exterior and Song of Storms Cave?
    hasOwlStatue = true;
}

export class PiratesFortress implements ISceneEnum { // "Pirates' Fortress Interior" according to MMR.
    name = "Pirates' Fortress"; 
    id = 20;
    entranceTable = [0x2200, 0x2210, 0x2220, 0x2230, 0x2240, 0x2250, 0x2260, 0x2270, 0x2280, 0x2290, 0x22A0, 0x22B0, 0x2200, 0x22C0];
    adjacent = [SCENES.PiratesFortressInterior, SCENES.GreatBayCoast];
    hasOwlStatue = false;
}

export class MilkBar implements ISceneEnum {
    name = "Milk Bar";
    id = 21;
    entranceTable = [0x2400];
    adjacent = [SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class StoneTowerTemple implements ISceneEnum {
    name = "Stone Tower Temple";
    id = 22;
    entranceTable = [0x2610, 0x2600];
    adjacent = [SCENES.StoneTower];
    hasOwlStatue = false;
}

export class TresureChestShop implements ISceneEnum {
    name = "Treasure Chest Shop";
    id = 23;
    entranceTable = [0x2800, 0x2810];
    adjacent = [SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class StoneTowerTempleInverted implements ISceneEnum {
    name = "Stone Tower Temple (Inverted)";
    id = 24;
    entranceTable = [0x2A00, 0x2A10];
    adjacent = [SCENES.StoneTowerInverted, SCENES.TwinmoldsLair];
    hasOwlStatue = false;
}

export class ClockTowerRoof implements ISceneEnum {
    name = "Clock Tower Rooftop";
    id = 25;
    entranceTable = [0x2C00, 0x2C10];
    adjacent = [SCENES.SouthClockTown, SCENES.TheMoon];
    hasOwlStatue = false;
}

export class BeforeTermina implements ISceneEnum {
    name = "Before the Portal to Termina";
    id = 26;
    entranceTable = [0x2E00, 0x2E10, 0x2E20, 0x2E30, 0x2E40];
    adjacent = [SCENES.LostWoods];
    hasOwlStatue = false;
}

export class WoodfallTemple implements ISceneEnum {
    name = "Woodfall Temple";
    id = 27;
    entranceTable = [0x3000, 0x3010, 0x3020];
    adjacent = [SCENES.Woodfall];
    hasOwlStatue = false;
}

export class PathToMountainVillage implements ISceneEnum {
    name = "Path to Mountain Village";
    id = 28;
    entranceTable = [0x3200, 0x3210, 0x3211];
    adjacent = [SCENES.TerminaField, SCENES.MountainVillage];
    hasOwlStatue = false;
}

export class IkanaCastle implements ISceneEnum {
    name = "Ancient Castle of Ikana";
    id = 29;
    entranceTable = [0x3400, 0x3410, 0x3420, 0x3430, 0x3440, 0x3450, 0x3460];
    adjacent = [SCENES.IkanaCanyon];
    hasOwlStatue = false;
}

export class DekuPlayground implements ISceneEnum {
    name = "Deku Scrub Playground";
    id = 30;
    entranceTable = [0x3600, 0x3610];
    adjacent = [SCENES.NorthClockTown];
    hasOwlStatue = false;
}

export class OdolwasLair implements ISceneEnum {
    name = "Odolwa's Lair";
    id = 31;
    entranceTable = [0x3800];
    adjacent = [SCENES.WoodfallTemple];
    hasOwlStatue = false;
}

export class TownShootingGallery implements ISceneEnum {
    name = "Town Shooting Gallery";
    id = 32;
    entranceTable = [0x3A00];
    adjacent = [SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class SnowheadTemple implements ISceneEnum {
    name = "Snowhead Temple";
    id = 33;
    entranceTable = [0x3C10, 0x3C00];
    adjacent = [SCENES.Snowhead];
    hasOwlStatue = false;
}

export class MilkRoad implements ISceneEnum {
    name = "Milk Road";
    id = 34;
    entranceTable = [0x3E00, 0x3E10, 0x3E20, 0x3E30, 0x3E40, 0x3E50, 0x3E60];
    adjacent = [SCENES.TerminaField, SCENES.RomaniRanch,SCENES.GormanTrack];
    hasOwlStatue = true;
}

export class PiratesFortressInterior implements ISceneEnum { // Pirate Fortress Sewers in MMR. Includes Interior Buildings.
    name = "Pirates' Fortress Interior";
    id = 35;
    entranceTable = [0x4000, 0x4010, 0x4020, 0x4030, 0x4040, 0x4050, 0x4060, 0x4070, 0x4080, 0x4090, 0x40A0, 0x40B0];
    adjacent = [SCENES.PiratesFortress, SCENES.PiratesFortressExterior];
    hasOwlStatue = false;
}

export class SwampShootingGallery implements ISceneEnum {
    name = "Swamp Shooting Gallery";
    id = 36;
    entranceTable = [0x4200];
    adjacent = [SCENES.RoadToSouthernSwamp];
    hasOwlStatue = false;
}

export class PinnacleRock implements ISceneEnum {
    name = "Pinnacle Rock";
    id = 37;
    entranceTable = [0x4410, 0x4400];
    adjacent = [SCENES.GreatBayCoast];
    hasOwlStatue = false;
}

export class FairyFountain implements ISceneEnum {
    name = "Fairy's Fountain";
    id = 38;
    entranceTable = [0x4600, 0x4610, 0x4620, 0x4630, 0x4640, 0x4650, 0x4660, 0x4670, 0x4680, 0x4690];
    adjacent = [SCENES.Woodfall, SCENES.Snowhead, SCENES.IkanaCanyon, SCENES.ZoraCape];
    hasOwlStatue = false;
}

export class SwampSpiderHouse implements ISceneEnum {
    name = "Swamp Spider House";
    id = 39;
    entranceTable = [0x4800];
    adjacent = [SCENES.SouthernSwamp, SCENES.SwampClear];
    hasOwlStatue = false;
}

export class OceanSpiderHouse implements ISceneEnum {
    name = "Oceanside Spider House";
    id = 40;
    entranceTable = [0x4A00];
    adjacent = [SCENES.GreatBayCoast];
    hasOwlStatue = false;
}

export class AstralObservatory implements ISceneEnum { // probably includes Bombers Hideout?
    name = "Astral Observatory";
    id = 41;
    entranceTable = [0x4C00, 0x4C10, 0x4C20];
    adjacent = [SCENES.TerminaField, SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class DekuTrial implements ISceneEnum {
    name = "The Moon - Deku Trial";
    id = 42;
    entranceTable = [0x4E00];
    adjacent = [SCENES.TheMoon];
    hasOwlStatue = false;
}

export class DekuPalace implements ISceneEnum {
    name ="Deku Palace" ;
    id = 43;
    entranceTable = [0x5000, 0x5010, 0x5020, 0x5030, 0x5040, 0x5050, 0x5060, 0x5070, 0x5080, 0x5090, 0x50A0];
    adjacent = [SCENES.SouthernSwamp, SCENES.SwampClear];
    hasOwlStatue = false;
}

export class MountainSmithy implements ISceneEnum {
    name = "Mountain Smithy";
    id = 44;
    entranceTable = [0x5200];
    adjacent = [SCENES.MountainVillage];
    hasOwlStatue = false;
}

export class TerminaField implements ISceneEnum {
    name = "Termina Field";
    id = 45;
    entranceTable = [0x5400, 0x5410, 0x5420, 0x5430, 0x5440, 0x5450, 0x5460, 0x5470, 0x5480, 0x5490, 0x54A0, 0x54B0, 0x54C0, 0x54D0, 0x54E0];
    adjacent = [SCENES.NorthClockTown, SCENES.SouthClockTown, SCENES.EastClockTown, SCENES.WestClockTown, SCENES.Grotto, SCENES.RoadToIkana, SCENES.RoadToSouthernSwamp, SCENES.GreatBayCoast, SCENES.PathToMountainVillage, SCENES.MilkRoad];
    hasOwlStatue = false;
}

export class PostOffice implements ISceneEnum {
    name = "Post Office";
    id = 46;
    entranceTable = [0x5600];
    adjacent = [SCENES.WestClockTown];
    hasOwlStatue = false;
}

export class MarineResearchLab implements ISceneEnum {
    name = "Marine Research Lab";
    id = 47;
    entranceTable = [0x5800];
    adjacent = [SCENES.GreatBayCoast];
    hasOwlStatue = false;
}

export class DampesHouse implements ISceneEnum {
    name = "Dampé's House";
    id = 48;
    entranceTable = [0x5A00, 0x5A10];
    adjacent = [SCENES.IkanaGraveyard];
    hasOwlStatue = false;
}

export class GoronShrine implements ISceneEnum {
    name = "Goron Shrine";
    id = 50;
    entranceTable = [0x5E30, 0x5E00, 0x5E10, 0x5E20];
    adjacent = [SCENES.GoronVillage, SCENES.GoronVillageSpring];
    hasOwlStatue = false;
}

export class ZoraHall implements ISceneEnum {
    name = "Zora Hall";
    id = 51;
    entranceTable = [0x6000, 0x6010, 0x6020, 0x6030, 0x6040, 0x6050, 0x6060, 0x6070, 0x6080];
    adjacent = [SCENES.ZoraCape];
    hasOwlStatue = false;
}

export class TradingPost implements ISceneEnum {
    name = "Trading Post";
    id = 52;
    entranceTable = [0x6200];
    adjacent = [SCENES.WestClockTown];
    hasOwlStatue = false;
}

export class RomaniRanch implements ISceneEnum {
    name = "Romani Ranch";
    id = 53;
    entranceTable = [0x6400, 0x6410, 0x6420, 0x6430, 0x6440, 0x6450, 0x6460, 0x6470, 0x6480, 0x6490, 0x64A0, 0x64B0];
    adjacent = [SCENES.MilkRoad];
    hasOwlStatue = false;
}

export class TwinmoldsLair implements ISceneEnum {
    name = "Twinmold's Lair";
    id = 54;
    entranceTable = [0x6600];
    adjacent = [SCENES.StoneTowerTempleInverted];
    hasOwlStatue = false;
}

export class GreatBayCoast implements ISceneEnum {
    name = "Great Bay Coast";
    id = 55;
    entranceTable = [0x6800, 0x6810, 0x6820, 0x6830, 0x6840, 0x6850, 0x6860, 0x6870, 0x6880, 0x6890, 0x68A0, 0x68B0, 0x68C0, 0x68D0];
    adjacent = [SCENES.PinnacleRock, SCENES.MarineResearchLab, SCENES.PiratesFortressExterior, SCENES.OceanSpiderHouse, SCENES.FishermansHut, SCENES.ZoraCape, SCENES.Grotto];
    hasOwlStatue = true;
}

export class ZoraCape implements ISceneEnum {
    name = "Zora Cape";
    id = 56;
    entranceTable = [0x6A00, 0x6A10, 0x6A20, 0x6A30, 0x6A40, 0x6A50, 0x6A60, 0x6A70, 0x6A80, 0x6A90];
    adjacent = [SCENES.GreatBayCoast, SCENES.WaterfallRapids, SCENES.ZoraHall, SCENES.Grotto];
    hasOwlStatue = true;
}

export class LotteryShop implements ISceneEnum {
    name = "Lottery Shop";
    id = 57;
    entranceTable = [0x6C00];
    adjacent = [SCENES.WestClockTown];
    hasOwlStatue = false;
}

export class PiratesFortressExterior implements ISceneEnum {
    name = "Pirates' Fortress Exterior";
    id = 59;
    entranceTable = [0x7000, 0x7010, 0x7020, 0x7030, 0x7040, 0x7050, 0x7060];
    adjacent = [SCENES.GreatBayCoast, SCENES.PiratesFortress, SCENES.PiratesFortressInterior];
    hasOwlStatue = true;
}

export class FishermansHut implements ISceneEnum {
    name = "Fisherman's Hut";
    id = 60;
    entranceTable = [0x7200];
    adjacent = [SCENES.GreatBayCoast];
    hasOwlStatue = false;
}

export class GoronShop implements ISceneEnum {
    name = "Goron Shop";
    id = 61;
    entranceTable = [0x7400];1
    adjacent = [SCENES.GoronShrine];
    hasOwlStatue = false;
}

export class DekuKingsChamber implements ISceneEnum {
    name = "Deku King's Chamber";
    id = 62;
    entranceTable = [0x7600, 0x7610, 0x7620, 0x7630];
    adjacent = [SCENES.DekuPalace];
    hasOwlStatue = false;
}

export class GoronTrial implements ISceneEnum {
    name = "The Moon - Goron Trial";
    id = 63;
    entranceTable = [0x7800];
    adjacent = [SCENES.TheMoon];
    hasOwlStatue = false;
}

export class RoadToSouthernSwamp implements ISceneEnum {
    name = "Road to Southern Swamp";
    id = 64;
    entranceTable = [0x7A00, 0x7A10, 0x7A20];
    adjacent = [SCENES.SouthernSwamp, SCENES.TerminaField, SCENES.SwampShootingGallery, SCENES.Grotto];
    hasOwlStatue = false;
}

export class DoggyRacetrack implements ISceneEnum {
    name = "Doggy Racetrack";
    id = 65;
    entranceTable = [0x7C00];
    adjacent = [SCENES.RomaniRanch];
    hasOwlStatue = false;
}

export class CuccoShack implements ISceneEnum {
    name = "Cucco Shack";
    id = 66;
    entranceTable = [0x7E00, 0x7E10];
    adjacent = [SCENES.RomaniRanch];
    hasOwlStatue = false;
}

export class IkanaGraveyard implements ISceneEnum {
    name = "Ikana Graveyard";
    id = 67;
    entranceTable = [0x8000, 0x8010, 0x8020, 0x8030, 0x8040, 0x8050];
    adjacent = [SCENES.RoadToIkana, SCENES.BeneathTheGraveyard, SCENES.DampesHouse, SCENES.Grotto];
    hasOwlStatue = false;
}

export class GhotsLiar implements ISceneEnum {
    name = "Goht's Lair";
    id = 68;
    entranceTable = [0x8200];
    adjacent = [SCENES.SnowheadTemple];
    hasOwlStatue = false;
}

export class SouthernSwamp implements ISceneEnum {
    name = "Southern Swamp (Poisoned)";
    id = 69;
    entranceTable = [0x8400, 0x8410, 0x8420, 0x8430, 0x8440, 0x8450, 0x8460, 0x8470, 0x8480, 0x8490, 0x84A0];
    adjacent = [SCENES.Woodfall, SCENES.RoadToSouthernSwamp, SCENES.DekuPalace, SCENES.SwampSpiderHouse, SCENES.Grotto];
    hasOwlStatue = true;
}

export class Woodfall implements ISceneEnum {
    name = "Woodfall";
    id = 70;
    entranceTable = [0x8600, 0x8610, 0x8620, 0x8630, 0x8640];
    adjacent = [SCENES.SouthernSwamp, SCENES.SwampClear, SCENES.WoodfallTemple, SCENES.FairyFountain];
    hasOwlStatue = true;
}

export class ZoraTrial implements ISceneEnum {
    name = "The Moon - Zora Trial";
    id = 71;
    entranceTable = [0x8800, 0x8810];
    adjacent = [SCENES.TheMoon];
    hasOwlStatue = false;
}

export class GoronVillageSpring implements ISceneEnum { // Where is Lens Cave?
    name = "Goron Village (Spring)";
    id = 72;
    entranceTable = [0x8A00, 0x8A10, 0x8A20, 0x8A30, 0x8A40];
    adjacent = [SCENES.GoronShrine, SCENES.TwinIslands];
    hasOwlStatue = false;
}

export class GreatBayTemple implements ISceneEnum {
    name = "Great Bay Temple";
    id = 73;
    entranceTable = [0x8C10, 0x8C00];
    adjacent = [SCENES.ZoraCape, SCENES.GyorgsLair];
    hasOwlStatue = false;
}

export class WaterfallRapids implements ISceneEnum {
    name = "Waterfall Rapids";
    id = 74;
    entranceTable = [0x8E00, 0x8E10, 0x8E20, 0x8E30];
    adjacent = [SCENES.ZoraCape];
    hasOwlStatue = false;
}

export class BeneathTheWell implements ISceneEnum {
    name = "Beneath the Well";
    id = 75;
    entranceTable = [0x9000, 0x9010];
    adjacent = [SCENES.IkanaCanyon];
    hasOwlStatue = false;
}

export class ZoraHallRooms implements ISceneEnum {
    name = "Zora Hall Rooms";
    id = 76;
    entranceTable = [0x9200, 0x9210, 0x9220, 0x9230, 0x9240, 0x9250, 0x9260];
    adjacent = [SCENES.ZoraHall];
    hasOwlStatue = false;
}

export class GoronVillage implements ISceneEnum {
    name = "Goron Village (Winter)";
    id = 77;
    entranceTable = [0x9400, 0x9410, 0x9420, 0x9430, 0x9440];
    adjacent = [SCENES.GoronShrine, SCENES.TwinIslands];
    hasOwlStatue = false;
}

export class GoronGraveyard implements ISceneEnum {
    name = "Goron Graveyard";
    id = 78;
    entranceTable = [0x9600, 0x9610];
    adjacent = [SCENES.MountainVillage];
    hasOwlStatue = false;
}

export class SakonsHideout implements ISceneEnum {
    name = "Sakon's Hideout";
    id = 79;
    entranceTable = [0x9800];
    adjacent = [SCENES.IkanaCanyon];
    hasOwlStatue = false;
}

export class MountainVillage implements ISceneEnum {
    name = "Mountain Village (Winter)";
    id = 80;
    entranceTable = [0x9400, 0x9410, 0x9420, 0x9430, 0x9440, 0x9450, 0x9460, 0x9470, 0x9480];
    adjacent = [SCENES.PathToMountainVillage, SCENES.PathToSnowhead, SCENES.TwinIslands];
    hasOwlStatue = true;
}

export class PoeHut implements ISceneEnum {
    name = "Poe Hut";
    id = 81;
    entranceTable = [0x9C00, 0x9C10, 0x9C20];
    adjacent = [SCENES.IkanaCanyon];
    hasOwlStatue = false;
}

export class DekuShrine implements ISceneEnum {
    name = "Deku Shrine";
    id = 82;
    entranceTable = [0x9E00, 0x9E10];
    adjacent = [SCENES.DekuPalace];
    hasOwlStatue = false;
}

export class RoadToIkana implements ISceneEnum {
    name = "Road to Ikana";
    id = 83;
    entranceTable = [0xA000, 0xA010, 0xA020];
    adjacent = [SCENES.IkanaGraveyard, SCENES.TerminaField, SCENES.IkanaCanyon, SCENES.Grotto];
    hasOwlStatue = false;
}

export class SwordsmanSchool implements ISceneEnum {
    name = "Swordsman's School";
    id = 84;
    entranceTable = [0xA200];
    adjacent = [SCENES.WestClockTown];
    hasOwlStatue = false;
}

export class MusicBoxHouse implements ISceneEnum {
    name = "Music Box House";
    id = 85;
    entranceTable = [0xA400];
    adjacent = [SCENES.IkanaCanyon];
    hasOwlStatue = false;
}

export class IgosDuIkanasLiar implements ISceneEnum {
    name = "Igos du Ikana's Lair";
    id = 86;
    entranceTable = [0xA600];
    adjacent = [SCENES.IkanaCastle];
    hasOwlStatue = false;
}

export class SwampTouristShack implements ISceneEnum {
    name = "Swamp Tourist Shack";
    id = 87;
    entranceTable = [0xA800];
    adjacent = [SCENES.SouthernSwamp, SCENES.SwampClear];
    hasOwlStatue = false;
}

export class StoneTower implements ISceneEnum {
    name = "Stone Tower";
    id = 88;
    entranceTable = [0xAA00, 0xAA10, 0xAA20, 0xAA30];
    adjacent = [SCENES.IkanaCanyon, SCENES.StoneTower, SCENES.StoneTowerTemple];
    hasOwlStatue = true;
}

export class StoneTowerInverted implements ISceneEnum {
    name = "Stone Tower (Inverted)";
    id = 89;
    entranceTable = [0xAC00, 0xAC10];
    adjacent = [SCENES.StoneTower, SCENES.StoneTowerTemple];
    hasOwlStatue = false;
}

export class MountainVillageSpring implements ISceneEnum {
    name = "Mountain Village (Spring)";
    id = 90;
    entranceTable = [0xAE00, 0xAE10, 0xAE20, 0xAE30, 0xAE40, 0xAE50, 0xAE60, 0xAE70, 0xAE80];
    adjacent = [SCENES.PathToMountainVillage, SCENES.PathToSnowhead, SCENES.TwinIslands];
    hasOwlStatue = false;
}

export class PathToSnowhead implements ISceneEnum {
    name = "Path to Snowhead";
    id = 91;
    entranceTable = [0xB000, 0xB010, 0xB020, 0xB030];
    adjacent = [SCENES.Snowhead, SCENES.MountainVillage];
    hasOwlStatue = false;
}

export class Snowhead implements ISceneEnum {
    name = "Snowhead";
    id = 92;
    entranceTable = [0xB200, 0xB210, 0xB220, 0xB230];
    adjacent = [SCENES.PathToSnowhead, SCENES.SnowheadTemple, SCENES.FairyFountain];
    hasOwlStatue = true;
}

export class TwinIslands implements ISceneEnum {
    name = "Twin Islands";
    id = 93;
    entranceTable = [0xB400, 0xB410, 0xB420];
    adjacent = [SCENES.MountainVillage, SCENES.GoronVillage];
    hasOwlStatue = false;
}

export class TwinIslandsSpring implements ISceneEnum {
    name = "Twin Islands (Spring)";
    id = 94;
    entranceTable = [0xB600, 0xB610, 0xB620];
    adjacent = [SCENES.MountainVillageSpring, SCENES.GoronVillageSpring];
    hasOwlStatue = false;
}

export class GyorgsLair implements ISceneEnum {
    name = "Gyorg's Lair";
    id = 95;
    entranceTable = [0xB800];
    adjacent = [SCENES.GreatBayTemple, SCENES.GiantsChamber];
    hasOwlStatue = false;
}

export class SecretShrine implements ISceneEnum {
    name = "Secret Shrine";
    id = 96;
    entranceTable = [0xBA00];
    adjacent = [SCENES.IkanaCanyon];
    hasOwlStatue = false;
}

export class StockPotInn implements ISceneEnum {
    name = "Stock Pot Inn";
    id = 97;
    entranceTable = [0xBC00, 0xBC10, 0xBC20, 0xBC30, 0xBC40, 0xBC50];
    adjacent = [SCENES.EastClockTown];
    hasOwlStatue = false;
}

export class GreatBayCutscene implements ISceneEnum {
    name = "Great Bay (Cutscene)";
    id = 98;
    entranceTable = [0xBE00];
    adjacent = [SCENES.ZoraHall, SCENES.GreatBayTemple];
    hasOwlStatue = false;
}

export class ClockTowerInterior implements ISceneEnum {
    name = "Clock Tower Interior";
    id = 99;
    entranceTable = [0xC000, 0xC010, 0xC020, 0xC030, 0xC040, 0xC050, 0xC060];
    adjacent = [SCENES.SouthClockTown, SCENES.BeforeTermina];
    hasOwlStatue = false;
}

export class WoodsOfMystery implements ISceneEnum {
    name = "Woods of Mystery";
    id = 100;
    entranceTable = [0xC200];
    adjacent = [SCENES.SwampClear, SCENES.SouthernSwamp];
    hasOwlStatue = false;
}

export class LostWoods implements ISceneEnum {
    name = "Lost Woods";
    id = 101;
    entranceTable = [0xC400, 0xC410];
    adjacent = [SCENES.BeforeTermina];
    hasOwlStatue = false;
}

export class LinkTrial implements ISceneEnum {
    name = "The Moon - Link Trial";
    id = 102;
    entranceTable = [0xC600];
    adjacent = [SCENES.TheMoon];
    hasOwlStatue = false;
}

export class TheMoon implements ISceneEnum {
    name = "The Moon";
    id = 103;
    entranceTable = [0xC800];
    adjacent = [SCENES.DekuTrial, SCENES.LinkTrial, SCENES.ZoraTrial, SCENES.GoronTrial, SCENES.MajorasLair];
    hasOwlStatue = false;
}

export class BombShop implements ISceneEnum {
    name = "Bomb Shop";
    id = 104;
    entranceTable = [0xCA00];
    adjacent = [SCENES.WestClockTown];
    hasOwlStatue = false;
}

export class GiantsChamber implements ISceneEnum {
    name = "Giants' Chamber";
    id = 105;
    entranceTable = [0xCC00];
    adjacent = [SCENES.GhotsLiar, SCENES.OdolwasLair, SCENES.GyorgsLair, SCENES.TwinmoldsLair];
    hasOwlStatue = false;
}

export class GormanTrack implements ISceneEnum {
    name = "Gorman Track";
    id = 106;
    entranceTable = [0xCE00, 0xCE10, 0xCE20, 0xCE30, 0xCE40, 0xCE50];
    adjacent = [SCENES.MilkRoad];
    hasOwlStatue = false;
}

export class GoronRacetrack implements ISceneEnum {
    name = "Goron Racetrack";
    id = 107;
    entranceTable = [0xD000, 0xD010, 0xD020];
    adjacent = [SCENES.TwinIslands, SCENES.TwinIslandsSpring];
    hasOwlStatue = false;
}

export class EastClockTown implements ISceneEnum {
    name = "East Clock Town";
    id = 108;
    entranceTable = [0xD200, 0xD210, 0xD220, 0xD230, 0xD240, 0xD250, 0xD260, 0xD270, 0xD280, 0xD290, 0xD2A0, 0xD2B0];
    adjacent = [SCENES.MilkBar,SCENES.HoneyAndDarlingShop, SCENES.TownShootingGallery, SCENES.TresureChestShop, SCENES.StockPotInn, SCENES.MayorsResidence, SCENES.AstralObservatory, SCENES.TerminaField, SCENES.NorthClockTown, SCENES.SouthClockTown];
    hasOwlStatue = false;
}

export class WestClockTown implements ISceneEnum {
    name = "West Clock Town";
    id = 109;
    entranceTable = [0xD400, 0xD410, 0xD420, 0xD430, 0xD440, 0xD450, 0xD460, 0xD470, 0xD480, 0xD490];
    adjacent = [SCENES.BombShop, SCENES.SwordsmanSchool, SCENES.PostOffice, SCENES.LotteryShop, SCENES.TradingPost, SCENES.CuriosityShop, SCENES.TerminaField, SCENES.SouthClockTown];
    hasOwlStatue = false;
}

export class NorthClockTown implements ISceneEnum {
    name = "North Clock Town";
    id = 110;
    entranceTable = [0xD600, 0xD610, 0xD620, 0xD630, 0xD640, 0xD650, 0xD660, 0xD670];
    adjacent = [SCENES.FairyFountain, SCENES.DekuPlayground, SCENES.TerminaField, SCENES.EastClockTown, SCENES.SouthClockTown];
    hasOwlStatue = false;
}

export class SouthClockTown implements ISceneEnum {
    name = "South Clock Town";
    id = 111;
    entranceTable = [0xD800, 0xD810, 0xD820, 0xD830, 0xD840, 0xD850, 0xD860, 0xD870, 0xD880, 0xD890, 0xD8A0];
    adjacent = [SCENES.ClockTowerInterior, SCENES.NorthClockTown, SCENES.EastClockTown, SCENES.WestClockTown, SCENES.LaundryPool, SCENES.TerminaField];
    hasOwlStatue = true;
}

export class LaundryPool implements ISceneEnum {
    name = "Laundry Pool";
    id = 112;
    entranceTable = [0xDA00, 0xDA10];
    adjacent = [SCENES.CuriosityShop, SCENES.SouthClockTown];
    hasOwlStatue = false;
}

export let Scenes: Map<SCENES, ISceneEnum> = new Map([
    [SCENES.SwampClear, new SwampClear()],
    [SCENES.Grotto, new Grotto()],
    [SCENES.CutsceneMap, new CutsceneMap()],
    [SCENES.PotionShop, new PotionShop()],
    [SCENES.MajorasLair, new MajorasLair()],
    [SCENES.BeneathTheGraveyard, new BeneathTheGraveyard()],
    [SCENES.CuriosityShop, new CuriosityShop()],
    [SCENES.RanchHouseAndBarn, new RanchHouseAndBarn()],
    [SCENES.HoneyAndDarlingShop, new HoneyAndDarlingShop()],
    [SCENES.MayorsResidence, new MayorsResidence()],
    [SCENES.IkanaCanyon, new IkanaCanyon()],
    [SCENES.PiratesFortress, new PiratesFortress()],
    [SCENES.MilkBar, new MilkBar()],
    [SCENES.StoneTowerTemple, new StoneTowerTemple()],
    [SCENES.TresureChestShop, new TresureChestShop()],
    [SCENES.StoneTowerTempleInverted, new StoneTowerTempleInverted()],
    [SCENES.ClockTowerRoof, new ClockTowerRoof()],
    [SCENES.BeforeTermina, new BeforeTermina()],
    [SCENES.WoodfallTemple, new WoodfallTemple()],
    [SCENES.PathToMountainVillage, new PathToMountainVillage()],
    [SCENES.IkanaCastle, new IkanaCastle()],
    [SCENES.DekuPlayground, new DekuPlayground()],
    [SCENES.OdolwasLair, new OdolwasLair()],
    [SCENES.TownShootingGallery, new TownShootingGallery()],
    [SCENES.SnowheadTemple, new SnowheadTemple()],
    [SCENES.MilkRoad, new MilkRoad()],
    [SCENES.PiratesFortressInterior, new PiratesFortressInterior()],
    [SCENES.SwampShootingGallery, new SwampShootingGallery()],
    [SCENES.PinnacleRock, new PinnacleRock()],
    [SCENES.FairyFountain, new FairyFountain()],
    [SCENES.SwampSpiderHouse, new SwampSpiderHouse()],
    [SCENES.OceanSpiderHouse, new OceanSpiderHouse()],
    [SCENES.AstralObservatory, new AstralObservatory()],
    [SCENES.DekuTrial, new DekuTrial()],
    [SCENES.DekuPalace, new DekuPalace()],
    [SCENES.MountainSmithy, new MountainSmithy()],
    [SCENES.TerminaField, new TerminaField()],
    [SCENES.PostOffice, new PostOffice()],
    [SCENES.MarineResearchLab, new MarineResearchLab()],
    [SCENES.DampesHouse, new DampesHouse()],
    [SCENES.GoronShrine, new GoronShrine()],
    [SCENES.ZoraHall, new ZoraHall()],
    [SCENES.TradingPost, new TradingPost()],
    [SCENES.RomaniRanch, new RomaniRanch()],
    [SCENES.TwinmoldsLair, new TwinmoldsLair()],
    [SCENES.GreatBayCoast, new GreatBayCoast()],
    [SCENES.ZoraCape, new ZoraCape()],
    [SCENES.LotteryShop, new LotteryShop()],
    [SCENES.PiratesFortressExterior, new PiratesFortressExterior()],
    [SCENES.FishermansHut, new FishermansHut()],
    [SCENES.GoronShop, new GoronShop()],
    [SCENES.DekuKingsChamber, new DekuKingsChamber()],
    [SCENES.GoronTrial, new GoronTrial()],
    [SCENES.RoadToSouthernSwamp, new RoadToSouthernSwamp()],
    [SCENES.DoggyRacetrack, new DoggyRacetrack()],
    [SCENES.CuccoShack, new CuccoShack()],
    [SCENES.IkanaGraveyard, new IkanaGraveyard()],
    [SCENES.GhotsLiar, new GhotsLiar()],
    [SCENES.SouthernSwamp, new SouthernSwamp()],
    [SCENES.Woodfall, new Woodfall()],
    [SCENES.ZoraTrial, new ZoraTrial()],
    [SCENES.GoronVillageSpring, new GoronVillageSpring()],
    [SCENES.GreatBayTemple, new GreatBayTemple()],
    [SCENES.WaterfallRapids, new WaterfallRapids()],
    [SCENES.BeneathTheWell, new BeneathTheWell()],
    [SCENES.ZoraHallRooms, new ZoraHallRooms()],
    [SCENES.GoronVillage, new GoronVillage()],
    [SCENES.GoronGraveyard, new GoronGraveyard()],
    [SCENES.SakonsHideout, new SakonsHideout()],
    [SCENES.MountainVillage, new MountainVillage()],
    [SCENES.PoeHut, new PoeHut()],
    [SCENES.DekuShrine, new DekuShrine()],
    [SCENES.RoadToIkana, new RoadToIkana()],
    [SCENES.SwordsmanSchool, new SwordsmanSchool()],
    [SCENES.MusicBoxHouse, new MusicBoxHouse()],
    [SCENES.IgosDuIkanasLiar, new IgosDuIkanasLiar()],
    [SCENES.SwampTouristShack, new SwampTouristShack()],
    [SCENES.StoneTower, new StoneTower()],
    [SCENES.StoneTowerInverted, new StoneTowerInverted()],
    [SCENES.MountainVillageSpring, new MountainVillageSpring()],
    [SCENES.PathToSnowhead, new PathToSnowhead()],
    [SCENES.Snowhead, new Snowhead()],
    [SCENES.TwinIslands, new TwinIslands()],
    [SCENES.TwinIslandsSpring, new TwinIslandsSpring()],
    [SCENES.GyorgsLair, new GyorgsLair()],
    [SCENES.SecretShrine, new SecretShrine()],
    [SCENES.StockPotInn, new StockPotInn()],
    [SCENES.GreatBayCutscene, new GreatBayCutscene()],
    [SCENES.ClockTowerInterior, new ClockTowerInterior()],
    [SCENES.WoodsOfMystery, new WoodsOfMystery()],
    [SCENES.LostWoods, new LostWoods()],
    [SCENES.LinkTrial, new LinkTrial()],
    [SCENES.TheMoon, new TheMoon()],
    [SCENES.BombShop, new BombShop()],
    [SCENES.GiantsChamber, new GiantsChamber()],
    [SCENES.GormanTrack, new GormanTrack()],
    [SCENES.GoronRacetrack, new GoronRacetrack()],
    [SCENES.EastClockTown, new EastClockTown()],
    [SCENES.WestClockTown, new WestClockTown()],
    [SCENES.NorthClockTown, new NorthClockTown()],
    [SCENES.SouthClockTown, new SouthClockTown()],
    [SCENES.LaundryPool, new LaundryPool()]
])

