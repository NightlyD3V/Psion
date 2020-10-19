import Phaser from "phaser";
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';

const config =  {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: window.innerHeight
    },
    scene: [MenuScene, GameScene]
};

export default config;