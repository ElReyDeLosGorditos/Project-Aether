import Phaser from "phaser";

export default class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");
    }

    create() {
        this.cameras.main.setBackgroundColor("#2E8B57");

        this.player = this.add.rectangle(640, 360, 32, 32, 0x3498db);

        this.physics.add.existing(this.player);

        this.player.body.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });
    }

    update() {
        const speed = 200;

        this.player.body.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-speed);
        }

        if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(speed);
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-speed);
        }

        if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(speed);
        }
    }
}