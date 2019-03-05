import React from 'react'

const RostersAdmin = (props) => {
    return(
        <div className ="rosters-admin">
            {props.players.map(player => {
                return <p key={player.id}>Name: {player.name} Number: {player.number} Team: {player.team.name} <br /> <button>Edit</button><button>Delete</button></p>
            })}
            <button>Add New Player</button>
        </div>
    )
}

export default RostersAdmin