var config = {
    type: Phaser.AUTO,
    width: 300,
    height: 300,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: true
        }
    },
    scene: [scene1]
};

var game = new Phaser.Game(config);

var player
var cursors