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

test("Inner view has the same value of outer view", function() {
  var squareView = Tictactoe.SquareView.create({content: 1});
	SC.RunLoop.end();
	equals(squareView.contentView.value, squareView.content, 'The inner view should have the same value as the outer view');
});

test("Inner view has the same value of outer view after change", function() {
  var squareView = Tictactoe.SquareView.create({content: 1});
	squareView.content = 2;
	SC.RunLoop.end();
	equals(squareView.contentView.value, squareView.content, 'The inner view should have the same value as the outer view');
});

