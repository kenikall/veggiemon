class CreateMonsters < ActiveRecord::Migration[5.0]
  def change
    create_table :monsters do |t|
      t.string :name_one
      t.string :name_two
      t.string :name_three
      t.string :image_one
      t.string :image_two
      t.string :image_three
      t.integer :level
      t.integer :xp

      t.timestamps
    end
  end
end
