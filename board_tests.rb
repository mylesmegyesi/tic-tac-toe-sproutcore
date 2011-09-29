require_relative 'board'
require_relative 'piece'

describe Board, 'initialize' do
  
  before do
    @board = Board.new
  end
  
  it 'fills an array with 9 empty pieces' do
    @board.length.should equal 9
    @board.each { |square| square.should equal Piece::Empty }
  end
  
end

describe Board, 'valid_moves' do
  
  before do
    @board = Board.new
  end
  
  it 'should return 9 spaces with an empty board' do
    valid_moves = @board.valid_moves
    valid_moves.length.should equal 9
    valid_moves.each_index { |index| valid_moves[index].should equal index }
  end
  
  it 'should return 8 spaces with a board that has one piece' do
    @board[5] = Piece::X
    valid_moves = @board.valid_moves
    valid_moves.length.should equal 8
  end
  
end
