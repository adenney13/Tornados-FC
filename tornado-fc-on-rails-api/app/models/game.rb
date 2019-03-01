class Game < ApplicationRecord
    has_many :home, :class_name => 'Team', :foreign_key => 'hometeam_id'
    has_many :away, :class_name => 'Team', :foreign_key => 'awayteam_id'
    has_one :field 

end
