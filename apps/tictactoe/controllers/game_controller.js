// ==========================================================================
// Project:   Tictactoe.gameController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Tictactoe.GameController = SC.ObjectController.create({
	init: function() {
		sc_super();
		this.setupObservers(this);
	},
	setupObservers: function(target) {
		Tictactoe.BoardController.arrangedObjects().forEach(function (item, index, enumerable) {
			item.addObserver('value', function() {
				target.set('moveCount', target.get('moveCount') + 1);
			});
		});
	},
	moveCount: 0,
  isUsersTurn: function () {
		var moveCount = this.get('moveCount');
		return ( moveCount % 2) === 0;
	}.property('moveCount').cacheable(),
	gameIsOver: function() {
		if (this.get('moveCount') >= 9) {
			return true;
		}
		return false;
	}.property('moveCount').cacheable(),
  userMove: function(square) {
    if (!this.get('isUsersTurn') || this.get('gameIsOver') || square.value !== null) {
      return;
    }
    square.set('value', 'X');
  }
});
