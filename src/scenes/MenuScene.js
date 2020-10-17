import 'phaser';

class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game',
            active: false
        })
    }

    preload() {
        this.load.image('logo', './src/assets/logo.png');
    }

    create() {
        const width = this.game.config.width;
        const height = this.game.config.height;
        const logo = this.add.image(width / 2, height / 2, 'logo');
        
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

export default MenuScene;