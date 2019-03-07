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
            render json: {message: 'club not found'}, status: 404
    end

    def create
        begin
          club = Club.create(club_params)
          render json: {club: club}, status: 201
        rescue Exception
          server_error
        end
      end
    
      def update
        begin
          club = Club.find(params[:id])
          club.update_attributes(club_params)
          render json: {club: club}, status: 200
        rescue ActiveRecord::RecordNotFound
          not_found
        rescue Exception
          server_error
        end
      end
      def destroy 
        Club.destroy(params[:id])
        render json: {message: "Deleted club with #{params[:id]}"}, status: 200
    end
end
end
