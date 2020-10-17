import Phaser from 'phaser';
import config from './config';
import MenuScene from './scenes/MenuScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', MenuScene);
    this.scene.start('Game');
  }
}

FBInstant.initializeAsync().then(function() {
  let progress = 0;
  let interval = setInterval(function() {
    progress += 3;
    FBInstant.setLoadingProgress(progress);
    if(progress >= 95) {
      clearInterval(interval)
      FBInstant.startGameAsync().then(function() {
        new Game();
      })
    }
  },100)
}).catch(function(error) {
  console.log(error.message);
});