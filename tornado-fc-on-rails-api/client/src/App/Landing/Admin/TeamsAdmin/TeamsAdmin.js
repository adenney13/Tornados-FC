import React from 'react'

const TeamsAdmin = (props) => {
 console.log(props.teams)
    return(
        <div className ="teams-admin">
            {props.teams.map(team => {
                return <p key={team.id}>{team.name}</p>
            })}
            Teams
        </div>
    )
}

export default TeamsAdmin