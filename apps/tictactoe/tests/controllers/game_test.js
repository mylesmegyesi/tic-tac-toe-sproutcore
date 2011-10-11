/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.GameController", {
	teardown: function () {
		Tictactoe.GameController.board.reset();
	}
});

test("User can't move if it isn't his turn", function() {
  Tictactoe.GameController.board.set('moveCount', 1);
	var square = SC.Object.create();
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	equals(square.set.callCount, 0);
});

test("User can't move if the game is over", function() {
  Tictactoe.GameController.board.set('moveCount', 9);
	var square = SC.Object.create();
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	equals(square.set.callCount, 0);
});

test("User can't move if the square is already taken", function() {
	var square = SC.Object.create({value: 'X'});
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	equals(square.set.callCount, 0);
});

test("User moves", function() {
	var square = SC.Object.create({value: null});
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	equals(square.set.callCount, 1);
});

test("If the move count is even, it is the user's turn", function() {
	equals(Tictactoe.GameController.get('isUsersTurn'), true);
});

test("Computer doesn't move if it is not his turn", function() {
  Tictactoe.GameController.board.set('moveCount', 0);
	equals(Tictactoe.GameController.board.get('moveCount'), 0);
});

