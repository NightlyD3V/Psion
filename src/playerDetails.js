class PlayerDetails extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'PlayerDetails', active: false });
    }

    create (context)
    {
        const player_name = FBInstant.player.getName();
        context.add.text(10,10,`Hello, ${player_name}!`, { fontFamily: 'Arial', fontSize: 24, color: '#ffff' });
    }

    addPlayerPhoto (key)
    {
        this.add.image(400, 200, key);
    }

    addPlayerPhoto (key)
    {
        this.add.image(400, 200, key);
    }

}

export default PlayerDetails;