/*globals Tictactoe */

sc_require('models/square_model');

Tictactoe.Board = SC.Object.extend({
	init: function () {
		sc_super();
		
		// populate the internal array
		this._array = [];
		for (var i=0; i<9; i++) {
			this._array.pushObject(Tictactoe.Square.create());
		}
		// setup the observers
		this.toggleBoardObservers();
	},
	boardObserversOn: true,
	moveCount: 0,
	toggleBoardObservers: function() {
		if (this.get('boardObserversOn')) {
			this.turnOnObservers();
		}
		else {
			this.turnOffObservers();
		}
	}.observes('boardObserversOn'),
	turnOnObservers: function () {
		for (var i=0; i<9; i++) {
			this._array[i].addObserver('value', this, this.boardChanged);
		}
	},
	turnOffObservers: function () {
		for (var i=0; i<9; i++) {
			this._array[i].removeObserver('value', this, this.boardChanged);
		}
	},
	boardChanged: function() {
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
	}.property(),
	values: function() {
		var values = [];
		for (var i=0; i<9; i++) {
			values[i] = this.getIndex(i);
		}
		return values;
	}.property(),
	copy: function () {
		var newBoard = this.copyWithoutObservers();
		newBoard.set('boardObserversOn', true);
		return newBoard;
	},
	copyWithoutObservers: function () {
		var newBoard = Tictactoe.Board.create({boardObserversOn: false});
		for (var i=0; i<9; i++) {
			newBoard.setIndex(i, this._array[i].get('value'));
		}
		return newBoard;
	},
	reset: function() {
		var observersOn = this.get('boardObserversOn');
		if (observersOn) {
			this.turnOffObservers();
		}
		for (var i=0; i<9; i++) {
			this.setIndex(i, null);
		}
		this.set('moveCount', 0);
		if (observersOn) {
			this.turnOnObservers();
		}
	}
});
