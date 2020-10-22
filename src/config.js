import Phaser from "phaser";
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import StoryIntersitial from "./scenes/StoryInterstitial";

const config =  {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 500,
        height: 500
    },
    physics: {
        default: 'arcade',
        //arcade: { debug: true }
    },
    scene: [MenuScene, GameScene, StoryIntersitial]
};

export default config;