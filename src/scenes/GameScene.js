import 'phaser';
import Preloader from '../preloader';
import PlayerController from '../utils/playerController';


class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        const preloader = new Preloader();
        //Audio
        preloader.preload(this, 'audio', 'main', '../src/assets/audio/main.ogg');
        preloader.preload(this, 'audio', 'run_sound', '../src/assets/audio/run.ogg')
        preloader.preload(this, 'audio', 'jump_sound', '../src/assets/audio/jump.ogg');
        //UI
        preloader.preload(this, 'image', 'pause_button', '../src/assets/ui/pause_button.png');
        //Sprites 
        this.load.spritesheet('Emily', '../src/assets/characters/Emily_animation.png', { frameWidth: 48, frameHeight: 48 })
        preloader.preload(this, 'image', 'bricks', '../src/assets/world/bricks2.png');
    }

    create() {
        //Define screen width & height
        const width = this.game.config.width;
        const height = this.game.config.height;
        //Change game background color
        const color = Phaser.Display.Color.HexStringToColor('4e495f');
        this.add.rectangle(width / 2, height / 2, width, height, color.color);
        //World 
        let platforms = this.physics.add.staticGroup();
        platforms.create(width / 2, 480, 'bricks');
        platforms.create(20, 450, 'bricks');
        platforms.create(500, 350, 'bricks');
        //Instaniate player controller
        const Emily = new PlayerController();
        Emily.create(this)
        //Physics 
        this.physics.add.collider(this.player, platforms);
        this.physics.world.gravity.y = 90;
        //Sound effects 
        this.runSound = this.sound.add('run_sound');
        this.jumpSound = this.sound.add('jump_sound');
        this.input.keyboard.on(('keydown-A') , () => {
            this.runSound.play({ loop: true });
        });
        this.input.keyboard.on(('keydown-D') , () => {
            this.runSound.play({ loop: true });
        });
        //Music 
        setTimeout(() => {
            const music = this.sound.add('main',);
            music.play({ loop: true  })
        }, 1000)
        //Buttons 
        // const pause_button = this.add.image(width - 100, height - 100, 'pause_button');
        // pause_button.setScale(0.1, 0.1);
    }

    update() {
        //Player { Controls }  
        if (this.cursors.left.isDown || this.keyA.isDown)
        {
            //Player run 
            this.player.setVelocityX(-160);
            this.player.flipX = false;
            this.player.anims.play('run', true);
        }
        else if (this.cursors.right.isDown || this.keyD.isDown)
        {
            this.player.setVelocityX(160);
            this.player.flipX = true;
            this.player.anims.play('run', true);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.anims.play('idle', true);
            this.runSound.stop();
        }
        if (this.Space.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-200);
            this.player.body.setGravity(0, 50);
            this.jumpSound.play();
        }
        if (!this.player.body.touching.down) {
            this.player.anims.play('jump', true);
            this.runSound.stop();
        }
    }
}

export default GameScene