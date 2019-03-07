class GamesTeamsController < ApplicationController
  before_action :set_games_team, only: [:show, :update, :destroy]

  # GET /games_teams
  def index
    @games_teams = GamesTeam.all

    render json: @games_teams
  end

  # GET /games_teams/1
  def show
    render json: @games_team
  end

  # POST /games_teams
  def create
    @games_team = GamesTeam.new(games_team_params)

    if @games_team.save
      render json: @games_team, status: :created, location: @games_team
    else
      render json: @games_team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games_teams/1
  def update
    if @games_team.update(games_team_params)
      render json: @games_team
    else
      render json: @games_team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games_teams/1
  def destroy
    @games_team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_games_team
      @games_team = GamesTeam.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def games_team_params
      params.require(:games_team).permit(:AwayTeam, :HomeTeam, :Game)
    end
end
