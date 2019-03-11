import React from 'react'
import TeamsAdminCreate from './TeamsAdminForms/TeamsAdminCreate'
import TeamsAdminEdit from './TeamsAdminForms/TeamsAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const TeamsAdmin = (props) => {
    return(
        
        <Router>
         <div className ="teams-admin">
        <Link to='/teams-admin-create'><button>Add New Team</button></Link>
        <br />
        <br />

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
            <table border= '3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
       
            {props.teams.map(team => {
                return <tr key={team.id}><td>{team.name}</td> 
                {/* <td><Link to='/teams-admin-edit'><button>Edit</button></Link></td> */}
                <td><button value = {team.id} onClick={props.deleteTeam}>Delete</button></td>
                </tr>
            })}
           
            </tbody>
        </table>
        </div>
        </Router>

    )
}

export default TeamsAdmin