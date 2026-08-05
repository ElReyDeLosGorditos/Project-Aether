import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        console.log("📦 Loading Assets...");

        // We'll load assets here later.
    }

    create() {
        console.log("✅ Assets Loaded");

        this.scene.start("WorldScene");
    }
}