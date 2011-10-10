/*globals Tictactoe */

sc_require('models/player_symbols');
sc_require('models/square_model');
sc_require('models/board_model');

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/

Tictactoe.GameController = SC.ObjectController.create({
	board: Tictactoe.Board.create(),
  isUsersTurn: function () {
		var moveCount = this.board.get('moveCount');
		return ( moveCount % 2) === 0;
	}.property('board.moveCount').cacheable(),
  userMove: function(square) {
    if (square.value !== null || !this.get('isUsersTurn') || this.get('gameIsOver')) {
      return;
    }
    square.set('value', Tictactoe.PlayerSymbols.User);
  },
	computerMove: function () {
		if (this.get('isUsersTurn') || this.get('gameIsOver')) {
			return;
		}
	}.observes('isUsersTurn')
});
