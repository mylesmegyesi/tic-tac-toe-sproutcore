/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.Board");

test("Move count is incrimented when the board changes", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.resetIndexWeights = CoreTest.stub('board.resetIndexWeights', function () {});
	board.boardChanged();
	equals(board.get('moveCount'), 1);
});

test("squares returns each square", function() {
  var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	var squares = board.get('squares');
	equals(squares[0].get('value'), Tictactoe.PlayerSymbols.User);
	equals(squares.length, 9);
});

test("values returns each value", function() {
  var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	var values = board.get('values');
	equals(values[0], Tictactoe.PlayerSymbols.User);
	equals(values.length, 9);
});

test("CopyWithoutObservers creates a copy of board", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(7, Tictactoe.PlayerSymbols.Computer);
	var board2 = board.copyWithoutObservers();
	equals(board2.getIndex(0), Tictactoe.PlayerSymbols.User);
	equals(board2.getIndex(7), Tictactoe.PlayerSymbols.Computer);
});

test("CopyWithoutObservers creates a copy of board with observers turned off", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	var board2 = board.copyWithoutObservers();
	equals(board2.get('boardObserversOn'), false);
});

test("Copy creates a copy of board with observers turned on", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	var board2 = board.copy();
	equals(board2.get('boardObserversOn'), true);
});

test("turnOnObservers turns observers on", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.turnOnObservers();
	// turn off reseting the index weights so the test doesn't take too long
	board.resetIndexWeights = CoreTest.stub('board.resetIndexWeights', function () {});
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(1, Tictactoe.PlayerSymbols.User);
	equals(board.get('moveCount'), 2);
});

test("turnOffObservers turns observers off", function() {
  var board = Tictactoe.Board.create();
	board.turnOffObservers();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	equals(board.get('moveCount'), 0);
});

test("Board changes increments move count", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.boardChanged();
	equals(board.get('moveCount'), 1);
});

test("Changing boardObserversOn triggers toggleBoardObservers", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.toggleBoardObservers = CoreTest.stub('board.toggleBoardObservers', function () {});
	board.set('boardObserversOn', true);
	equals(board.toggleBoardObservers.callCount, 1);
});

test("Reset clears the board", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	for(var i=0; i<9; i++) {
		board.setIndex(i, Tictactoe.PlayerSymbols.User);
	}
	board.reset();
	for(i=0; i<9; i++) {
		equals(board.getIndex(i), null);
	}
});

test("Reset doesn't trigger boardChanged observer", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.boardChanged = CoreTest.stub('board.boardChanged', function () {});
	board.reset();
	equals(board.boardChanged.callCount, 0);
});

test("Reset resets move count", function() {
  var board = Tictactoe.Board.create({boardObserversOn: false});
	board.reset();
	equals(board.get('moveCount'), 0);
});

