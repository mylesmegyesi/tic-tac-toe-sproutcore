/*globals Tictactoe */

Tictactoe.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'gameView boardView'.w(),
		gameView: Tictactoe.GameView.create(),
    boardView: Tictactoe.BoardView.create()
  })
});
