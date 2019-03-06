import React from 'react'
import RostersCreate from './RostersAdminForms/RostersAdminCreate'
import RostersEdit from './RostersAdminForms/RostersAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const RostersAdmin = (props) => {
    return(
        <Router>
        <div className ="rosters-admin">
        <Link to='/rosters-admin-create'><button>Add New Player</button></Link>
        <br />
        <br />
            <Route
                path='/rosters-admin-create'
                render={() => < RostersCreate 
                player={props.player}
                teams={props.teams}
                team={props.team}
                createPlayer={props.createPlayer}
                createPlayerHandleSubmit={props.createPlayerHandleSubmit}
                playerHandleChange={props.playerHandleChange}
                
                />}
            />
            <Route
                path='/rosters-admin-edit'
                render={() => < RostersEdit 
                teams={props.teams}
                team={props.team}
                club={props.club}
                createTeam={props.createTeam}
                onSubmit={props.CreateTeamHandleSubmit}
                handleChange={props.handleChange}
                />}
            />

            <table border= '3'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Team</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
            {props.players.map(player => {
                return <tr key={player.id}><td>{player.name}</td> <td>{player.number}</td> <td>{player.team.name}</td> 
                <td><Link to='/rosters-admin-edit'><button>Edit</button></Link></td>
                <td><button value = {player.id} onClick = {props.deletePlayer}>Delete</button></td>
                </tr>
            })}
            </tbody>
            </table>
        </div>
        </Router>
    )
}

export default RostersAdmin