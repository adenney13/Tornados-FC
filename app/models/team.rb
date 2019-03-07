class Team < ApplicationRecord
   # belongs_to :home, :class_name => 'Game'
   # belongs_to :away, :class_name => 'Game'
   # @team.home.name 
   # @team.away.name
   # has_many :home, :class_name => 'Game', :foreign_key => 'home_id'
   # has_many :away, :class_name => 'Game', :foreign_key => 'away_id'
   has_many :games_teams
   has_one :practice
   has_many :player
end

 
 # has_many :player
    # has_one :practice
    # belongs_to :game, as