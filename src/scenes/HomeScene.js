import Phaser from 'phaser';

class HomeScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game',
            active: false
        })
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
    }

    create() {
        const width = this.game.config.width;
        const height = this.game.config.height;
        this.add.image(width / 2, height / 2, 'logo');
        const logo = this.add.image(400, 150, "logo");
        
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

export default HomeScene;