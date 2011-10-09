// ==========================================================================
// Project:   Tictactoe.gameController Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.GameController", {
	setup: function() {
		SC.RunLoop.begin();
	},
	teardown: function() {
		SC.RunLoop.end();
	}
});

test("User can't move if it isn't his turn", function() {
  Tictactoe.GameController.set('moveCount', 1);
	var square = SC.Object.create();
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	SC.RunLoop.end();
	equals(square.set.callCount, 0);
});

test("User can't move if the game is over", function() {
  Tictactoe.GameController.set('moveCount', 9);
	var square = SC.Object.create();
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	SC.RunLoop.end();
	equals(square.set.callCount, 0);
});

test("User can't move if the square is already taken", function() {
	Tictactoe.GameController.set('moveCount', 0);
	var square = SC.Object.create({value: 'X'});
	square.set = CoreTest.stub('square.set', function () {});
	Tictactoe.GameController.userMove(square);
	SC.RunLoop.end();
	equals(square.set.callCount, 0);
});

test("If the move count is even, it is the user's turn", function() {
	Tictactoe.GameController.set('moveCount', 2);
	SC.RunLoop.end();
	equals(Tictactoe.GameController.get('isUsersTurn'), true);
});

test("If the move count is odd, it is not the user's turn", function() {
  Tictactoe.GameController.set('moveCount', 3);
	SC.RunLoop.end();
	equals(Tictactoe.GameController.get('isUsersTurn'), false);
});

test("Move count is incrimented when the board changes", function() {
  Tictactoe.GameController.set('moveCount', 0);
	Tictactoe.GameController.userMove(Tictactoe.BoardController.arrangedObjects().content[0]);	
	SC.RunLoop.end();
	equals(Tictactoe.GameController.get('moveCount'), 1);
});

