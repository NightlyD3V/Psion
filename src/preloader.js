class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    create(){
        this.facebook.once('startgame', this.startGame, this);
        this.facebook.gameStarted();
    }

    startGame() {
        this.scene.start('MainMenu');
    }
}