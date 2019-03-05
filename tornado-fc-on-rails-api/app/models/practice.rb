class Practice < ApplicationRecord
    belongs_to :team
    belongs_to :field  
    # belongs_to :team, :class_name => 'Team', :foreign_key => 'team_id'
    # belongs_to :field, :class_name => 'Field', :foreign_key => 'field_id'
end
    