import React from 'react'
import PracticesAdminCreate from './PracticesAdminForms/PracticesAdminCreate'
import PracticesAdminEdit from './PracticesAdminForms/PracticesAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const PracticesAdmin = (props) => {
    console.log(props.practices)
    return(
        <Router>
        <div className='practicesAdmin'>
        <Link to='/practices-admin-create'><button>Create New Practice</button></Link>
            <br />
            <br />
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

            <table border= '3'>
                <thead>
                <tr>
                    <th>Team</th>
                    <th>Field</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
        {props.practices.map(practice => {
            return <tr key={practice.id}><td>{practice.team.name}</td> 
            <td>{practice.field.name}</td> 
            <td>{practice.date}</td> 
            <td>{practice.time}</td> 
            <td><button>Edit</button></td>
            <td><button value = {practice.id} onClick= {props.deletePractice}>Delete</button></td>
            </tr>
        })}
         </tbody>
         </table>
        </div>
        </Router>
    )
}

export default PracticesAdmin






