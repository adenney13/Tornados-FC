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
            render json: {message: 'field not found'}, status: 404
    end

    def create
        begin
          field = Field.create(field_params)
          render json: {field: field}, status: 201
        rescue Exception
          server_error
        end
      end
    
      def update
        begin
          field = Field.find(params[:id])
          field.update_attributes(field_params)
          render json: {field: field}, status: 200
        rescue ActiveRecord::RecordNotFound
          not_found
        rescue Exception
          server_error
        end
      end

    def destroy 
        Field.destroy(params[:id])
        render json: {message: "Deleted field with #{params[:id]}"}, status: 200
    end
end
end
