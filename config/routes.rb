Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
    resources :steps, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
