import Phaser from "phaser";

export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;

        this.sprite = scene.add.rectangle(x, y, 32, 32, 0x3498db);

        scene.physics.add.existing(this.sprite);

        this.sprite.body.setCollideWorldBounds(true);

        this.speed = 200;

        this.keys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });
    }

    update() {
        this.sprite.body.setVelocity(0);

        if (this.keys.left.isDown) {
            this.sprite.body.setVelocityX(-this.speed);
        }

        if (this.keys.right.isDown) {
            this.sprite.body.setVelocityX(this.speed);
        }

        if (this.keys.up.isDown) {
            this.sprite.body.setVelocityY(-this.speed);
        }

        if (this.keys.down.isDown) {
            this.sprite.body.setVelocityY(this.speed);
        }
    }
}