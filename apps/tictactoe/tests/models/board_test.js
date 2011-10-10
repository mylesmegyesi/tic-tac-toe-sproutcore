/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.Board");

test("Move count is incrimented when the board changes", function() {
  var board = Tictactoe.Board.create();
	board.setIndex(0, 'X');
	SC.RunLoop.end();
	equals(board.get('moveCount'), 1);
});

test("Values returns the value of each square", function() {
  var board = Tictactoe.Board.create();
	board.setIndex(0, 'X');
	SC.RunLoop.end();
	var squares = board.get('squares');
	equals(squares[0].get('value'), 'X');
	equals(squares.length, 9);
});

