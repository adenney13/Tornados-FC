class GamesController < ApplicationController
    def index
        @games = Game.all
        render json: { message: 'ok', games_data: @games}, include: [:home_teams, :away_teams, :field] 
    end

    def show
        begin
            @game = Game.find(params[:id])
            render json: { message: 'ok', games_data: @games}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'game not found'}, status: 404
    end

    def create
        begin
          game = Game.create(game_params)
          render json: {game: game}, status: 201
        rescue Exception
          server_error
        end
      end
    
      def update
        begin
          game = Game.find(params[:id])
          game.update_attributes(game_params)
          render json: {game: game}, status: 200
        rescue ActiveRecord::RecordNotFound
          not_found
        rescue Exception
          server_error
        end
      end

    def destroy 
        Game.destroy(params[:id])
        render json: {message: "Deleted game with #{params[:id]}"}, status: 200
    end
end
end