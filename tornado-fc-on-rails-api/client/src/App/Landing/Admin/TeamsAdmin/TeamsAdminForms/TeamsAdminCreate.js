import React, {Component} from 'react'
import axios from 'axios'

class TeamsAdminCreate extends Component {
    constructor() {
        super()
        this.state = {
           name: '',
           club_id: null
        }
    }

    createTeam = async () => {
        await axios.post('/teams', this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createTeam()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <label>
                    Team Name:
                    <input type='text' name='name' onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Club:
                    <input type='number' name='club_id' onChange={this.handleChange} />
                </label>
                <br />
                <br />
                <button>Create Team</button>
            </form>
        )
    }
}

export default TeamsAdminCreate