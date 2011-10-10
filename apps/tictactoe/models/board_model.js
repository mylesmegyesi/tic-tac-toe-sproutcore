/*globals Tictactoe */

sc_require('models/square_model');

/** @class

  (Document your Model here)

  @version 0.1
*/
Tictactoe.Board = SC.Object.extend({
	init: function () {
		sc_super();
		this._array = [];
		for (var i=0; i<9; i++) {
			var square = Tictactoe.Square.create();
			this._array.pushObject(square);
			square.addObserver('value', this, this.incrementMoveCount);
		}
	},
	moveCount: 0,
	incrementMoveCount: function() {
		this.set('moveCount', this.get('moveCount') + 1);
	},
	setIndex: function(index, value) {
		this._array[index].set('value', value);
	},
	getIndex: function(index) {
		return this._array[index].get('value');
	},
	squares: function() {
		return this._array;
	}.property().cacheable(),
	resetIndexWeights: function() {
		for (var i=0; i<9; i++) {
			var square = this._array[i];
			if (square.value !== null) {
				square.indexWeight = -1;
				continue;
			}
			
		}
	}.observes('moveCount'),
	getCopyWithoutObservers: function () {
		
	}
});
