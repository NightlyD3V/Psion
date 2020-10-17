import Phaser from 'phaser'; 

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
        this.scene.start('MainMenu');
    }
}

export default Preloader;