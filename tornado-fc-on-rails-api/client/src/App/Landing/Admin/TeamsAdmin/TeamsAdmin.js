import React from 'react'
import TeamsAdminCreate from './TeamsAdminForms/TeamsAdminCreate'
import TeamsAdminEdit from './TeamsAdminForms/TeamsAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const TeamsAdmin = (props) => {
    return(
        <Router>
        <div className ="teams-admin">
            {props.teams.map(team => {
                return <p key={team.id}>{team.name}<br /> 
                <Link to='/teams-admin-edit'><button>Edit</button></Link>
                <button value = {team.id} onClick={props.deleteTeam}>Delete</button></p>
            })}
           <Link to='/teams-admin-create'><button>Add New Team</button></Link>
           <Route
                path='/teams-admin-create'
                render={() => < TeamsAdminCreate 
                teams={props.teams}
                clubs={props.clubs}
                team={props.team}
                club={props.club}
                createTeam={props.createTeam}
                createTeamHandleSubmit={props.createTeamHandleSubmit}
                teamHandleChange={props.teamHandleChange}
                
                />}
            />
            <Route
                path='/teams-admin-edit'
                render={() => < TeamsAdminEdit 
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

export default TeamsAdmin