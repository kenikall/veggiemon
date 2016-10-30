Rails.application.routes.draw do
  get 'evolutions/index'

  get 'yelps/index'

  get 'google_maps/index'

  get 'backpack/show'

  resources :user, only: [:show]

  resources :monster, only: [:new, :show]

  root 'user#show'
  # get '/', to: 'user#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
