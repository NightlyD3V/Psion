import Phaser from 'phaser';
import config from './config';
import MenuScene from './scenes/MenuScene';
import PlayerDeets from './playerDetails';
import Preloader from './preloader';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', MenuScene);
    this.scene.start('Game');
  }
}

FBInstant.initializeAsync().then(function() {
  FBInstant.setLoadingProgress(Preloader);
  new Game();
}).catch(function(error) {
  console.log(error.message);
});