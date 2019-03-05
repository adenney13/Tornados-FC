import React, { Component } from 'react';
import axios from 'axios'
import Teams from './Teams/Teams'
import Practices from './Practices/Practices'
import Games from './Games/Games'
import Rosters from './Rosters/Rosters'
import Clubs from './Clubs/Clubs'
import Admin from './Admin/Admin'
import { Route, Link } from 'react-router-dom'
import '../../App/style.css'

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
                number: '',
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
        
        try {
            const body = {
                "team": {
                    "name": this.state.team.name,
                    "club_id": this.state.team.club_id
                }
            }
            const createNewTeam = await axios.post('/teams', body)
            console.log(body)
            console.log(createNewTeam)
        } catch (err) {console.log(err)}
    }

    editTeam = async () => {
        await axios.put('/teams', this.state)
    }

    deleteTeam = async (e) => {
        console.log(e.target.value)
        await axios.delete('/teams', e.target.value)
    }

    createPlayer = async () => {
        
        try {
            const body = {
                "player": {
                    "name": this.state.player.name,
                    "number": this.state.player.number,
                    "team_id": this.state.player.team_id
                }
            }
        const createNewPlayer = await axios.post('/players', body)
        console.log(body)
        console.log(createNewPlayer)
        } catch (err) {console.log(err)}
    }

    editPlayer = async () => {
        await axios.put('/players', this.state)
    }

    deletePlayer = async (e) => {
        console.log(e.target.value)
        await axios.delete(`/players/${e.target.value}`)
        this.getRefreshedData()
    }

    createPractice = async (e) => {
        await axios.post('/practices', this.state)
    }

    editPractice = async () => {
        await axios.put('/practices', this.state)
    }

    deletePractice = async (e) => {
        console.log(e.target.value)
        await axios.delete(`/practices/${e.target.value}`)
        this.getRefreshedData()
    }

    createGame = async () => {
        await axios.post('/games', this.state)
    }

    editGame = async () => {
        await axios.put('/games', this.state)
    }

    deleteGame = async (id) => {
        try{
            await axios.delete(`/games/${id}`)
         this.getRefreshedData()
        } catch (e) {console.log(e)}
        
    }

    createClub = async () => {
        await axios.post('/clubs', this.state)
    }

    editClub = async () => {
        await axios.put('/clubs', this.state)
    }

    deleteClub = async (e) => {
        console.log(e.target.value)
        await axios.delete(`/clubs/${e.target.value}`)
        this.getRefreshedData()
    }

    createField = async () => {
        await axios.post('/fields', this.state)
    }

    editField = async () => {
        await axios.put('/fields', this.state)
    }

    deleteField = async (e) => {
        console.log(e.target.value)
        await axios.delete(`/fields/${e.target.value}`)
        this.getRefreshedData()
    }

    teamHandleChange = (e) => {
        console.log('changing', e.target.value)
        this.setState({
            team:{
                ...this.state.team,
                [e.target.name]: e.target.value
            }
        })
    }

    playerHandleChange = (e) => {
        console.log('changing player', e.target.value)
        this.setState({
            player:{
                ...this.state.player,
                [e.target.name]: e.target.value
            }
        })
    }

    createTeamHandleSubmit = (e) => {
        e.preventDefault()
        this.createTeam()
    }

    createPlayerHandleSubmit = (e) => {
        e.preventDefault()
        this.createPlayer()
    }
    
    editTeamHandleSubmit = (e) => {
        e.preventDefault()
        this.editTeam()
    }

    createGameHandleSubmit = (e) => {
        e.preventDefault()
        this.createGame()
    }
    
    editGameHandleSubmit = (e) => {
        e.preventDefault()
        this.editGame()
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
                        player={this.state.player}
                        createTeam={this.createTeam}
                        createTeamHandleSubmit={this.createTeamHandleSubmit}
                        playerHandleChange={this.playerHandleChange}
                        createPlayerHandleSubmit={this.createPlayerHandleSubmit}
                        deleteTeam={this.deleteTeam}
                        deleteGame={this.deleteGame}
                        deletePractice={this.deletePractice}
                        deletePlayer={this.deletePlayer}
                        teamHandleChange={this.teamHandleChange}
                        />}
                    />
                  
                </main>
                
            </div>
        )
    }
}

export default Landing