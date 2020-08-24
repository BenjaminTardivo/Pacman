class scene2 extends Phaser.Scene {
    constructor() {
        super('level1');
    }



    create(){
        
        cursors = this.input.keyboard.createCursorKeys();

        var map = this.make.tilemap({ key: 'map' });

        var tileset = map.addTilesetImage('Pacman_Tilemap', 'tiles');

        var layer = map.createStaticLayer('Borders', tileset, 0, 0);

        layer.setCollisionByExclusion(-1, true);


        player = this.physics.add.image(40, 40, 'jugador');
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, layer);

        this.cameras.main.startFollow(player);

        this.cameras.main.setZoom(1.5);
    }




    update(){

        player.setVelocity(0);

        if(cursors.left.isDown){
            player.setVelocityX(-100)
        }
        else if(cursors.right.isDown){
            player.setVelocityX(100)
        }

        if(cursors.up.isDown){
            player.setVelocityY(-100)
        }
        else if(cursors.down.isDown){
            player.setVelocityY(100)
        }
    }
}