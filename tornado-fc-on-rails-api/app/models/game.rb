class Game < ApplicationRecord
    # has_many :home, :class_name => 'Team', :foreign_key => 'hometeam_id'
    # has_many :away, :class_name => 'Team', :foreign_key => 'awayteam_id'
    # @game.home_team
    # @game.away_team
    has_and_belongs_to_many :home_teams, :class_name => 'Team', :foreign_key => 'home_id'
    has_and_belongs_to_many :away_teams, :class_name => 'Team', :foreign_key => 'away_id'
    has_one :field 
end
