import Phaser from 'phaser';
import Boot from './boot';
import HomeScene from './scenes/HomeScene';

class Game extends Phaser.Game {
  constructor() {
    super(Boot);
    this.scene.add('Game', HomeScene);
    this.scene.start('Game');
  }
}

new Game();