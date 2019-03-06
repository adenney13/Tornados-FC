import React from 'react'
import PracticesAdminCreate from './PracticesAdminForms/PracticesAdminCreate'
import PracticesAdminEdit from './PracticesAdminForms/PracticesAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const PracticesAdmin = (props) => {
    console.log(props.practices)
    return(
        <Router>
        <div>
        {props.practices.map(practice => {
            return <p key={practice.id}>{practice.team.name} at {practice.field.name} on {practice.date} from {practice.time} <br /> <button>Edit</button><button value = {practice.id} onClick= {props.deletePractice}>Delete</button></p>
        })}
        <Link to='/practices-admin-create'><button>Create New Practice</button></Link>
            <Route
                path='/practices-admin-create'
                render={() => < PracticesAdminCreate 
                    fields={props.fields}
                    teams={props.teams}
                    practice={props.practice}
                    createPracticeHandleSubmit={props.createPracticeHandleSubmit}
                    practiceHandleChange={props.practiceHandleChange}
                />}
            />
            <Route
                path='/practices-admin-edit'
                render={() => < PracticesAdminEdit 
               
                />}
            />
        </div>
        </Router>
    )
}

export default PracticesAdmin






