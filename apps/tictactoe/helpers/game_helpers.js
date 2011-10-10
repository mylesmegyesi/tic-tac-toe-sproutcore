/*globals Tictactoe */

sc_require('models/game_state');

Tictactoe.GameHelpers =  {
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
		return ((board.getIndex(0) == symbol && board.getIndex(1) == symbol && board.getIndex(2) == symbol) ||
		(board.getIndex(3) == symbol && board.getIndex(4) == symbol && board.getIndex(5) == symbol) ||
		(board.getIndex(6) == symbol && board.getIndex(7) == symbol && board.getIndex(8) == symbol) ||
		(board.getIndex(0) == symbol && board.getIndex(3) == symbol && board.getIndex(6) == symbol) ||
		(board.getIndex(1) == symbol && board.getIndex(4) == symbol && board.getIndex(7) == symbol) ||
		(board.getIndex(2) == symbol && board.getIndex(5) == symbol && board.getIndex(8) == symbol) ||
		(board.getIndex(0) == symbol && board.getIndex(4) == symbol && board.getIndex(8) == symbol) ||
		(board.getIndex(2) == symbol && board.getIndex(4) == symbol && board.getIndex(6) == symbol));
	},
	boardIsFull: function (board) {
		for (var i=0; i < 9; i++) {
			if (board.getIndex(i) === null) {
				return false;
			}
		}
		return true;
	},
	negamax: function (board, alpha, beta, player) {
		var gameState = this.gameState(board);
		if (gameState != Tictactoe.GameState.Playing) {
			switch(gameState) {
				case Tictactoe.GameState.UserWon:
					return (player == Tictactoe.PlayerSymbols.User) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
				case Tictactoe.GameState.ComputerWon:
					return (player == Tictactoe.PlayerSymbols.Computer) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
				default:
					return 0;
			}
		}
		
		var heaviest;
		for (var i=0; i<9; i++) {
			if (board.getIndex(i) !== null) {
				continue;
			}
			var newBoard;
			heaviest = Math.max(heaviest, -this.negamax(newBoard, -beta, -alpha, Tictactoe.PlayerSymbols.Computer));
			if (player == Tictactoe.PlayerSymbols.User) {
				// add player to new board
				heaviest = Math.max(heaviest, -this.negamax(newBoard, -beta, -alpha, Tictactoe.PlayerSymbols.Computer));
			}
			else if (player == Tictactoe.PlayerSymbols.Computer) {
				// add player to new board
				heaviest = Math.max(heaviest, -this.negamax(newBoard, -beta, -alpha, Tictactoe.PlayerSymbols.User));
			}
			
			// alpha-beta pruning
			if (heaviest >= beta) {
				break;
			}
		}
		return heaviest;
		
	}
};