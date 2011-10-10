/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.GameHelpers");

test("Finds that player won in the first row", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(1, Tictactoe.PlayerSymbols.User);
	board.setIndex(2, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that player won in the second row", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(3, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(5, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user is the winner in the third row", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(6, Tictactoe.PlayerSymbols.User);
	board.setIndex(7, Tictactoe.PlayerSymbols.User);
	board.setIndex(8, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won in the first column", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(3, Tictactoe.PlayerSymbols.User);
	board.setIndex(6, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won in the second column", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(1, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(7, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won in the third column", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(2, Tictactoe.PlayerSymbols.User);
	board.setIndex(5, Tictactoe.PlayerSymbols.User);
	board.setIndex(8, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won on the left to right diagonal", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(8, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won on the right to left diagonal", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(8, Tictactoe.PlayerSymbols.User);
	ok(Tictactoe.GameHelpers.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that the user won", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(8, Tictactoe.PlayerSymbols.User);
	equals(Tictactoe.GameHelpers.gameState(board), Tictactoe.GameState.UserWon);
});

test("Finds that the computer won", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(4, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(8, Tictactoe.PlayerSymbols.Computer);
	equals(Tictactoe.GameHelpers.gameState(board), Tictactoe.GameState.ComputerWon);
});

test("Finds that the board is full", function () {
	var board = Tictactoe.Board.create();
	for (var i=0; i<9; i++) {
		board.setIndex(i, Tictactoe.PlayerSymbols.User);
	}
	ok(Tictactoe.GameHelpers.boardIsFull(board));
});

test("Finds that there is a draw", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(1, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(2, Tictactoe.PlayerSymbols.User);
	board.setIndex(3, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(5, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(6, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(7, Tictactoe.PlayerSymbols.User);
	board.setIndex(8, Tictactoe.PlayerSymbols.Computer);
	equals(Tictactoe.GameHelpers.gameState(board), Tictactoe.GameState.Draw);
});

test("Finds that the game is still playing", function () {
	var board = Tictactoe.Board.create();
	board.setIndex(0, Tictactoe.PlayerSymbols.User);
	board.setIndex(1, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(2, Tictactoe.PlayerSymbols.User);
	board.setIndex(3, Tictactoe.PlayerSymbols.User);
	board.setIndex(4, Tictactoe.PlayerSymbols.User);
	board.setIndex(5, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(6, Tictactoe.PlayerSymbols.Computer);
	board.setIndex(7, Tictactoe.PlayerSymbols.User);
	equals(Tictactoe.GameHelpers.gameState(board), Tictactoe.GameState.Playing);
});