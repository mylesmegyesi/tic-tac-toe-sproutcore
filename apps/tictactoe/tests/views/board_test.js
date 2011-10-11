/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.BoardView");

test("Board view updates after changing a square value", function() {
  var boardView = Tictactoe.BoardView.create();
	Tictactoe.GameController.board.setIndex(0, Tictactoe.PlayerSymbols.User);
	SC.RunLoop.end(); // for some reason the view doesn't recieve the update until the end of the run loop
	equals(boardView.get('content').objectAt(0).get('value'), Tictactoe.PlayerSymbols.User);
});

