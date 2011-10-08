/*globals Tictactoe */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Tictactoe.SquareView = SC.LabelView.extend({
  displayProperties: 'content'.w(),
  classNames: ['squareView'],
  displayTitle: function() {
    var value = this.get('content');
    if (value == 1) {
      return 'X';
    }
    else if (value == 2) {
      return 'O';
    }

    return '';
  }.property('content', 'localize', 'formatter').cacheable()
});
