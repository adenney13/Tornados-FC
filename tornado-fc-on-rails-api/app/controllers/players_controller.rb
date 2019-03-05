class PlayersController < ApplicationController
    def index
        @players = Player.all
        render json: { message: 'ok', players_data: @players}, include: [:team]
    end

    def show
        begin
            @player = Player.find(params[:id])
            render json: { message: 'ok', players_data: @players}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end

    def destroy 
        Player.destroy(params[:id])
        render json: {message: "Deleted player with #{params[:id]}"}, status: 200
    end
end
end
