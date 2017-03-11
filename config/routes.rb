Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#main'
  get  '/about', to: 'static_pages#about'
  get  '/main', to: 'static_pages#main'
  get  '/organisms', to: 'static_pages#organisms'
  get  '/loads/new', to: 'loads#new'
  resources :loads
end
