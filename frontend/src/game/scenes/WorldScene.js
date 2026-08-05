import Phaser from "phaser";

export default class WorldScene extends Phaser.Scene {
    constructor() {
        super("WorldScene");
    }

    create() {
        this.cameras.main.setBackgroundColor("#14532d");

        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            "🌍 WORLD SCENE",
            {
                fontSize: "36px",
                color: "#ffffff",
            }
        ).setOrigin(0.5);
    }
}