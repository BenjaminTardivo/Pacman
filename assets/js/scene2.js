import Pacman from './pacman.js';
import phantom from './phantom.js';

class scene2 extends Phaser.Scene {
    constructor() {
        super('level1');
    }



    create(){
        
        cursors = this.input.keyboard.createCursorKeys();

        var map = this.make.tilemap({ key: 'map' });

        var tileset = map.addTilesetImage('Pacman_Tilemap', 'tiles');

        layer = map.createStaticLayer('Borders', tileset, 0, 0);
        coins = map.createDynamicLayer('Coins', tileset, 0, 0);
        dots = map.createDynamicLayer('Dots', tileset, 0, 0);


        //layer.setCollisionByExclusion(-1, true);
        layer.setCollisionBetween(1, 232)

        coins.setTileIndexCallback(1, this.hitCoin, this);
        dots.setTileIndexCallback(13, this.hitDot, this);


        player = new Pacman ({scene: this, x: 40, y: 40, });
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, layer);
        score = 0
        scoreText = this.add.text(0, 0, 'score: ' + score)



        this.physics.add.overlap(player, coins)
        this.physics.add.overlap(player, dots)

        enemy1 = new phantom ({scene: this, x: 30, y: 390, texture: 'enemy'})
        enemy2 = new phantom ({scene: this, x: 390, y: 390, texture: 'enemy2'})
        enemy3 = new phantom ({scene: this, x: 30, y: 230, texture: 'enemy3'})
        enemy5 = new phantom ({scene: this, x: 170, y: 320, texture: 'enemy3'})
        enemy6 = new phantom ({scene: this, x: 250, y: 90, texture: 'enemy2'})
        enemy7 = new phantom ({scene: this, x: 390, y: 30, texture: 'enemy'})

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
        this.tweenEnemy5 = this.tweens.add({
            targets: enemy5,
            duration: 4000,
            y: 90,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        })
        this.tweenEnemy6 = this.tweens.add({
            targets: enemy6,
            duration: 4000,
            y: 320,
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
export default scene2;