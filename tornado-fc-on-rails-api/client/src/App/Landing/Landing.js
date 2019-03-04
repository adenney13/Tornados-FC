import React, { Component } from 'react';
import axios from 'axios'
import Teams from './Teams/Teams'
import Practices from './Practices/Practices'
import Games from './Games/Games'
import Rosters from './Rosters/Rosters'
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
            clubs: []
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
                        {/* <li><Link to='/admin'>Admin</Link></li>  */}
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
                        teams={this.state.teams}/>}
                    />
                    {/* <Rosters players={this.state.players}/>
                    
                    <Admin 
                        teams={this.state.teams}
                        games={this.state.games}
                        fields={this.state.fields}
                        players={this.state.players}
                        practices={this.state.practices}
                        clubs={this.state.clubs}
                    /> */}
                </main>
                
            </div>
        )
    }
}

export default Landing