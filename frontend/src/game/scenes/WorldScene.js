import Phaser from "phaser";
import Player from "../entities/Player";

export default class WorldScene extends Phaser.Scene {

    constructor() {
        super("WorldScene");
    }

    create() {

        const map = this.make.tilemap({
            key: "map3",
        });

        console.log(
            map.tilesets.map(t => ({
                name: t.name,
                image: t.image?.source
            }))
        );

        console.log("Tile Layers:", map.layers.map(l => l.name));

        console.log("Object Layers:", map.objects.map(o => o.name));

        const objectLayer = map.getObjectLayer("Spawns");

        const spawnBlack = objectLayer.objects.find(
            obj => obj.name === "SpawnPurple"
        );

        const tilesetmap2 = map.addTilesetImage(
            "Tilemap_color2",
            "tilesetmap2"
        );

        const water = map.addTilesetImage(
            "Water",
            "water"
        );

        const towerBlack = map.addTilesetImage(
            "TowerBlack",
            "tower_black"
        );

        const towerPurple = map.addTilesetImage(
            "TowerPurple",
            "tower_purple"
        );

        const towerRed = map.addTilesetImage(
            "TowerRed",
            "tower_red"
        );

        const towerYellow = map.addTilesetImage(
            "TowerYellow",
            "tower_yellow"
        );

        const bush1 = map.addTilesetImage(
            "Bushe1",
            "bush1"
        );

        const bush2 = map.addTilesetImage(
            "Bushe2",
            "bush2"
        );

        const bush3 = map.addTilesetImage(
            "Bushe3",
            "bush3"
        );

        const bush4 = map.addTilesetImage(
            "Bushe4",
            "bush4"
        );

        const rock1 = map.addTilesetImage(
            "Rock1",
            "rock1"
        );

        const rock2 = map.addTilesetImage(
            "Rock2",
            "rock2"
        );

        const rock3 = map.addTilesetImage(
            "Rock3",
            "rock3"
        );

        const rock4 = map.addTilesetImage(
            "Rock4",
            "rock4"
        );

        const waterRock1 = map.addTilesetImage(
            "Water Rocks_01",
            "waterRock1"
        );

        const waterRock2 = map.addTilesetImage(
            "Water Rocks_02",
            "waterRock2"
        );

        const waterRock3 = map.addTilesetImage(
            "Water Rocks_03",
            "waterRock3"
        );

        const waterRock4 = map.addTilesetImage(
            "Water Rocks_04",
            "waterRock4"
        );

        const stump1 = map.addTilesetImage(
            "Stump 1",
            "stump1"
        );

        const stump2 = map.addTilesetImage(
            "Stump 2",
            "stump2"
        );

        const stump3 = map.addTilesetImage(
            "Stump 3",
            "stump3"
        );

        const stump4 = map.addTilesetImage(
            "Stump 4",
            "stump4"
        );

        const tree1 = map.addTilesetImage(
            "Tree1",
            "tree1"
        );

        const tree2 = map.addTilesetImage(
            "Tree2",
            "tree2"
        );

        const tree3 = map.addTilesetImage(
            "Tree3",
            "tree3"
        );

        const tree4 = map.addTilesetImage(
            "Tree4",
            "tree4"
        );

        const allTilesets = [

            tilesetmap2, water,

            towerBlack, towerRed, towerPurple, towerYellow,

            bush1, bush2, bush3, bush4,

            rock1, rock2, rock3, rock4,

            waterRock1, waterRock2, waterRock3, waterRock4,

            tree1, tree2, tree3, tree4,

            stump1, stump2, stump3, stump4,
        ];

        map.createLayer("Base Layer", allTilesets);
        map.createLayer("First Layer", allTilesets);
        map.createLayer("Second Layer", allTilesets);
        map.createLayer("Third Layer", allTilesets);
        map.createLayer("Fourth Layer", allTilesets);

        this.physics.world.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        this.anims.create({
            key: "warrior_idle",
            frames: this.anims.generateFrameNumbers("warrior_idle", {
                start: 0,
                end: 7,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.anims.create({
            key: "warrior_run",
            frames: this.anims.generateFrameNumbers("warrior_run", {
                start: 0,
                end: 5,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "warrior_guard",
            frames: this.anims.generateFrameNumbers("warrior_guard", {
                start: 0,
                end: 5,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.anims.create({
            key: "warrior_attack1",
            frames: this.anims.generateFrameNumbers("warrior_attack1", {
                start: 0,
                end: 3,
            }),
            frameRate: 12,
            repeat: 0,
        });

        this.anims.create({
            key: "warrior_attack2",
            frames: this.anims.generateFrameNumbers("warrior_attack2", {
                start: 0,
                end: 3,
            }),
            frameRate: 12,
            repeat: 0,
        });

        // Important that Player is below animation!
        this.player = new Player(
            this,
            spawnBlack.x,
            spawnBlack.y
        );

        const collisionLayer = map.getObjectLayer("Collisions");

        this.collisionGroup = this.physics.add.staticGroup();

        collisionLayer.objects.forEach((obj) => {

            console.log(
                `${obj.name}:`,
                `TILED x=${obj.x}`,
                `y=${obj.y}`,
                `w=${obj.width}`,
                `h=${obj.height}`
            );

            // Tiled gives TOP-LEFT.
            // Phaser Rectangle uses CENTER.
            const centerX = obj.x + obj.width / 2;
            const centerY = obj.y + obj.height / 2;

            const collision = this.add.rectangle(
                centerX,
                centerY,
                obj.width,
                obj.height
            );

            collision.setFillStyle(0xff0000, 0.35);
            collision.setStrokeStyle(2, 0xffff00);

            this.physics.add.existing(collision, true);

            this.collisionGroup.add(collision);

            // --------------------------------
            // DEBUG
            // --------------------------------

            console.log(
                `${obj.name} PHASER GAMEOBJECT:`,
                `x=${collision.x}`,
                `y=${collision.y}`,
                `w=${collision.width}`,
                `h=${collision.height}`
            );

            console.log(
                `${obj.name} PHYSICS BODY:`,
                `x=${collision.body.x}`,
                `y=${collision.body.y}`,
                `w=${collision.body.width}`,
                `h=${collision.body.height}`
            );

            // Tiled TOP-LEFT
            this.add.circle(
                obj.x,
                obj.y,
                5,
                0x00ff00
            );

            // Phaser collision CENTER
            this.add.circle(
                centerX,
                centerY,
                5,
                0xff00ff
            );

        });

        this.physics.add.collider(
            this.player.sprite,
            this.collisionGroup
        );

        // Camera follows player smoothly
        this.cameras.main.startFollow(
            this.player.sprite,
            true,
            0.1,
            0.1
        );

        // Zoom out a bit
        this.cameras.main.setZoom(1);


    }

    update() {
        this.player.update();
    }
}