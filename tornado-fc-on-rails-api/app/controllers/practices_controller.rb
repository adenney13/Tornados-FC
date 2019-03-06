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
            render json: {message: 'practice not found'}, status: 404
        end
    end

    def create
        begin
          @practice = Practice.create(practice_params)
          render json: {practice: @practice}, status: 201
        rescue Exception
          server_error
        end
      end
    
      def update
        begin
          @practice = Practice.find(params[:id])
          @practice.update_attributes(practice_params)
          render json: {practice: @practice}, status: 200
        rescue ActiveRecord::RecordNotFound
          not_found
        rescue Exception
          server_error
        end
      end

    def destroy 
        Practice.destroy(params[:id])
        render json: {message: "Deleted practice with #{params[:id]}"}, status: 200
    end

private
      def not_found
        render json: {message: "No record found"}, status: 404
      end
    
      def server_error
        render json: {message: "Internal server error"}, status: 500
      end
    
      def practice_params
        params.require(:practice).permit(:team_id, :field_id, :date, :time)
      end
end
