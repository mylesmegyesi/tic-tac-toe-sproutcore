/*globals Tictactoe */

sc_require('views/square_view');

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Tictactoe.BoardView = SC.GridView.extend({
	classNames: ['boardView'],
	isSelectable: false,
  columnWidth: 100,
  rowHeight: 100,
  layout: {
    centerX: 0,
    centerY: 0,
    width: 325,
    height: 300
  },
  exampleView: Tictactoe.SquareView,
  contentBinding: 'Tictactoe.GameController.board.squares'
});
