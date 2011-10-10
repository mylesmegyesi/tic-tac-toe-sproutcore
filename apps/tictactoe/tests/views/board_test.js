/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.BoardView");

test("Board view updates after changing a square value", function() {
  var boardView = Tictactoe.BoardView.create();
	Tictactoe.GameController.board.setIndex(0, 'O');
	SC.RunLoop.end();
	equals(boardView.content[0].get('value'), 'O');
});

