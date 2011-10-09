// ==========================================================================
// Project:   Tictactoe.SquareView Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.SquareView", {
	setup: function() {
		SC.RunLoop.begin();
	},
	teardown: function() {
		SC.RunLoop.end();
	}
});

test("Value property returns value of content", function() {
	var square = Tictactoe.Square.create({content:{position: 0, value: 'X'}});
  var squareView = Tictactoe.SquareView.create(square);
	SC.RunLoop.end();
	equals(squareView.get('value'), squareView.content.value);
});

test("Value property returns value of content after change", function() {
  var square = Tictactoe.Square.create({content:{position: 0, value: 'X'}});
  var squareView = Tictactoe.SquareView.create(square);
	SC.RunLoop.end();
	SC.RunLoop.begin();
	squareView.content.value = 'O';
	SC.RunLoop.end();
	equals(squareView.get('value'), squareView.content.value);
});

test("Click event calls game controller", function() {
	var positionPassed;
	var userMoveMock = CoreTest.stub('Tictactoe.GameController.userMove', function (space) {positionPassed = space['position'];});
	Tictactoe.GameController = SC.ObjectController.create();
	Tictactoe.GameController.userMove = userMoveMock;
	var square = Tictactoe.Square.create({content:{position: 0, value: 'X'}});
  var squareView = Tictactoe.SquareView.create(square);
	squareView.click();
	equals(userMoveMock.callCount, 1);
	equals(positionPassed, 0);
});

