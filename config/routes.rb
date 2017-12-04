Rails.application.routes.draw do
  get '/', to: 'sign_up#index'
  post '/api/login_check', to: 'sign_up#action'
end
