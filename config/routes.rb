Rails.application.routes.draw do
  get 'yelps/index'

  get 'google_maps/index'
  
  get 'user/show'

  get 'monster/new'

  get 'monster/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
