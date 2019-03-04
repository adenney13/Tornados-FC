import React from 'react'

const Games = (props) => {
    console.log(props.games)
    return(
        <div className='games'>
             {props.games.map(game => {
                return <p key={game.id}>{game.home_id} vs {game.away_id} @ {game.field_id}</p>
            })}
            Games
        </div>
    )
}

export default Games