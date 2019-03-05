import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import TeamsAdminCreate from './TeamsAdminForms/TeamsAdminCreate'

const TeamsAdmin = (props) => {
    
 console.log(props.teams)
    return(
        <Router>
        <div className ="teams-admin">
            {props.teams.map(team => {
                return <p key={team.id}>{team.name}<br /> <button>Edit</button><button>Delete</button></p>
            })}
           <Link to='/teams-admin-create'><button>Add New Team</button></Link>
           <Route
                path='/clubs'
                render={() => < TeamsAdminCreate/>}
            />
            
        </div>
        </Router>
    )
}

export default TeamsAdmin