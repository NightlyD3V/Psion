import 'phaser';
import Preloader from '../preloader';

class MenuScene extends Phaser.Scene {
    constructor() {
        super()
    }

    preload() {
       const preloader = new Preloader();
       preloader.preload(this, 'image', 'logo', '../src/assets/pitbull.png');
       preloader.preload(this, 'image', 'start_button', '../src/assets/ui/start_button.png');
       this.load.bitmapFont('square_font', '../src/assets/fonts/square.png', '../src/assets/fonts/square.xml');
    }

    create() {

        //Variables 
        const width = this.game.config.width;
        const height = this.game.config.height;
        //Change game background color
        const color = Phaser.Display.Color.HexStringToColor('#52a3a1');
        this.add.rectangle(width / 2, height / 2, width, height, color.color);

        //Assets 
        //Bitmap text 
        const logo = this.add.image(250, 200, 'logo');
        logo.setScale(0.5, 0.5);
        const zendog = this.add.dynamicBitmapText(125, 280, 'square_font', 'ZenDog');
        zendog.setDisplayCallback(textCallback);
        function textCallback (data)
        {
            data.x = Phaser.Math.Between(data.x - 2, data.x + 2);
            data.y = Phaser.Math.Between(data.y - 4, data.y + 4);
            return data;
        }

        const start_button = this.add.image(width / 2, 370, 'start_button');
        start_button.setInteractive();
        start_button.on('pointerdown', function(pointer) {
            this.scene.switch('GameScene');
        }, this)

        //Animations
        // this.tweens.add({
        //     targets: logo,
        //     y: 350,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }
}

export default MenuScene;