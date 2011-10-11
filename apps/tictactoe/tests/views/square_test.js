/*globals Tictactoe module test ok equals same stop start */

module("Tictactoe.SquareView");

test("Value property returns value of content", function() {
	var square = Tictactoe.Square.create({value: Tictactoe.PlayerSymbols.User});
  var squareView = Tictactoe.SquareView.create({content: square});
	equals(squareView.get('value'), squareView.get('content').value);
});

test("Value property returns value of content after change", function() {
  var square = Tictactoe.Square.create({value: Tictactoe.PlayerSymbols.User});
  var squareView = Tictactoe.SquareView.create({content: square});
	squareView.content.set('value', Tictactoe.PlayerSymbols.Computer);
	equals(squareView.get('value'), squareView.get('content').value);
});

test("Click event calls game controller", function() {
	var userMoveMock = CoreTest.stub('Tictactoe.GameController.userMove', function (space) {});
	Tictactoe.GameController = SC.ObjectController.create();
	Tictactoe.GameController.userMove = userMoveMock;
	var square = Tictactoe.Square.create({content:{position: 0, value: 'X'}});
  var squareView = Tictactoe.SquareView.create(square);
	squareView.click();
	equals(userMoveMock.callCount, 1);
});

