import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.tilemapTiledJSON(
            "map2",
            "assets/maps/Map2.tmj"
        );

        this.load.image(
            "tilesetmap2",
            "assets/tilesets/Tilemap_color2.png"
        );

        this.load.image(
            "water",
            "assets/tilesets/water.png"
        );

        this.load.image(
            "bhouse1",
            "assets/tilesets/House1.png"
        );

        this.load.image(
            "yhouse2",
            "assets/tilesets/House2.png"
        );

        this.load.spritesheet(
            "warrior_idle",
            "assets/sprites/characters/warrior/Warrior_Idle.png",
            {
                frameWidth: 192,
                frameHeight: 192,
            }
        );

        this.load.spritesheet(
            "warrior_run",
            "assets/sprites/characters/warrior/Warrior_Run.png",
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