/*globals Tictactoe */

Tictactoe.SquareView = SC.LabelView.extend({
  classNames: ['squareView'],
	click: function () {
		Tictactoe.GameController.userMove(this.get('content'));
	},
	value: function () {
		var value = this.get('content').value;
		return (value ? value : '');
	}.property('content.value').cacheable()
});
