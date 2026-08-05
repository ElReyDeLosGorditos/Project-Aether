import { useEffect } from "react";
import Phaser from "phaser";
import { gameConfig } from "../../game/config/gameConfig";

export default function GameCanvas() {
    useEffect(() => {
        const game = new Phaser.Game(gameConfig);

        return () => {
            game.destroy(true);
        };
    }, []);

    return (
        <div
            id="game-container"
            style={{
                width: "100%",
                height: "100vh",
            }}
        />
    );
}