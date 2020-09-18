
class scene1 extends Phaser.Scene {
    constructor() {
        super('main');
    }

    preload(){

        this.load.image('btn1', 'assets/images/boton1.png');
        this.load.image('btn2', 'assets/images/boton2.png');
        this.load.image('jugador', 'assets/images/player.png');
        this.load.image('enemy', 'assets/images/enemy.png');
        this.load.image('enemy2', 'assets/images/enemyB.png');
        this.load.image('enemy3', 'assets/images/enemyG.png');
        this.load.image('enemy4', 'assets/images/enemyY.png');

        this.load.tilemapTiledJSON('map', 'assets/Tilemaps/maps/Map1.json');
        this.load.tilemapTiledJSON('map2', 'assets/Tilemaps/maps/Map2.json');
        
        this.load.image('tiles', 'assets/Tilemaps/tiles/spr_all5_4A2.png');
    }

    create(){
        var lvl1 = this.add.image(110, 210, 'btn1')
        lvl1.setInteractive()
        lvl1.on('pointerdown', () => this.scene.start('level1'))

        var lvl2 =this.add.image(310 ,210, 'btn2');
        lvl2.setInteractive()
        lvl2.on('pointerdown', () => this.scene.start('level2'))
        score = 0
    }
}
export default scene1;