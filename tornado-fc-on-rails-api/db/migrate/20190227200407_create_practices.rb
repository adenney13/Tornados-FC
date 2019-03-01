class CreatePractices < ActiveRecord::Migration[5.2]
  def change
    create_table :practices do |t|
      t.references :teams, foreign_key: true
      t.references :fields, foreign_key: true
      t.string :date
      t.integer :time
      

      t.timestamps
    end
  end
end
