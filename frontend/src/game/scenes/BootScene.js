import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    create() {
        console.log("🚀 Boot Scene Loaded");

        this.scene.start("PreloadScene");
    }
}