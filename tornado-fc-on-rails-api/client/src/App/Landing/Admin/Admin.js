import React from 'react'
import TeamsAdmin from './TeamsAdmin/TeamsAdmin'
import PracticesAdmin from './PracticesAdmin/PracticesAdmin'
import GamesAdmin from './GamesAdmin/GamesAdmin'
import RostersAdmin from './RostersAdmin/RostersAdmin'
import ClubsAdmin from './ClubsAdmin/ClubsAdmin'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Admin = (props) => {
console.log(props.playerHandleChange)
    return (
        <Router>
        <div className= 'admin_landing'>
                <h2 className='adminHeading'>Welcome Back, Admin!</h2>
                <nav>
                    <ul>
                        <li><Link to='/games-admin'>Games</Link></li>
                        <li><Link to='/practices-admin'>Practices</Link></li>
                        <li><Link to='/rosters-admin'>Rosters</Link></li>
                        <li><Link to='/teams-admin'>Teams</Link></li>
                        
                         
                    </ul>
                </nav>
                <main>
                    <Route
                        path='/games-admin'
                        render={() => < GamesAdmin 
                        fields={props.fields}
                        teams={props.teams}
                        games={props.games}
                        game={props.game}
                        deleteGame={props.deleteGame}
                        gameHandleChange={props.gameHandleChange}
                        createGameHandleSubmit={props.createGameHandleSubmit}
                        editGameHandleSubmit={props.editGameHandleSubmit}
                        getGameEditId={props.getGameEditId}
                        id={props.id}
                        />}
                        />
                    <Route
                        path='/practices-admin'
                        render={() => < PracticesAdmin 
                        fields={props.fields}
                        teams={props.teams}
                        practices={props.practices}
                        practice={props.practice}
                        createPracticeHandleSubmit={props.createPracticeHandleSubmit}
                        practiceHandleChange={props.practiceHandleChange}
                        deletePractice={props.deletePractice}/>}
                    />
                    <Route
                        path='/rosters-admin'
                        render={() => < RostersAdmin 
                        createPlayerHandleSubmit={props.createPlayerHandleSubmit}
                        playerHandleChange={props.playerHandleChange}
                        teams={props.teams}
                        player={props.player}
                        players={props.players}
                        deletePlayer={props.deletePlayer}/>}
                    />
                    <Route
                        path='/teams-admin'
                        render={() => < TeamsAdmin 
                        clubs={props.clubs}
                        teams={props.teams}
                        team={props.team}
                        club={props.club}
                        createTeam={props.createTeam}
                        createTeamHandleSubmit={props.createTeamHandleSubmit}
                        deleteTeam={props.deleteTeam}
                        deleteTeamHandleSubmit={props.deleteTeamHandleSubmit}
                        teamHandleChange={props.teamHandleChange}
                        
                        />}
                    />
                    <Route
                        path='/clubs-admin'
                        render={() => < ClubsAdmin 
                        clubs={props.clubs}/>}
                    />
                  
                </main>
                
            </div>
            </Router>
    )
}

export default Admin