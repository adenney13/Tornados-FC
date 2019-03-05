import React from 'react'

const Rosters = (props) => {
    console.log(props.players)
    return(
        <div>
        {props.players.map(player => {
            return <p key={player.id}>Name: {player.name} Number: {player.number} Team: {player.team.name} </p>
        })}
            
        </div>
    )
}

export default Rosters