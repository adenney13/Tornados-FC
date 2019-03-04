class PlayersController < ApplicationController
    def index
        @players = Player.all
        render json: { message: 'ok', players_data: @players}
    end

    def show
        begin
            @player = Player.find(params[:id])
            render json: { message: 'ok', players_data: @players}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end
end
end
