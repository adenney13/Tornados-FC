import React, { Component } from 'react';
import axios from 'axios'
import Teams from './Teams/Teams'
import Practices from './Practices/Practices'
import Games from './Games/Games'
import Rosters from './Rosters/Rosters'
import Clubs from './Clubs/Clubs'
import Admin from './Admin/Admin'
import { Route, Link } from 'react-router-dom'

class Landing extends Component {
    constructor () {
        super()
        this.state = {
            teams: [],
            fields: [],
            games: [],
            players: [],
            practices: [],
            clubs: [],

            team: {
                name: '',
                club_id: null
            },
            field: {
                name: '',
                location: ''
            },
            game: {
                home_id: null,
                away_id: null,
                field_id: null
            },
            player: { 
                name: '',
                team_id: null
            },
            practice: {
                team_id: null,
                field_id: null
            },
            club: {
                name: ''
            }
        }
    }

    getTeamsData = async () => {
        try {
            const teams = await axios.get('/teams')
            this.setState({
                teams: teams.data.teams_data
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    getGamesData = async () => {
        try {
            const games = await axios.get('/games')
            this.setState({
                games: games.data.games_data
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    getFieldsData = async () => {
        try {
            const fields = await axios.get('/fields')
            this.setState({
                fields: fields.data.fields_data
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    getPlayersData = async () => {
        try {
            const players = await axios.get('/players')
            this.setState({
                players: players.data.players_data
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    getPracticesData = async () => {
        try {
            const practices = await axios.get('/practices')
            this.setState({
                practices: practices.data.practices_data
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    getClubsData = async () => {
        try {
            const clubs = await axios.get('/clubs')
            this.setState({
                clubs: clubs.data.clubs_data
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    getRefreshedData () {
        this.getTeamsData()
        this.getGamesData()
        this.getFieldsData()
        this.getPlayersData()
        this.getPracticesData()
        this.getClubsData()
    }

    createTeam = async () => {
        await axios.post('/teams', this.state)
    }

    editTeam = async () => {
        await axios.put('/teams', this.state)
    }

    deleteTeam = async (e) => {
        console.log(e.target.value)
        await axios.delete('/teams', e.target.value)
    }

    createGame = async () => {
        await axios.post('/games', this.state)
    }

    editGame = async () => {
        await axios.put('/games', this.state)
    }

    deleteGame = async (e) => {
        console.log(e.target.value)
        await axios.delete(`/games/${e.target.value}`)
        this.getRefreshedData()
    }


    handleChange = (e) => {
        console.log('changing', e.target.value)
        this.setState({
            team:{
                ...this.state.team,
                [e.target.name]: e.target.value
            }
        })
    }

    createTeamHandleSubmit = (e) => {
        e.preventDefault()
        this.createTeam()
    }

    
    editTeamHandleSubmit = (e) => {
        e.preventDefault()
        this.editTeam()
    }

    deleteTeamHandleSubmit = (e) => {
        e.preventDefault()
        this.deleteTeam()
    }

    createGameHandleSubmit = (e) => {
        e.preventDefault()
        this.createGame()
    }
    
    editGameHandleSubmit = (e) => {
        e.preventDefault()
        this.editGame()
    }

    deleteGameHandleSubmit = (e) => {
        e.preventDefault()
        this.deleteGame()
    }

    componentDidMount() {   
        this.getTeamsData()
        this.getGamesData()
        this.getFieldsData()
        this.getPlayersData()
        this.getPracticesData()
        this.getClubsData()
    }

    render() {
        
        return(
            <div className= 'landing'>
                Landing page links here!
                <nav>
                    <ul>
                        <li><Link to='/games'>Games</Link></li>
                        <li><Link to='/practices'>Practices</Link></li>
                        <li><Link to='/rosters'>Rosters</Link></li>
                        <li><Link to='/teams'>Teams</Link></li>
                        <li><Link to='/clubs'>Clubs</Link></li>
                        <li><Link to='/admin'>Admin</Link></li> 
                    </ul>
                </nav>
                <main>
                    {/* <Route 
                        path='./'
                        teams={this.state.teams}/> */}
                    <Route
                        path='/games'
                        render={() => < Games 
                        games={this.state.games}/>}
                        />
                    <Route
                        path='/practices'
                        render={() => < Practices 
                        practices={this.state.practices}/>}
                    />
                    <Route
                        path='/rosters'
                        render={() => < Rosters 
                        players={this.state.players}/>}
                    />
                    <Route
                        path='/teams'
                        render={() => < Teams 
                        teams={this.state.teams}
                        />}
                    />
                    <Route
                        path='/clubs'
                        render={() => < Clubs 
                        clubs={this.state.clubs}/>}
                    />
                    <Route
                        path='/admin'
                        render={() => < Admin 
                        clubs={this.state.clubs}
                        teams={this.state.teams}
                        games={this.state.games}
                        fields={this.state.fields}
                        players={this.state.players}
                        practices={this.state.practices}
                        team={this.state.team}
                        club={this.state.club}
                        game={this.state.game}
                        createTeam={this.createTeam}
                        createTeamHandleSubmit={this.createTeamHandleSubmit}
                        deleteTeam={this.deleteTeam}
                        deleteTeamHandleSubmit={this.deleteTeamHandleSubmit}
                        deleteGame={this.deleteGame}
                        deleteGameHandleSubmit={this.deleteGameHandleSubmit}
                        handleChange={this.handleChange}
                        />}
                    />
                  
                </main>
                
            </div>
        )
    }
}

export default Landing