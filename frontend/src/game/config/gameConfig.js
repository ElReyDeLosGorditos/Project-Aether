import Phaser from "phaser";
import BootScene from "../scenes/BootScene";

export const gameConfig = {
    type: Phaser.AUTO,

    parent: "game-container",

    width: 1280,
    height: 720,

    backgroundColor: "#000000",

    scene: [BootScene],

    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};