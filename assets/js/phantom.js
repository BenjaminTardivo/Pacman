class phantom extends Phaser.Physics.Arcade.Sprite{
    constructor (config){
        super(config.scene, config.x, config.y, config.texture);
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);    
    }
}


export default phantom