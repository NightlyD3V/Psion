import Phaser from 'phaser'; 
import MenuScene from './scenes/MenuScene';

class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.facebook.once('startgame', this.startGame, this);
        this.facebook.showLoadProgress(this);
        this.load.image('logo', 'src/assets/logo.png');
    }

    startGame ()
    {
        this.scene.start(MenuScene);
    }
}

export default Preloader;