Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#main'
  get  '/about', to: 'static_pages#about'
  get  '/main', to: 'static_pages#main'
  get  '/organisms', to: 'static_pages#select_page'
  get  '/loads/new', to: 'loads#new'

  # get '/sql_rules', to: 'api#sql_rules'
  # get  '/filter_button', to: 'api#filter_button'
  # get  '/gene_names', to: 'api#gene_names'
  # get  '/organism_names', to: 'api#organism_names'
  resources :loads
end
