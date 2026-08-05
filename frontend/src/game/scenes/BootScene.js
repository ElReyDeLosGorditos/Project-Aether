import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    create() {
        console.log("🚀 Boot Scene Loaded");

        this.cameras.main.setBackgroundColor("#1E293B");

        this.add
            .text(
                this.scale.width / 2,
                this.scale.height / 2,
                "PROJECT AETHER\n\nBoot Scene",
                {
                    fontFamily: "Arial",
                    fontSize: "36px",
                    color: "#ffffff",
                    align: "center",
                }
            )
            .setOrigin(0.5);
    }
}