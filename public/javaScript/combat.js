// $(document).ready(function(){
  // loadGame();
// })


// var loadGame = function(){
	
// }

var mainState = {
	preload: function() {
		//sounds
		game.load.audio('bad1', '/sounds/bad1.png');
		game.load.audio('bad2', '/sounds/bad2.png');
		game.load.audio('bad3', '/sounds/bad3.png');
		game.load.audio('good1', '/sounds/good1.png');
		game.load.audio('good2', '/sounds/good2.png');
		game.load.audio('good3', '/sounds/good3.png');
		//background
		game.load.image('background', '/images/combat_background.png');
		// trainer
		game.load.image('trainer', '/images/trainer.png');
		// food
		game.load.image('apple_g', '/images/apple_g.png');
		game.load.image('apple_r', '/images/apple_r.png');
		game.load.image('banana', '/images/banana.png');
		game.load.image('berry', '/images/berry.png');
		game.load.image('bread', '/images/bread.png');
		game.load.image('cBar', '/images/c_bar.png');
		game.load.image('cake', '/images/cake.png');
		game.load.image('cCake', '/images/cake_c.png');
		game.load.image('candy', '/images/candy.png');
		game.load.image('cheese', '/images/cheese.png');
		game.load.image('cherry', '/images/cherry.png');
		game.load.image('cookie', '/images/cookie.png');
		game.load.image('corn', '/images/corn.png');
		game.load.image('doughnut', '/images/doughnut.png');
		game.load.image('eggplant', '/images/eggplant.png');
		game.load.image('fries', '/images/fries.png');
		game.load.image('grapes', '/images/grapes.png');
		game.load.image('ice_cream', '/images/ice_cream.png');
		game.load.image('lemon', '/images/lemon.png');
		game.load.image('mellon', '/images/mellon.png');
		game.load.image('orange', '/images/orange.png');
		game.load.image('peach', '/images/peach.png');
		game.load.image('pear', '/images/pear.png');
		game.load.image('pineapple', '/images/pineapple.png');
		game.load.image('pop', '/images/pop.png');
		game.load.image('popcorn', '/images/popcorn.png');
		game.load.image('tomato', '/images/tomato.png');
		//template images
		game.load.image('right', '/images/left_arrow.png');
		game.load.image('left', '/images/right_arrow.png');
		game.load.image('answer_div', '/images/answer_div.png');
		game.load.image('happiness_div', '/images/happiness_div.png');
		game.load.image('happiness_full', '/images/happiness_full.png');
		game.load.image('question_div', '/images/question_div.png');
		game.load.image('white_circle', '/images/white_circle.png');
		game.load.image('mad_face', '/images/mad_face.png');
		game.load.image('happy_face', '/images/happy_face.png');
		//veggimon
		game.load.image('brocolil', '/images/brocolil.png');
	},

	create: function() {
		game.stage.backgroundColor = '#71c5cf';
		this.background = game.add.sprite(0,0,'background');
		// this.background.anchor(.5,.5);
		this.trainer = game.add.sprite(60,100, 'trainer');
		// this.trainer.alpha = 0;
		this.veggiemon = game.add.sprite(600,32, 'brocolil');

		this.answerContainer = game.add.sprite(10,330, 'question_div');
		this.healthContainer = game.add.sprite(11,8, 'happiness_div');
		this.heathback = game.add.sprite(this.healthContainer.x+6,this.healthContainer.y+6, 'happiness_full');
		this.happy = game.add.sprite(470, 10, 'happy_face');
		this.mad = game.add.sprite(10, 10, 'mad_face');
		this.answer1 = game.add.sprite(20,390, 'answer_div');
		this.answer2 = game.add.sprite(215,390, 'answer_div');
		this.answer3 = game.add.sprite(410,390, 'answer_div');
		this.answer4 = game.add.sprite(605,390, 'answer_div');

		this.left = game.add.sprite(225, 270, 'left_arrow');
		this.circle1 = game.add.sprite(270,250, 'white_circle');
		this.circle2 = game.add.sprite(370,250, 'white_circle');
		this.circle3 = game.add.sprite(470,250, 'white_circle');
		this.circle4 = game.add.sprite(570,250, 'white_circle');
		this.circle5 = game.add.sprite(670,250, 'white_circle');
		this.right = game.add.sprite(750,270, 'right_arrow')

		this.food1 = game.add.sprite(260,260, 'pear');
		this.food2 = game.add.sprite(360,260, 'corn');
		this.food3 = game.add.sprite(460,260, 'cake');
		this.food4 = game.add.sprite(560,260, 'banana');
		this.food5 = game.add.sprite(660,260, 'ice_cream');

		
	},

	update: function() {
	}
}

game = new Phaser.Game(800,480, Phaser.AUTO, '');
game.state.add('main', mainState);
game.state.start('main');