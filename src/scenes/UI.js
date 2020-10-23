import Phaser from 'phaser';

class UI extends Phaser.Scene {
    constructor() {
        super('UI');
        this.score = 0;
    }

    create(context) {
        //Score text 
        let text = context.add.text(10, 10, 'Score: 0');
        text.setScrollFactor(0);
        //lives
        let hearts_arr = [];
        let x = 440;
        for(let i=0; i<3; i++) {
            let heart = context.add.sprite(x, 20, 'hearts').setFrame(0);
            heart.setScrollFactor(0);
            heart.setFrame(0);
            heart.setScale(0.5, 0.5);
            hearts_arr.push(heart);
            //context.hearts_arr.anims.play('heart_anim', true);
            x += 20;
        }
        console.log(hearts_arr);
        //context.hearts.anims.play('heart_anim', true);
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