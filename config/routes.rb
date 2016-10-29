Rails.application.routes.draw do
  get 'yelps/index'

  get 'google_maps/index'

  resources :user, only: [:show]

  resources :monster, only: [:new, :show]

  # root 'user#1'
  get '/' to: 'user#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
