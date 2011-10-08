// ==========================================================================
// Project:   Tictactoe - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Tictactoe */

Tictactoe.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'boardView'.w(),
    boardView: Tictactoe.BoardView.create()
  })
});
