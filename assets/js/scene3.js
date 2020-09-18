import Pacman from './pacman.js';
import phantom from './phantom.js';


class scene3 extends Phaser.Scene {
    constructor() {
        super('level2');
    }



    create(){
        
        cursors = this.input.keyboard.createCursorKeys();

        var map = this.make.tilemap({ key: 'map2' });

        var tileset = map.addTilesetImage('Pacman_Tile', 'tiles');

        layer = map.createStaticLayer('Borders2', tileset, 0, 0);
        coins = map.createDynamicLayer('Coins2', tileset, 0, 0);
        dots = map.createDynamicLayer('Dots2', tileset, 0, 0);

        layer.setCollisionByExclusion(-1, true);

        coins.setTileIndexCallback(1, this.hitCoin, this);
        dots.setTileIndexCallback(13, this.hitDot, this);




        player = new Pacman ({scene: this, x: 40, y: 40, });
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, layer);

        //this.cameras.main.startFollow(player);

       // this.cameras.main.setZoom(1.5);

        this.physics.add.overlap(player, coins)
        this.physics.add.overlap(player, dots)
       

        score = 0
        scoreText = this.add.text(0, 0, 'score: ' + score)
        
        enemy1 = new phantom ({scene: this, x: 30, y: 390, texture: 'enemy'})// enemies.create (30, 390, 'enemy')
        enemy2 = new phantom ({scene: this, x: 390, y: 390, texture: 'enemy2'})//enemies.create (390, 390, 'enemy')
        enemy3 = new phantom ({scene: this, x: 30, y: 230, texture: 'enemy3'})//enemies.create (30, 230, 'enemy')
        enemy4 = new phantom ({scene: this, x: 150, y: 170, texture: 'enemy4'})//enemies.create (150, 170, 'enemy')
        enemy5 = new phantom ({scene: this, x: 90, y: 190, texture: 'enemy3'})//enemies.create (90, 190, 'enemy')
        enemy6 = new phantom ({scene: this, x: 330, y: 70, texture: 'enemy2'})//enemies.create (330, 70, 'enemy')
        enemy7 = new phantom ({scene: this, x: 390, y: 30, texture: 'enemy'})//enemies.create (390, 30, 'enemy')
        
        this.physics.add.overlap(player, enemy1, this.death, null, this)
        this.physics.add.overlap(player, enemy2, this.death, null, this)
        this.physics.add.overlap(player, enemy3, this.death, null, this)
        this.physics.add.overlap(player, enemy4, this.death, null, this)
        this.physics.add.overlap(player, enemy5, this.death, null, this)
        this.physics.add.overlap(player, enemy6, this.death, null, this)
        this.physics.add.overlap(player, enemy7, this.death, null, this)

        this.tweenEnemy1 = this.tweens.add({
            targets: enemy1,
            duration: 3000,
            x: 390,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy2 = this.tweens.add({
            targets: enemy2,
            duration: 2000,
            y: 230,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy3 = this.tweens.add({
            targets: enemy3,
            duration: 2000,
            y: 390,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy4 = this.tweens.add({
            targets: enemy4,
            duration: 2000,
            x: 270,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy5 = this.tweens.add({
            targets: enemy5,
            duration: 2000,
            y: 70,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy6 = this.tweens.add({
            targets: enemy6,
            duration: 2000,
            y: 190,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy7 = this.tweens.add({
            targets: enemy7,
            duration: 4000,
            x: 30,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
    }
    death(){
        this.scene.restart()
    }
    hitCoin(sprite, tile){
        coins.removeTileAt(tile.x, tile.y);
        score += 10
        scoreText.setText('score: ' + score)

    }
    hitDot(sprite, tile){
        dots.removeTileAt(tile.x, tile.y);
        score += 5
        scoreText.setText('score: ' + score)

    }



}
export default scene3;