import React, { Component } from 'react';
import axios from 'axios'

class Landing extends Component {
    constructor () {
        super()
        this.state = {
            teams: [],
            fields: [],
            games: [],
            rosters: [],
            practices: [],
            clubs: []
        }
    }

    getTeamsData = async () => {
        try {
            const teams = await axios.get('/teams')
            
            this.setState({
                teams: teams
            })
        } catch(e) {
            console.log(e.message)
        }
    }

    componentDidMount() {
        this.getTeamsData()
    }

    render() {
        console.log(this.state.teams)
        return(
            <div className= 'landing'>
                Landing page links here!
            </div>
        )
    }
}

export default Landing