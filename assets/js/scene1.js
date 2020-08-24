class scene1 extends Phaser.Scene {
    constructor() {
        super('main');
    }

    preload(){

        this.load.image('btn1', 'assets/images/boton1.png')
        this.load.image('btn2', 'assets/images/boton2.png')
        this.load.image('jugador', 'assets/images/player.png');

        this.load.tilemapTiledJSON('map', 'assets/Tilemaps/maps/Map1.json');
        this.load.tilemapTiledJSON('map2', 'assets/Tilemaps/maps/Map2.json');
        
        this.load.image('tiles', 'assets/Tilemaps/tiles/spr_all5_4A2.png');
    }

    create(){
        var lvl1 = this.add.image(200, 300, 'btn1')
        lvl1.setInteractive()
        lvl1.on('pointerdown', () => this.scene.start('level1'))

        var lvl2 =this.add.image(400 ,300, 'btn2');
        lvl2.setInteractive()
        lvl2.on('pointerdown', () => this.scene.start('level2'))
    }
}