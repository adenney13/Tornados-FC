class CreatePractices < ActiveRecord::Migration[5.2]
  def change
    create_table :practices do |t|
      t.references :team, foreign_key: true
      t.references :field, foreign_key: true
      t.string :date
      t.string :time
      

      t.timestamps
    end
  end
end
