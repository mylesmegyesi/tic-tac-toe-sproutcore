/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.GameController");

test("User can't move if it isn't his turn", function() {
  Tictactoe.GameController.board.set('moveCount', 1);
	var square = SC.Object.create();
	square.set = CoreTest.stub('square.set', function () {});
	SC.RunLoop.end();
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
	Tictactoe.GameController.board.set('moveCount', 0);
	var square = SC.Object.create({value: 'X'});
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	equals(square.set.callCount, 0);
});

test("If the move count is even, it is the user's turn", function() {
	Tictactoe.GameController.board.set('moveCount', 2);
	equals(Tictactoe.GameController.get('isUsersTurn'), true);
});

test("If the move count is odd, it is not the user's turn", function() {
  Tictactoe.GameController.board.set('moveCount', 3);
	equals(Tictactoe.GameController.get('isUsersTurn'), false);
});

test("Computer doesn't move if it is not his turn", function() {
  Tictactoe.GameController.board.set('moveCount', 0); // this will trigger the computerMove function
	equals(Tictactoe.GameController.board.get('moveCount'), 0);
});

test("Computer doesn't move if it is not his turn", function() {
  Tictactoe.GameController.board.set('moveCount', 1); // this will trigger the computerMove function
	equals(Tictactoe.GameController.board.get('moveCount'), 2);
});

