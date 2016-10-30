class AddMonsterTypeToMonster < ActiveRecord::Migration[5.0]
  def change
    add_column :monsters, :monster_type, :string
  end
end
