import 'phaser';

class PlayerController extends Phaser.Scene {
    constructor() {
        super('PlayerController')
    }

    create(context) {
        //Define screen width & height
        const width = context.game.config.width;
        const height = context.game.config.height;
        //Player { Animations }
        context.player = context.physics.add.sprite(width / 2, 400, 'Emily');
        context.player.setCollideWorldBounds(true);
        context.anims.create({
            key: 'idle',
            frameRate: 12, 
            frames: context.anims.generateFrameNumbers('Emily', { start: 0, end: 2 }),
            repeat: -1
        })
        context.anims.create({
            key: 'run',
            frameRate: 12,
            frames: context.anims.generateFrameNumbers('Emily', { start: 3, end: 11 }),
            repeat: -1
        })
        //Player { Controls }
        context.cursors = context.input.keyboard.createCursorKeys();
        context.keyA = context.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        context.keyD = context.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        context.Space = context.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
}

export default PlayerController