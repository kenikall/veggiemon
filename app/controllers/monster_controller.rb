class MonsterController < ApplicationController
  def show
    @monster = Monster.find(params[:id])
    if @monster.level <= 10
      @monster_name = @monster.name_one
      @monster_img = @monster.image_one
    elsif @monster.level > 10 && @monster.level <= 20
      @monster_name = @monster.name_two
      @monster_img = @monster.image_two
    elsif @monster.level > 20 && @monster.level <= 30
      @monster_name = @monster.name_three
      @monster_img = @monster.image_three
    end

    if @monster.monster_type == "broccoli"
      @facts = ['Broccoli originated in Italy off of the Mediterranean!', 'Broccoli is a member of the cabbage family!', 'Broccoli is very high in Vitamin C and Vitamin A!', 'The average American eats over 4 pounds of broccoli a year!'].sample
    end
  end
  
  def new
  end
end
