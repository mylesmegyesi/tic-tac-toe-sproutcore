require_relative 'piece'

class Board < Array

  def initialize
    super
    self.fill(Piece::Empty, 0..8)
  end
  
  def valid_moves
    moves = []
    self.each_index { |index| moves << index if (self.at(index) == Piece::Empty) }
    moves
  end

end