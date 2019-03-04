class TeamsController < ApplicationController
    def index
        @teams = Team.all
        render json: { message: 'ok', teams_data: @teams}
    end

    def show
        begin
            @team = Team.find(params[:id])
            render json: { message: 'ok', teams_data: @teams}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end
end
end
