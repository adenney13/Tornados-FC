import React from 'react'
import RostersCreate from './RostersAdminForms/RostersAdminCreate'
import RostersEdit from './RostersAdminForms/RostersAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const RostersAdmin = (props) => {
    return(
        <Router>
        <div className ="rosters-admin">
            {props.players.map(player => {
                return <p key={player.id}>Name: {player.name} Number: {player.number} Team: {player.team.name} <br/> 
                <Link to='/rosters-admin-edit'><button>Edit</button></Link><button value = {player.id} onClick = {props.deletePlayer}>Delete</button></p>
            })}
            <Link to='/rosters-admin-create'><button>Add New Player</button></Link>
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
        </div>
        </Router>
    )
}

export default RostersAdmin