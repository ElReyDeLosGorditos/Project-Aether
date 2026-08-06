import Phaser from "phaser";
import Player from "../entities/Player";

export default class WorldScene extends Phaser.Scene {

    constructor() {
        super("WorldScene");
    }

    create() {
        const map = this.make.tilemap({
            key: "map2",
        });

        const tilesetmap2 = map.addTilesetImage(
            "Tilemap_color2",
            "tilesetmap2"
        );

        const water = map.addTilesetImage(
            "Water",
            "water"
        );

        const bhouse1 = map.addTilesetImage(
            "House1",
            "bhouse1"
        );

        const yhouse2 = map.addTilesetImage(
            "House2",
            "yhouse2"
        );

        map.createLayer("Map Layer", [
            tilesetmap2,
            water,
        ]);

        map.createLayer("Top Layer", [
            bhouse1,
            yhouse2,
        ]);

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.anims.create({
            key: "warrior_idle",
            frames: this.anims.generateFrameNumbers("warrior_idle", {
                start: 0,
                end: 7,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.anims.create({
            key: "warrior_run",
            frames: this.anims.generateFrameNumbers("warrior_run", {
                start: 0,
                end: 5,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "warrior_guard",
            frames: this.anims.generateFrameNumbers("warrior_guard", {
                start: 0,
                end: 5,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.anims.create({
            key: "warrior_attack1",
            frames: this.anims.generateFrameNumbers("warrior_attack1", {
                start: 0,
                end: 3,
            }),
            frameRate: 12,
            repeat: 0,
        });

        this.anims.create({
            key: "warrior_attack2",
            frames: this.anims.generateFrameNumbers("warrior_attack2", {
                start: 0,
                end: 3,
            }),
            frameRate: 12,
            repeat: 0,
        });

        // Important this is below the animations!!
        this.player = new Player(this, 200, 200);
        
        // Camera follows player smoothly
        this.cameras.main.startFollow(
            this.player.sprite,
            true,
            0.1,
            0.1
        );

        // Zoom out a bit
        this.cameras.main.setZoom(1);


    }

    update() {
        this.player.update();
    }
}