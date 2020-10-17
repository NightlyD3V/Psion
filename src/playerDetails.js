import Phaser from 'phaser';  

class PlayerDetails extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'PlayerDetails', active: false });
    }

    create ()
    {
        this.add.bitmapText(400, 400, 'azo', this.facebook.playerName).setOrigin(0.5);

        this.load.image('player', this.facebook.playerPhotoURL);

        this.load.once('filecomplete-image-player', this.addPlayerPhoto, this);

        this.load.start();
    }

    addPlayerPhoto (key)
    {
        this.add.image(400, 200, key);
    }

}

export default PlayerDetails;