// ==========================================================================
// Project:   Tictactoe.BoardView Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.BoardView", {
	setup: function() {
		SC.RunLoop.begin();
		Tictactoe.BoardController = SC.ArrayController.create({orderBy:'position', isEditable: true, content:[]});
	},
	teardown: function() {
		SC.RunLoop.end();
	}
});

test("Board view has no objects before adding anything to the board controller", function() {
  var boardView = Tictactoe.BoardView.create();
	SC.RunLoop.end();
	equals(boardView.content.content.length, Tictactoe.BoardController.length());
});

test("Board view has one object after adding object to the board controller", function() {
  var boardView = Tictactoe.BoardView.create();
	Tictactoe.BoardController.addObject(SC.Object.create({'position': 0, 'value': 'X'}));
	SC.RunLoop.end();
	equals(boardView.content.content.length, Tictactoe.BoardController.length());
	equals(boardView.content.content[0]['value'], 'X');
});

test("Board view updates after changing a square value", function() {
  var boardView = Tictactoe.BoardView.create();
	var square = SC.Object.create({'position': 0, 'value': 'X'});
	Tictactoe.BoardController.addObject(square);
	SC.RunLoop.end();
	SC.RunLoop.begin();
	square['value'] = 'O';
	SC.RunLoop.end();
	equals(boardView.content.content.length, Tictactoe.BoardController.length());
	equals(boardView.content.content[0].value, 'O');
});

