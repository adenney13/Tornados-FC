import React from 'react'
import GamesAdminCreate from './GamesAdminForms/GamesAdminCreate'
import GamesAdminEdit from './GamesAdminForms/GamesAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const GamesAdmin = (props) => {
    console.log(props.teams)
    return(
        <Router>
        <div className='games'>
             {props.games.map(game => {
                return  (
                    <div key={game.id}>
                <p >Date: {game.date} Time: {game.time}</p>
                <p >{game.home_teams.name} vs {game.away_teams.name} @ {game.field.name} 

                <br/> <button>Edit</button> <button onClick={() => props.deleteGame(game.id)}>Delete</button></p>
                    </div>
                )
            })}
            <Link to='/games-admin-create'><button>Create New Game</button></Link>
            <Route
                path='/games-admin-create'
                render={() => < GamesAdminCreate 
                    fields={props.fields}
                    teams={props.teams}
                    games={props.games}
                    game={props.game}
                    gameHandleChange={props.gameHandleChange}
                    createGameHandleSubmit={props.createGameHandleSubmit}
                />}
            />
            <Route
                path='/games-admin-edit'
                render={() => < GamesAdminEdit 
               
                />}
            />
           
        </div>
        </Router>
    )
}

export default GamesAdmin