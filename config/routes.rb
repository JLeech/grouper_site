Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#main'
  get  '/about', to: 'static_pages#about'
  get  '/load', to: 'static_pages#load'
  get  '/main', to: 'static_pages#main'
end
