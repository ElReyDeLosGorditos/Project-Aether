import Phaser from "phaser";

export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;

        // =========================
        // PLAYER
        // =========================
        this.sprite = scene.physics.add.sprite(
            x,
            y,
            "warrior_idle"
        );

        this.sprite.play("warrior_idle");
        this.sprite.setScale(0.5);

        // =========================
        // PLAYER COLLISION BODY
        // =========================
        this.sprite.body.setSize(40, 26);
        this.sprite.body.setOffset(74, 100);

        this.sprite.body.setCollideWorldBounds(true);

        // DEBUG
        this.sprite.body.debugShowBody = true;
        this.sprite.body.debugBodyColor = 0x00ff00;

        // =========================
        // MOVEMENT
        // =========================
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

        let moving = false;

        if (this.keys.left.isDown) {
            this.sprite.body.setVelocityX(-this.speed);
            moving = true;

            this.sprite.setFlipX(true);
        }

        if (this.keys.right.isDown) {
            this.sprite.body.setVelocityX(this.speed);
            moving = true;

            this.sprite.setFlipX(false);
        }

        if (this.keys.up.isDown) {
            this.sprite.body.setVelocityY(-this.speed);
            moving = true;
        }

        if (this.keys.down.isDown) {
            this.sprite.body.setVelocityY(this.speed);
            moving = true;
        }

        if (moving) {
            if (this.sprite.anims.currentAnim?.key !== "warrior_run") {
                this.sprite.play("warrior_run");
            }
        } else {
            if (this.sprite.anims.currentAnim?.key !== "warrior_idle") {
                this.sprite.play("warrior_idle");
            }
        }
    }
}