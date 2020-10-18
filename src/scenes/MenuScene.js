import 'phaser';
import Preloader from '../preloader';
import GameScene from './GameScene';

class MenuScene extends Phaser.Scene {
    constructor() {
        super()
    }

    preload() {
       console.log(this);
       const preloader = new Preloader();
       preloader.preload(this, 'image', 'logo', '../src/assets/pitbull.png');
       preloader.preload(this, 'image', 'start_button', '../src/assets/ui/start_button.png');
    }

    create() {
        //Variables 
        const width = this.game.config.width;
        const height = this.game.config.height;
        console.log(Phaser)
        //Change game background color
        const color = Phaser.Display.Color.HexStringToColor('#95bacc');
        this.add.rectangle(width / 2, height / 2, width, height, color.color);
        //Assets 
        const logo = this.add.image(width / 2, height / 2, 'logo');
        const start_button = this.add.image(width / 2, height - 100, 'start_button');
        start_button.setScale(1.5);
        start_button.setInteractive();
        start_button.on('pointerdown', function(pointer) {
            this.scene.switch('GameScene');
        }, this)

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

export default MenuScene;