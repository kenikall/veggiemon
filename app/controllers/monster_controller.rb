class MonsterController < ApplicationController
  def show
    @monster_img = Monster.find(1).image_one
  end
  
  def new
  end
end
