class CreateGamesTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :games_teams do |t|
      t.integer :AwayTeam
      t.integer :HomeTeam
      t.integer :Game

      t.timestamps
    end
  end
end
