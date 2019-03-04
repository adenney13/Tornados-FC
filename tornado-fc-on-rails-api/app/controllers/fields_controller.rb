class FieldsController < ApplicationController
    def index
        @fields = Field.all
        render json: { message: 'ok', fields_data: @fields}
    end

    def show
        begin
            @field = Field.find(params[:id])
            render json: { message: 'ok', fields_data: @fields}
        rescue ActiveRecord::RecordNotFound
            render json: {message: 'team not found'}, status: 404
    end
end
end
