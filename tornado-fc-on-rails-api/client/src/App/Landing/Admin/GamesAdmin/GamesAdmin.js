import React from 'react'

const Games = (props) => {
    console.log(props.games)
    return(
        <div className='games'>
             {props.games.map(game => {
                return <p key={game.id}>{game.home_teams.name} vs {game.away_teams.name} @ {game.field.name} <br/> <button>Edit</button> <button>Delete</button></p>
            })}
           <button>Create New Game</button>
        </div>
    )
}

export default Games