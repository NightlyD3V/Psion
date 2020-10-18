import Phaser from 'phaser'; 

class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }
    preload (context, type, name, path)
    {
        context.load[type](name, path);
    }
}

export default Preloader;