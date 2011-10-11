/*globals Tictactoe */

sc_require('models/game_state');

Tictactoe.GameHelper =  SC.Object.extend({
	// give a board, this function reports the state
	gameState: function (board) {
		if (this.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User)) {
			return Tictactoe.GameState.UserWon;
		}
		else if(this.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.Computer)) {
			return Tictactoe.GameState.ComputerWon;
		}
		else if(this.boardIsFull(board)) {
			return Tictactoe.GameState.Draw;
		}
		
		return Tictactoe.GameState.Playing;
	},
	checkIfPlayerWon: function (board, symbol) {
		return ((board[0] == symbol && board[1] == symbol && board[2] == symbol) ||
		(board[3] == symbol && board[4] == symbol && board[5] == symbol) ||
		(board[6] == symbol && board[7] == symbol && board[8] == symbol) ||
		(board[0] == symbol && board[3] == symbol && board[6] == symbol) ||
		(board[1] == symbol && board[4] == symbol && board[7] == symbol) ||
		(board[2] == symbol && board[5] == symbol && board[8] == symbol) ||
		(board[0] == symbol && board[4] == symbol && board[8] == symbol) ||
		(board[2] == symbol && board[4] == symbol && board[6] == symbol));
	},
	boardIsFull: function (board) {
		for (var i=0; i < 9; i++) {
			if (board[i] === null) {
				return false;
			}
		}
		return true;
	}
});