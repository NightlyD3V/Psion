import Phaser from "phaser";
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';

const config =  {
    mode: Phaser.Scale.FIT,
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [MenuScene, GameScene]
};

export default config;