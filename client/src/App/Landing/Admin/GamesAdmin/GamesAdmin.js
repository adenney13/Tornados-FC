import React from 'react'
import GamesAdminCreate from './GamesAdminForms/GamesAdminCreate'
import GamesAdminEdit from './GamesAdminForms/GamesAdminEdit'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const GamesAdmin = (props) => {
    console.log(props.teams)
    return(
        <Router>
        <div className='games'>
        <Link to='/games-admin-create'><button>Create New Game</button></Link>
        <br />
        <br/>
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
                    editGameHandleSubmit={props.editGameHandleSubmit}
                    fields={props.fields}
                    teams={props.teams}
                    games={props.games}
                    game={props.game}
                    gameHandleChange={props.gameHandleChange}
                    id={props.id}
                />}
            />
        <br />
        <table border= '3'>
         <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Field</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            
            <tbody>
                {props.games.map(game => {
                return  (
                    <tr key={game.id}>
                <td>{game.date}</td><td>{game.time}</td>
                <td>{game.home_teams.name}</td><td>{game.away_teams.name}</td> <td>{game.field.name} </td> 

                <td><Link to='/games-admin-edit'><button onClick={() => {console.log('clicked', game.id); props.getGameEditId(game.id)}}>Edit</button></Link></td> 
                <td><button onClick={() => props.deleteGame(game.id)}>Delete</button></td>
                    </tr>
                )
            })}
            </tbody>
           </table>
           
        </div>
        </Router>
    )
}

export default GamesAdmin