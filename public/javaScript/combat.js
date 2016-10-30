// $(document).ready(function(){
  // loadGame();
// })


// var loadGame = function(){
	
// }

var mainState = {
	preload: function() {
		game.load.image('background', 'images/combat_background.png');
		// trainer
		game.load.image('trainer', 'images/trainer.png');
		// food
		game.load.image('apple_g', 'images/apple_g.png');
		game.load.image('apple_r', 'images/apple_r.png');
		game.load.image('banana', 'images/banana.png');
		game.load.image('berry', 'images/berry.png');
		game.load.image('bread', 'images/bread.png');
		game.load.image('cBar', 'images/c_bar.png');
		game.load.image('cake', 'images/cake.png');
		game.load.image('cCake', 'images/cake_c.png');
		game.load.image('candy', 'images/candy.png');
		game.load.image('cheese', 'images/cheese.png');
		game.load.image('cherry', 'images/cherry.png');
		game.load.image('cookie', 'images/cookie.png');
		game.load.image('corn', 'images/corn.png');
		game.load.image('doughnut', 'images/doughnut.png');
		game.load.image('eggplant', 'images/eggplant.png');
		game.load.image('fries', 'images/fries.png');
		game.load.image('grapes', 'images/grapes.png');
		game.load.image('ice_cream', 'images/ice_cream.png');
		game.load.image('lemon', 'images/lemon.png');
		game.load.image('mellon', 'images/mellon.png');
		game.load.image('orange', 'images/orange.png');
		game.load.image('peach', 'images/peach.png');
		game.load.image('pear', 'images/pear.png');
		game.load.image('pineapple', 'images/pineapple.png');
		game.load.image('pop', 'images/pop.png');
		game.load.image('popcorn', 'images/popcorn.png');
		game.load.image('tomato', 'images/tomato.png');
	},

	create: function() {
		game.stage.backgroundColor = '#71c5cf';
		this.background = game.add.sprite(0,0,'background');
		// this.background.anchor(.5,.5);
		this.trainer = game.add.sprite(100,300, 'trainer');
		this.trainer.anchor.setTo(.5,.5);

		this.veggie = game.add.sprite()
	},

	update: function() {
	}
}

game = new Phaser.Game(800,480, Phaser.AUTO, '');
game.state.add('main', mainState);
game.state.start('main');