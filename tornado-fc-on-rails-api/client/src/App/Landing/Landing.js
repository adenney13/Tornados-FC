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

    render() {
        return(
            <div className= 'landing'>
                Landing page links here!
            </div>
        )
    }
}

export default Landing