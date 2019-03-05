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
end
end
