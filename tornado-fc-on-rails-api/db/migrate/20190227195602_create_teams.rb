class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.references :club, foreign_key: true
      t.references :home
      t.references :away
      t.timestamps
    end
  end
end
