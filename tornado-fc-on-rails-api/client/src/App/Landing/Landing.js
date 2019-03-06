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
import teamPic from '../../Assets/IMG_1673.JPG'

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
                club_id: ''
            },
            field: {
                name: '',
                location: ''
            },
            game: {
                date: '',
                time: '',
                home_id: '',
                away_id: '',
                field_id: ''
            },
            player: { 
                name: '',
                number: '',
                team_id: ''
            },
            practice: {
                team_id: '',
                field_id: '',
                date: '',
                time: ''
            },
            club: {
                name: ''
            },

            id: null
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

    createPractice = async () => {
        try {
            const body = {
                "practice": {
                    "team_id": this.state.practice.team_id,
                    "field_id": this.state.practice.field_id,
                    "date": this.state.practice.date,
                    "time": this.state.practice.time
                }
            }
        const createNewPractice = await axios.post('/practices', body)
        console.log(body)
        console.log(createNewPractice)
        } catch (err) {console.log(err)}
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
        try {
            const body = {
                "game": {
                    "date": this.state.game.date,
                    "time": this.state.game.time,
                    "home_id": this.state.game.home_id,
                    "away_id": this.state.game.away_id,
                    "field_id": this.state.game.field_id
                }
            }
        const createNewGame = await axios.post('/games', body)
        console.log(body)
        console.log(createNewGame)
        } catch (err) {console.log(err)}
    }
    

    editGame = async (id) => {
        try {
            const body = {
                "game": {
                    "date": this.state.game.date,
                    "time": this.state.game.time,
                    "home_id": this.state.game.home_id,
                    "away_id": this.state.game.away_id,
                    "field_id": this.state.game.field_id
                }
            }
        const editThisGame = await axios.put(`/games/${id}`, body)
        console.log(body)
        console.log(editThisGame)
        } catch (err) {console.log(err)}
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

    gameHandleChange = (e) => {
        console.log('changing game', e.target.value)
        this.setState({
            game:{
                ...this.state.game,
                [e.target.name]: e.target.value
            }
        })
    }

    practiceHandleChange = (e) => {
        console.log('changing practice', e.target.value)
        this.setState({
            practice:{
                ...this.state.practice,
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

    createPracticeHandleSubmit = (e) => {
        e.preventDefault()
        this.createPractice()
    }
    
    editGameHandleSubmit = (e, id) => {
        e.preventDefault()
        this.editGame(this.state.id)
        e.preventDefault()
    }

    getGameEditId = async (gameId) => {
       await this.setState({
            id: gameId
        })
        console.log('id is:', this.state.id);
        
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
               
                <img src= {teamPic} alt='the team' className='landingPic'/>
                <br />
                <h2 className='landingHeading'> Welcome to Tornados FC!</h2>
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
                        practice={this.state.practice}
                        createPracticeHandleSubmit={this.createPracticeHandleSubmit}
                        practiceHandleChange={this.practiceHandleChange}
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
                        gameHandleChange={this.gameHandleChange}
                        createGameHandleSubmit={this.createGameHandleSubmit}
                        game={this.state.game}
                        editGameHandleSubmit={this.editGameHandleSubmit}
                        getGameEditId={this.getGameEditId}
                        id={this.state.id}
                        />}
                    />
                  
                </main>
                
            </div>
        )
    }
}

export default Landing