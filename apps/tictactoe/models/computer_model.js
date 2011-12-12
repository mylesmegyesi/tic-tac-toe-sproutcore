 /*globals Tictactoe */

sc_require('helpers/game_helper');

Tictactoe.Computer = SC.Object.extend({
	helper: Tictactoe.GameHelper.create(),
	getNextMove: function(board, callback) {
	  $.ajax({
      url: "http://tictactoeserver.herokuapp.com/get-move",
      data : {
        board: JSON.stringify(board.get('values')),
        player: Tictactoe.PlayerSymbols.Computer
      },
      dataType: "jsonp",
      crossDomain: true,
      success: function(data, textStatus, jqXHR) {
        var move = parseInt(data, 10); 
        board.setIndex(move, Tictactoe.PlayerSymbols.Computer);
      }
    });
	}
});
