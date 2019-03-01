class Team < ApplicationRecord
   belongs_to :home, :class_name => 'Game'
   belongs_to :away, :class_name => 'Game'
   # has_many :home_game, :class_name => 'Game', :foreign_key => 'home_id'
   # has_many :away_game, :class_name => 'Game', :foreign_key => 'away_id'
end

 
 # has_many :player
    # has_one :practice
    # belongs_to :game, as