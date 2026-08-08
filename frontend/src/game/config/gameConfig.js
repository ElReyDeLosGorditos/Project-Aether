import Phaser from "phaser";
import BootScene from "../scenes/BootScene";
import PreloadScene from "../scenes/PreloadScene";
import WorldScene from "../scenes/WorldScene";

export const gameConfig = {
    type: Phaser.AUTO,

    parent: "game-container",

    width: 1280,
    height: 720,

    backgroundColor: "#000000",

    scene: [
    BootScene,
    PreloadScene,
    WorldScene
    ],

    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        },
    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};