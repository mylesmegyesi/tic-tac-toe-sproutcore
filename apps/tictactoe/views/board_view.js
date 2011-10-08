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
    width: 300,
    height: 306
  },
  exampleView: Tictactoe.SquareView,
  content: [1, 1, 0, 1, 2, 1, 1, 1, 1]
});
