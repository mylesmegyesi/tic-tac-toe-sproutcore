// ==========================================================================
// Project:   Tictactoe.gameController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe */

sc_require('controllers/game_controller');

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Tictactoe.GameController = SC.ObjectController.create({
	userMove: function (space) {
		space.set('value', 'X');
	}
});
