class PracticesController < ApplicationController
    def index
        @practices = Practice.all
        render json: { message: 'ok', practices_data: @practices}, include: [:field, :team] 
    end

    def show
        begin
            @practice = Practice.find(params[:id])
            render json: { message: 'ok', practices_data: @practices}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end

    def destroy 
        Practice.destroy(params[:id])
        render json: {message: "Deleted practice with #{params[:id]}"}, status: 200
    end
end
end
