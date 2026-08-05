import Phaser from "phaser";
import Player from "../entities/Player";

export default class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");
    }

    create() {
        this.cameras.main.setBackgroundColor("#2E8B57");

        // World bounds
        this.physics.world.setBounds(0, 0, 2000, 2000);

        // Camera bounds
        this.cameras.main.setBounds(0, 0, 2000, 2000);

        this.player = new Player(this, 1000, 1000);

        this.cameras.main.startFollow(this.player.sprite, true);

        // Optional: Draw a grid so we can see the camera move
        const graphics = this.add.graphics();
        graphics.lineStyle(1, 0x3b5f2b);

        for (let x = 0; x <= 2000; x += 100) {
            graphics.moveTo(x, 0);
            graphics.lineTo(x, 2000);
        }

        for (let y = 0; y <= 2000; y += 100) {
            graphics.moveTo(0, y);
            graphics.lineTo(2000, y);
        }

        graphics.strokePath();
    }

    update() {
        this.player.update();
    }
}