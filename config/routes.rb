Rails.application.routes.draw do
  resources :games_teams
  resources :games, :practices, :teams, :players, :fields, :clubs
  root to: "root#index"
end
