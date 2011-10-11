/*globals Tictactoe */

Tictactoe.GameView = SC.LabelView.extend({
	classNames: ['gameView'],
	contentBinding: 'Tictactoe.GameController.board.moveCount',
	value: function () {
		if (Tictactoe.GameController.board.get('moveCount') === 0) {
			return "You're turn first! Click on a sqaure to move!";
		}
		var state = Tictactoe.GameController.get('gameState');
		switch (state) {
			case Tictactoe.GameState.Playing:
				return '';
			case Tictactoe.GameState.Draw:
				return "Draw! Reload the page to play again.";
			case Tictactoe.GameState.UserWon:
				return "What!? You won! Message me on Github and tell me how you did it!";
			case Tictactoe.GameState.ComputerWon:
				return "Sorry, you lost. Reload the page to play again.";
		}
	}.property('content').cacheable(),
	layout: {
		centerX: 0,
		width: 750,
		height: 50,
		top: 50
  }
});
