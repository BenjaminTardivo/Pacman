import scene1 from "./scene1.js";
import scene2 from "./scene2.js";
import scene3 from "./scene3.js";
var config = {
    type: Phaser.AUTO,
    width: 420,
    height: 420,
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
    scene: [scene1, scene2, scene3]
};

var game = new Phaser.Game(config);

var player
var cursors
var coins
var layer
var dots
var score
var scoreText
var enemies
var enemy1
var enemy2
var enemy3
var enemy4