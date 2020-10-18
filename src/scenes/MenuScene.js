import 'phaser';
import Preloader from '../preloader';

class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game',
            active: false,
        })
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
        //Change game background color
        const color = new Phaser.Display.Color.HexStringToColor('#95bacc');
        this.add.rectangle(width / 2, height / 2, width, height, color.color);
        //Assets 
        const logo = this.add.image(width / 2, height / 2, 'logo');
        const start_button = this.add.image(width - 100, height - 100, 'start_button');
        
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