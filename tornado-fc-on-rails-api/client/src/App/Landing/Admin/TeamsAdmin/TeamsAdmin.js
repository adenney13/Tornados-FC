import React from 'react'

const TeamsAdmin = (props) => {
 console.log(props.teams)
    return(
        <div className ="teams-admin">
            {props.teams.map(team => {
                return <p key={team.id}>{team.name}<br /> <button>Edit</button><button>Delete</button></p>
            })}
            <button>Add New Team</button>
        </div>
    )
}

export default TeamsAdmin