class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.references :home, index: true, foreign_key: {to_table: :teams}
      t.references :away, index: true, foreign_key: {to_table: :teams}
      # t.references :home, foreign_key: true
      # t.references :away, foreign_key: true
      t.references :field, foreign_key: true
      t.string :date
      t.string :time
      t.timestamps
    end
  end
end
