import React from 'react'

const Teams = (props) => {
 console.log(props.teams)
    return(
        <div className ="Teams">
            {props.teams.map(team => {
                return <p key={team.id}>{team.name}</p>
            })}
            Teams
        </div>
    )
}

export default Teams