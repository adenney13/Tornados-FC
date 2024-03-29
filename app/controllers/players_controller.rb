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
            render json: {message: 'player not found'}, status: 404
        end
    end

    def create
        begin
          @player = Player.create(player_params)
          render json: {player: @player}, status: 201
        rescue Exception
          server_error
        end
      end
    
      def update
        begin
          @player = Player.find(params[:id])
          @player.update_attributes(player_params)
          render json: {player: @player}, status: 200
        rescue ActiveRecord::RecordNotFound
          not_found
        rescue Exception
          server_error
        end
      end

    def destroy 
        Player.destroy(params[:id])
        render json: {message: "Deleted player with #{params[:id]}"}, status: 200
    end

private
      def not_found
        render json: {message: "No record found"}, status: 404
      end
    
      def server_error
        render json: {message: "Internal server error"}, status: 500
      end
    
      def player_params
        params.require(:player).permit(:name, :number, :team_id)
      end
end
