class AddTypeToMonster < ActiveRecord::Migration[5.0]
  def change
    add_column :monsters, :type, :string
  end
end
