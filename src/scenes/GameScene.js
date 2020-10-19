import 'phaser';
import Preloader from '../preloader';

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        const preloader = new Preloader();
        preloader.preload(this, 'audio', 'main', '../src/assets/audio/main.ogg');
        preloader.preload(this, 'image', 'pause_button', '../src/assets/ui/pause_button.png');
    }

    create() {
        //Define screen width & height
        const width = this.game.config.width;
        const height = this.game.config.height;
        //Change game background color
        const color = Phaser.Display.Color.HexStringToColor('#4d222c');
        this.add.rectangle(width / 2, height / 2, width, height, color.color);
        this.add.image(width / 2, height / 2, 'logo');
        //Music 
        const music = this.sound.add('main',);
        music.play({ loop: true  })
        //Buttons 
        const pause_button = this.add.image(width - 100, height - 100, 'pause_button');
        pause_button.setScale(0.3);
    }
}

export default GameScene