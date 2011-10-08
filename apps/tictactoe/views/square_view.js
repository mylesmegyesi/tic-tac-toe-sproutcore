/*globals Tictactoe */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Tictactoe.SquareView = SC.LabelView.extend({
  classNames: ['squareView'],
	click: function () {
		Tictactoe.GameController.userMove(this.content);
	},
	value: function () {
		var value = this.content.value;
		return (value ? value : '');
	}.property('content.value').cacheable()
});
