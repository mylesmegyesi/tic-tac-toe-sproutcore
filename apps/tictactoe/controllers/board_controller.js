// ==========================================================================
// Project:   Tictactoe.Board
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe */

sc_require('models/square_model');

/** @class

  (Document your Controller here)

*/
Tictactoe.BoardController = SC.ArrayController.create({
  orderBy: 'position',
  content: [
  Tictactoe.Square.create({
    position: 0,
  }), Tictactoe.Square.create({
    position: 1
  }), Tictactoe.Square.create({
    position: 2
  }), Tictactoe.Square.create({
    position: 3
  }), Tictactoe.Square.create({
    position: 4
  }), Tictactoe.Square.create({
    position: 5
  }), Tictactoe.Square.create({
    position: 6
  }), Tictactoe.Square.create({
    position: 7
  }), Tictactoe.Square.create({
    position: 8
  })]
});
