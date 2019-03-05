import React from 'react'

const Games = (props) => {
    console.log(props.games)
    return(
        <div className='games'>
             {props.games.map(game => {
                return (
                    <div key={game.id}>
                    <p >Date: {game.date} Time: {game.time}</p>
                    <p >{game.home_teams.name} vs {game.away_teams.name} @ {game.field.name} </p>
                    <br />
                    </div>
                )
            })}
           
        </div>
    )
}

export default Games