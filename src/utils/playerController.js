import 'phaser';

class PlayerController extends Phaser.Scene {
    constructor() {
        super('PlayerController')
    }

    create(context) {
        //Define screen width & height
        const width = context.game.config.width;
        const height = context.game.config.height;
        //Player { Physics }
        context.player = context.physics.add.sprite(20, 400, 'Emily');
        context.player.setSize(38, 48, true);
        //context.player.setCollideWorldBounds(true);
        //Player { Animations }
        context.anims.create({
            key: 'idle',
            frameRate: 12, 
            frames: context.anims.generateFrameNumbers('Emily', { start: 0, end: 2 }),
            repeat: -1
        })
        context.anims.create({
            key: 'run',
            frameRate: 12,
            frames: context.anims.generateFrameNumbers('Emily', { start: 3, end: 10 }),
            repeat: -1
        })
        context.anims.create({
            key: 'jump',
            frameRate: 12,
            frames: context.anims.generateFrameNumbers('Emily', { start: 11, end: 12 })
        })
        //Player { Controls }
        context.cursors = context.input.keyboard.createCursorKeys();
        context.keyA = context.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        context.keyD = context.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        context.Space = context.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
}

export default PlayerController