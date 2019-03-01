class AddColumnsToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :hometeam_id, :integer, foreign_key: true
    add_column :games, :awayteam_id, :integer, foreign_key: true
  end
end
