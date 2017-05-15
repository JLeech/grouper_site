Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#main'

  get  '/main', to: 'static_pages#main'
  get  '/eis-db', to: 'static_pages#eis'

  # get '/sql_rules', to: 'api#sql_rules'
  # get  '/filter_button', to: 'api#filter_button'
  get  '/gene_names', to: 'api#gene_names'
  get  '/gene_ncbis', to: 'api#gene_ncbis'
  get  '/apply_gene_query', to: 'api#apply_gene_query'
  # get  '/organism_names', to: 'api#organism_names'
  resources :loads
end
