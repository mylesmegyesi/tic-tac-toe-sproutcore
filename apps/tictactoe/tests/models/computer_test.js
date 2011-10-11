/*globals Tictactoe module test ok equals notEquals same stop start */

var board;
var computer;
var gameHelper = Tictactoe.GameHelper.create();
module("Tictactoe.Computer", {
  setup: function() {
    board = [null, null, null, null, null, null, null, null, null];
		computer = Tictactoe.Computer.create();
  }
});

function recurse(board) {
	var newBoard;
	for (var i=0; i<9; i++) {
		if (board[i] !== null) {
			continue;
		}
		newBoard = board.slice(0);
		newBoard[i] = Tictactoe.PlayerSymbols.User;
		newBoard[computer.getNextMove(newBoard)] = Tictactoe.PlayerSymbols.Computer;
		var gameState = gameHelper.gameState(newBoard);
		if (gameState != Tictactoe.GameState.Playing) {
			ok(gameState != Tictactoe.GameState.UserWon, "Draw or Computer won");
		}
		else {
			recurse(newBoard);
		}
	}
}

test("Programmatically try to beat the computer", function() {
	recurse(board);
});