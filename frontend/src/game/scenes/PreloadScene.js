import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.tilemapTiledJSON(
            "map3",
            "assets/maps/Map3.tmj"
        );

        this.load.image(
            "tilesetmap2",
            "assets/tilesets/Tilemap_color2.png"
        );

        this.load.image(
            "water",
            "assets/tilesets/water.png"
        );

        //Buildings
        this.load.image("house1", "assets/tilesets/building/House1.png");
        this.load.image("house2", "assets/tilesets/building/House2.png");

        this.load.image("tower_black", "assets/tilesets/building/TowerBlack.png");
        this.load.image("tower_red", "assets/tilesets/building/TowerRed.png");
        this.load.image("tower_purple", "assets/tilesets/building/TowerPurple.png");
        this.load.image("tower_yellow", "assets/tilesets/building/TowerYellow.png");

        //Bushes
        this.load.image("bush1", "assets/tilesets/bush/Bushe1.png");
        this.load.image("bush2", "assets/tilesets/bush/Bushe2.png");
        this.load.image("bush3", "assets/tilesets/bush/Bushe3.png");
        this.load.image("bush4", "assets/tilesets/bush/Bushe4.png");

        //Rocks
        this.load.image("rock1", "assets/tilesets/rocks/Rock1.png");
        this.load.image("rock2", "assets/tilesets/rocks/Rock2.png");
        this.load.image("rock3", "assets/tilesets/rocks/Rock3.png");
        this.load.image("rock4", "assets/tilesets/rocks/Rock4.png");

        this.load.image("waterRock1", "assets/tilesets/rocks/WaterRocks_01.png");
        this.load.image("waterRock2", "assets/tilesets/rocks/WaterRocks_02.png");
        this.load.image("waterRock3", "assets/tilesets/rocks/WaterRocks_03.png");
        this.load.image("waterRock4", "assets/tilesets/rocks/WaterRocks_04.png");

        //Trees
        this.load.image("stump1", "assets/tilesets/trees/Stump1.png");
        this.load.image("stump2", "assets/tilesets/trees/Stump2.png");
        this.load.image("stump3", "assets/tilesets/trees/Stump3.png");
        this.load.image("stump4", "assets/tilesets/trees/Stump4.png");

        this.load.image("tree1", "assets/tilesets/trees/Tree1.png");
        this.load.image("tree2", "assets/tilesets/trees/Tree2.png");
        this.load.image("tree3", "assets/tilesets/trees/Tree3.png");
        this.load.image("tree4", "assets/tilesets/trees/Tree4.png");

        this.load.spritesheet(
            "warrior_idle",
            "assets/sprites/characters/warrior/RedWarrior_Idle.png",
            {
                frameWidth: 192,
                frameHeight: 192,
            }
        );

        this.load.spritesheet(
            "warrior_run",
            "assets/sprites/characters/warrior/RedWarrior_Run.png",
            {
                frameWidth: 192,
                frameHeight: 192,
            }
        );

    }

    create() {
        console.log("✅ Assets Loaded");

        this.scene.start("WorldScene");
    }
}