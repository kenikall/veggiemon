// $(document).ready(function(){
  // loadGame();
// })


// var loadGame = function(){
	
// }

var mainState = {
	preload: function() {
		game.load.image('background', '/images/combat/background.png')

	},

	create: function() {
		game.stage.backgroundColor = '#71c5cf';
		this.background = game.add.sprite(0,0,'background');
		// this.background.anchor(.5,.5);
	},

	update: function() {
	}
}

game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('main', mainState);
game.state.start('main');