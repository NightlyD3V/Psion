import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create(context) {
        context.add.text(250, 250, 'Game Over!');
    }
}

export default GameOver