# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_01_004930) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clubs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fields", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "games", force: :cascade do |t|
    t.bigint "home_id"
    t.bigint "away_id"
    t.bigint "field_id"
    t.string "date"
    t.integer "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "hometeam_id"
    t.integer "awayteam_id"
    t.index ["away_id"], name: "index_games_on_away_id"
    t.index ["field_id"], name: "index_games_on_field_id"
    t.index ["home_id"], name: "index_games_on_home_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.string "position"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "practices", force: :cascade do |t|
    t.bigint "teams_id"
    t.bigint "fields_id"
    t.string "date"
    t.integer "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fields_id"], name: "index_practices_on_fields_id"
    t.index ["teams_id"], name: "index_practices_on_teams_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.bigint "club_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_teams_on_club_id"
  end

  add_foreign_key "games", "fields"
  add_foreign_key "players", "teams"
  add_foreign_key "practices", "fields", column: "fields_id"
  add_foreign_key "practices", "teams", column: "teams_id"
  add_foreign_key "teams", "clubs"
end