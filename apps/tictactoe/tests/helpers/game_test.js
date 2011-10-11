/*globals Tictactoe module test ok equals same stop start */

var board;
var helper;
module("Tictactoe.GameHelpers", {
  setup: function() {
    helper = Tictactoe.GameHelper.create();
    board = [null, null, null, null, null, null, null, null, null];
  }
});

test("Finds that player won in the first row",
function() {
  board[0] = Tictactoe.PlayerSymbols.User;
  board[1] = Tictactoe.PlayerSymbols.User;
  board[2] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that player won in the second row",
function() {
  board[3] = Tictactoe.PlayerSymbols.User;
  board[4] = Tictactoe.PlayerSymbols.User;
  board[5] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user is the winner in the third row",
function() {
  board[6] = Tictactoe.PlayerSymbols.User;
  board[7] = Tictactoe.PlayerSymbols.User;
  board[8] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won in the first column",
function() {
  board[0] = Tictactoe.PlayerSymbols.User;
  board[3] = Tictactoe.PlayerSymbols.User;
  board[6] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won in the second column",
function() {
  board[1] = Tictactoe.PlayerSymbols.User;
  board[4] = Tictactoe.PlayerSymbols.User;
  board[7] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won in the third column",
function() {
  board[2] = Tictactoe.PlayerSymbols.User;
  board[5] = Tictactoe.PlayerSymbols.User;
  board[8] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won on the left to right diagonal",
function() {
  board[0] = Tictactoe.PlayerSymbols.User;
  board[4] = Tictactoe.PlayerSymbols.User;
  board[8] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that user won on the right to left diagonal",
function() {
  board[0] = Tictactoe.PlayerSymbols.User;
  board[4] = Tictactoe.PlayerSymbols.User;
  board[8] = Tictactoe.PlayerSymbols.User;
  ok(helper.checkIfPlayerWon(board, Tictactoe.PlayerSymbols.User));
});

test("Finds that the user won",
function() {
  board[0] = Tictactoe.PlayerSymbols.User;
  board[4] = Tictactoe.PlayerSymbols.User;
  board[8] = Tictactoe.PlayerSymbols.User;
  equals(helper.gameState(board), Tictactoe.GameState.UserWon);
});

test("Finds that the computer won",
function() {
  board[0] = Tictactoe.PlayerSymbols.Computer;
  board[4] = Tictactoe.PlayerSymbols.Computer;
  board[8] = Tictactoe.PlayerSymbols.Computer;
  equals(helper.gameState(board), Tictactoe.GameState.ComputerWon);
});

test("Finds that the board is full",
function() {
  for (var i = 0; i < 9; i++) {
    board[i] = Tictactoe.PlayerSymbols.User;
  }
  ok(helper.boardIsFull(board));
});
