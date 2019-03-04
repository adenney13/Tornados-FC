Rails.application.routes.draw do
  resources :games, :practices, :teams, :players, :fields, :clubs
end
