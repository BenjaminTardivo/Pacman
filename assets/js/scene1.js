class scene1 extends Phaser.Scene {
    constructor() {
        super('main');
    }

    preload(){
        this.load.image('jugador', 'assets/images/player.png');

        this.load.tilemapTiledJSON('map', 'assets/Tilemaps/maps/Map1.json');
        
        this.load.image('tiles', 'assets/Tilemaps/tiles/spr_all5_4A2.png');
    }

    create(){
        this.cameras.main.setBounds(0, 0, 20, 20);


        cursors = this.input.keyboard.createCursorKeys();

        var map = this.make.tilemap({ key: 'map' });

        var tileset = map.addTilesetImage('Pacman_Tilemap', 'tiles');

        var layer = map.createStaticLayer('Borders', tileset, 0, 0);

        layer.setCollisionByExclusion(-1, true);


        player = this.physics.add.image(40, 40, 'jugador');
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, layer)

        this.cameras.main.startFollow(player, true, 0.08, 0.08, 0, 0);

        this.cameras.main.setZoom(2);
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