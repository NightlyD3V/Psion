import Phaser from "phaser";

FBInstant.initializeAsync().then(function() {
    let config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight
    };

    new Phaser.Game(config);
    
});