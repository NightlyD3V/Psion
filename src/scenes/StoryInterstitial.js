import Phaser, { Scene } from 'phaser';
import Narrator from '../data/narrator.json';

class StoryIntersitial extends Phaser.Scene {
    constructor() {
        super('StoryInterstitial')
    }

    create() {
       let index = 0;
       let interval =  setInterval(() => {
            let text = this.add.text(250, 250, Narrator.dialogues[0].introduction[index], {
                wordWrap: {
                    width: 400
                }
            })
            .setOrigin(0.5);
            this.time.delayedCall(4000, () => {
                text.destroy();
            });
            index++; 
            if(index >= 8) {
                this.scene.start('GameScene');
                clearInterval(interval);
            };
        },4000)

        }
}   

export default StoryIntersitial 