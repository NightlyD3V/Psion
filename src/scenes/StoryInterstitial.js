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
            .setOrigin(0.5)
            setTimeout(() => {
                text.destroy();
            }, 4000);
            index++; 
            if(index >= 8) {
                this.scene.start('GameScene');
                clearInterval(interval);
            }
        },4000)

        }
        // this.cameras.main.fadeIn(2000);
        // let storyline = this.add.text(250, 250, Narrator.dialogues[0].introduction[0])
        // .setOrigin(0.5);
        // setTimeout(() => {
        //     storyline.destroy();
        //     this.cameras.main.fadeIn(2000);
        //     this.add.text(250, 250, Narrator.dialogues[0].introduction[1], {
        //         wordWrap: {
        //             width: 400
        //         }
        //     })
        //     .setOrigin(0.5);
        //     this.input.on('pointerdown', function() {
        //         this.scene.start('GameScene');
        //     }, this)
        // }, 5000)
}   

export default StoryIntersitial 