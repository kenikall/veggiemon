class UserMonster < ApplicationRecord
  belongs_to :user 
  belongs_to :monster
end
