class User < ApplicationRecord
  has_many :user_monsters
  has_many :monsters, through: :user_monsters
end
