import Phaser from 'phaser';

class UI extends Phaser.Scene {
    constructor() {
        super('UI');
        this.score = 0;
    }

    create(context) {
        //Create text
        let text = context.add.text(10, 10, 'Score: 0');
        text.setScrollFactor(0);
        let lives = context.add.text(400, 10, "Lives: 3");
        lives.setScrollFactor(0);
        //Reference scene 
        let theGame = context.scene.get('GameScene');
        //Listen for events 
        theGame.events.on('addScore', () => {
            this.score += 1;
            text.setText(`Score: ${this.score}`);
        }, this);
        //Buttons //TODO: Settings menu on escape key press
        // const pause_button = context.add.image(-10, -10, 'pause_button');
        // pause_button.setScrollFactor(0);
        // pause_button.setScale(0.1, 0.1);
    }
}

export default UI;