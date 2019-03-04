class GamesController < ApplicationController
    def index
        @games = Game.all
        render json: { message: 'ok', games_data: @games}, include: :teams 
    end

    def show
        begin
            @game = Game.find(params[:id])
            render json: { message: 'ok', games_data: @games}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end
end
end