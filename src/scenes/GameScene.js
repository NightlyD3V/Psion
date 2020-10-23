import Phaser from 'phaser';
import Preloader from '../preloader';
import PlayerController from '../utils/playerController';
import Interface from './UI';

//Globals 
const makePlatforms = (scene, platforms, repeat, texture, scrollFactor) => {
    //const width = scene.textures.get(texture).getSourceImage().width
    //const totalWidth = scene.scale.width * 10;
    let x = 0;
    for(let i=0; i < repeat; i++) {
        let platform = platforms.create(x, 500, texture);
        platform.body.setSize(500, 30, true);
        platform.setScrollFactor(scrollFactor);
        x += platform.width;
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        const preloader = new Preloader();
        //UI
        preloader.preload(this, 'image', 'pause_button', '../src/assets/ui/pause_button.png');
        //Audio
        preloader.preload(this, 'audio', 'main', '../src/assets/audio/main.ogg');
        preloader.preload(this, 'audio', 'run_sound', '../src/assets/audio/run.ogg')
        preloader.preload(this, 'audio', 'jump_sound', '../src/assets/audio/jump.ogg');
        preloader.preload(this, 'audio', 'pickup_1', '../src/assets/audio/pickup_1.ogg');
        //Sprites 
        this.load.spritesheet('Emily', '../src/assets/characters/Emily_animation.png', { frameWidth: 48, frameHeight: 48 })
        preloader.preload(this, 'image', 'bricks', '../src/assets/world/bricks2.png');
        preloader.preload(this, 'image', 'background', '../src/assets/world/background.png');
        this.load.spritesheet('hearts', '../src/assets/ui/hearts.png', { frameWidth: 32, frameHeight: 32 });
        //Pickups
        this.load.spritesheet('pickup1', '../src/assets/world/pickup1.png', { frameWidth: 48, frameHeight: 48 }); 
    }

    create() {
        //Define screen width & height
        const width = this.game.config.width;
        const height = this.game.config.height;
        //Camera 
        this.cameras.main.fadeIn(2000);
        //this.cameras.main.setBounds(0,0,500,500);
        this.cameras.main.setViewport(0, 200, 500, 200);
        //Change game background color
        this.add.image(0, 300, 'background')
        .setScrollFactor(0, 1)
        .setOrigin(0, 0);
        //World 
        const platforms = this.physics.add.staticGroup();
        makePlatforms(this, platforms, 10, 'bricks', 1);
        //Insantiate UI
        const UserInterface = new Interface();
        UserInterface.create(this)
        //Instaniate player controller
        const Emily = new PlayerController();
        Emily.create(this)
        this.cameras.main.startFollow(this.player);
        //Pick-ups 
        this.pickup = this.physics.add.staticSprite(250, 450, 'pickup1');
        this.pickup.setSize(16, 16, true)
        this.pickup.setCircle(8);
        this.anims.create({
            key: 'pickup1_anim',
            frameRate: 7,
            frames: this.anims.generateFrameNumbers('pickup1', { start: 0, end: 2 }),
            repeat: -1 
        })
        this.pickup.anims.play('pickup1_anim', true);
        /**Physics**/ 
        const theGame = this;
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.player, this.pickup, function(player, pickup) {
            //Add new score 
            theGame.events.emit('addScore');
            //Play fx
            theGame.pickup_1 = theGame.sound.add('pickup_1');
            theGame.pickup_1.play();
            //Reposition camera
            theGame.cameras.main.fadeIn(1000);
            //theGame.cameras.main.setViewport(0, 0, width, height);
            //Destroy pickup
            pickup.destroy();
        })
        this.physics.world.gravity.y = 100;
        //Sound effects 
        this.runSound = this.sound.add('run_sound');
        this.jumpSound = this.sound.add('jump_sound');
        this.input.keyboard.on(('keydown-A') , () => {
            theGame.runSound.play({ 
                loop: true,
                volume: 0.5 
            });
        })
        this.input.keyboard.on(('keydown-D') , () => {
            theGame.runSound.play({ 
                loop: true ,
                volume: 0.5
            });
        });
        //Music 
        setTimeout(() => {
            const music = this.sound.add('main',);
            music.play({ 
                loop: true,
                volume: 0.3,
                detune: -100
            })
        }, 1000)
        //Pause / unpause game with escape key 
        // let paused = false;
        // this.input.keyboard.on('keydown-ESC', function (event) {
        //     theGame.scene.pause();
        //     pause = true;
        // });
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
            this.runSound.pause();
        }
        if (this.Space.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-130);
            this.player.body.setGravity(0, 50);
            this.jumpSound.play();
        }
        if (!this.player.body.touching.down) {
            this.player.anims.play('jump', true);
            this.runSound.pause();
        }
        if((this.keyA.isDown || this.keyD.isDown) && this.player.body.touching.down) {
            this.runSound.resume();
        };
    }
}

export default GameScene