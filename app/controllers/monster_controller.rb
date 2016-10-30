class MonsterController < ApplicationController
  def show
    monster = Monster.find(params[:id])
    if monster.xp <= 10
      @monster = monster.name_one
      @monster_img = monster.image_one
    elsif monster.xp > 10 && monster.xp < 20
      @monster = monster.name_two
      @monster_img = monster.image_two
    elsif monster.xp > 20 && monster.xp < 30
      @monster = monster.name_three
      @monster_img = monster.image_three
    end
  end
  
  def new
  end
end
