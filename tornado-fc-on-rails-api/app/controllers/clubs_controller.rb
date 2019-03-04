class ClubsController < ApplicationController
    def index
        @clubs = Club.all
        render json: { message: 'ok', clubs_data: @clubs}
    end

    def show
        begin
            @club = Club.find(params[:id])
            render json: { message: 'ok', clubs_data: @clubs}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end
end
end
