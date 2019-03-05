import React from 'react'

const Rosters = (props) => {
    console.log(props.players)
    return(
        <div>
        {props.players.map(player => {
            return <p key={player.id}>Name: {player.name} Numer: {player.number} </p>
        })}
            
        </div>
    )
}

export default Rosters