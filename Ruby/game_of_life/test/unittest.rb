require "test/unit"
require_relative '../../../Ruby/game_of_life/src/GOL.rb'

class GOLTest < Test::Unit::TestCase
  def test_small
    game_of_life "small", 4, 10
  end

  def test_midium
    game_of_life "medium", 6, 20
  end

  def test_large
    game_of_life "large", 8, 30
  end

  def test_blinker
    game_of_life "blinker", 3, 2, [[1,0],[1,1],[1,2]]
  end

  def test_glider
    game_of_life "glider", 4, 4, [[1,0],[2,1],[0,2],[1,2],[2,2]]
  end
end
