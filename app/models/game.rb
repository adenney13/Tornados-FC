class Game < ApplicationRecord
    # has_many :home, :class_name => 'Team', :foreign_key => 'hometeam_id'
    # has_many :away, :class_name => 'Team', :foreign_key => 'awayteam_id'
    # @game.home_team
    # @game.away_team
    belongs_to :home_teams, :class_name => 'Team', :foreign_key => 'home_id'
    belongs_to :away_teams, :class_name => 'Team', :foreign_key => 'away_id'
    belongs_to :field 
end
