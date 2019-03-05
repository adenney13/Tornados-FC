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
   
    def create
        begin
          team = Team.create(team_params)
          render json: {team: team}, status: 201
        rescue Exception
          server_error
        end
      end
    
      def update
        begin
          team = Team.find(params[:id])
          team.update_attributes(team_params)
          render json: {team: team}, status: 200
        rescue ActiveRecord::RecordNotFound
          not_found
        rescue Exception
          server_error
        end
      end
    
      def destroy 
        Team.destroy(params[:id])
        render json: {message: "Deleted team with #{params[:id]}"}, status: 200
      end
    
      private
      def not_found
        render json: {message: "No record found"}, status: 404
      end
    
      def server_error
        render json: {message: "Internal server error"}, status: 500
      end
    
      def team_params
        params.require(:team).permit(:title, :year, :director, :plot)
      end
   
end

# def new
#     @team = Team.new
# end

# def create
#     team = Team.(creature_params)

#         if team.save
#             redirect_to team
#         end
#     end
# end

# def edit
#     @team = Team.find(params[:id])
# end

# def update
#     team = Team.find(params[:id])
#     team.update_attributes(team_params)
#     redirect_to team
# end

# def destroy
#     @team = Team.destroy(params[:id])
#         redirect_to teams_path
# end