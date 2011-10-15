/*globals Tictactoe */

sc_require('helpers/game_helper');

Tictactoe.Computer = SC.Object.extend({
	helper: Tictactoe.GameHelper.create(),
	getNextMove: function(board) {
		var bestScore = null;
		var bestIndex;
		var newBoard;
		for(var i=0; i<9; i++) {
			if (board[i] !== null) {
				continue;
			}
			newBoard = board.slice(0);
			newBoard[i] = Tictactoe.PlayerSymbols.Computer;
			var score = -this.negamax(newBoard, Tictactoe.PlayerSymbols.User, -1000, 1000);
			if (score > bestScore || bestScore === null) {
				bestScore = score;
				bestIndex = i;
			}
		}
		return bestIndex;
	},
	negamax: function (board, player, alpha, beta) {
		var gameState = this.helper.gameState(board);
		if (gameState != Tictactoe.GameState.Playing) {
			switch(gameState) {
				case Tictactoe.GameState.UserWon:
					return (player == Tictactoe.PlayerSymbols.User) ? 1000 : -1000;
				case Tictactoe.GameState.ComputerWon:
					return (player == Tictactoe.PlayerSymbols.Computer) ? 1000 : -1000;
				default:
					return 0;
			}
		}
		
		var newBoard;
		for (var i=0; i<9; i++) {
			if (board[i] !== null) {
				continue;
			}
			
			var score;
			newBoard = board.slice(0);
			if (player == Tictactoe.PlayerSymbols.User) {
				newBoard[i] = Tictactoe.PlayerSymbols.User;
				score = -this.negamax(newBoard, Tictactoe.PlayerSymbols.Computer, -beta, -alpha);
			}
			else if (player == Tictactoe.PlayerSymbols.Computer) {
				newBoard[i] = Tictactoe.PlayerSymbols.Computer;
				score = -this.negamax(newBoard, Tictactoe.PlayerSymbols.User, -beta, -alpha);
			}
			
			alpha = Math.max(alpha, score);
			if (alpha >= beta) {
				break;
			}
			
		}
		// this is important
		// add a small heuristic to the return value to make it less valuable
		// this makes the computer choose the more imediate victory rather than the one down the road
		return alpha+1;
		
	}
});
