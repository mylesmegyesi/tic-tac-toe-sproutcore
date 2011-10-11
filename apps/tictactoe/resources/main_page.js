/*globals Tictactoe */

Tictactoe.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'boardView'.w(),
    boardView: Tictactoe.BoardView.create()
  })
});
