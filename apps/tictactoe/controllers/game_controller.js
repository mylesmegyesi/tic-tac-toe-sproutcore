/*globals Tictactoe */

sc_require('models/player_symbols');
sc_require('models/computer_model');
sc_require('models/square_model');
sc_require('models/board_model');
sc_require('models/game_state');
sc_require('helpers/game_helper');

Tictactoe.GameController = SC.ObjectController.create({
	board: Tictactoe.Board.create(),
	computer: Tictactoe.Computer.create(),
	gameHelper: Tictactoe.GameHelper.create(),
  isUsersTurn: function () {
		var moveCount = this.board.get('moveCount');
		return ( moveCount % 2) === 0;
	}.property('board.moveCount').cacheable(),
	gameState: function () {
		return this.gameHelper.gameState(this.board.get('values'));
	}.property('isUsersTurn').cacheable(),
  userMove: function(square) {
		// check if game is over
		var squareVal = square.get('value');
		var usersTurn = this.get('isUsersTurn');
		var done = this.get('gameState') != Tictactoe.GameState.Playing;
    if (square.get('value') !== null || !this.get('isUsersTurn') || this.get('gameState') != Tictactoe.GameState.Playing) {
      return;
    }
    square.set('value', Tictactoe.PlayerSymbols.User);
  },
	computerMove: function () {
		// check if game is over
		if (this.get('isUsersTurn') || this.get('gameState') != Tictactoe.GameState.Playing) {
			return;
		}
		this.board.setIndex(this.computer.getNextMove(this.board.get('values')), Tictactoe.PlayerSymbols.Computer);
	}.observes('isUsersTurn')
});
