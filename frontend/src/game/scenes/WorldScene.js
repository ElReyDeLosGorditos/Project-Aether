import Phaser from "phaser";

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

        // Create player
        this.player = this.add.rectangle(1000, 1000, 32, 32, 0x3498db);

        this.physics.add.existing(this.player);

        this.player.body.setCollideWorldBounds(true);

        // Camera follows player
        this.cameras.main.startFollow(this.player, true);

        this.cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });

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