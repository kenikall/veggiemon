class UserController < ApplicationController
  def show
    @user = User.find(1)
  end
end
