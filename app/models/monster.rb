class Monster < ApplicationRecord
  has_many :user_monsters
  has_many :users, through: :user_monsters
end
