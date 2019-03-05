import React from 'react'
import TeamsAdmin from './TeamsAdmin/TeamsAdmin'
import PracticesAdmin from './PracticesAdmin/PracticesAdmin'
import GamesAdmin from './GamesAdmin/GamesAdmin'
import RostersAdmin from './RostersAdmin/RostersAdmin'
import ClubsAdmin from './ClubsAdmin/ClubsAdmin'
import { Route, Link } from 'react-router-dom'

const Admin = (props) => {
    console.log(props.teams)
    return (
        <div className= 'admin_landing'>
                Admin Landing page links here!
                <nav>
                    <ul>
                        <li><Link to='/games-admin'>Games</Link></li>
                        <li><Link to='/practices-admin'>Practices</Link></li>
                        <li><Link to='/rosters-admin'>Rosters</Link></li>
                        <li><Link to='/teams-admin'>Teams</Link></li>
                        <li><Link to='/clubs-admin'>Clubs</Link></li>
                        <li><Link to='/'>Home</Link></li> 
                    </ul>
                </nav>
                <main>
                    <Route
                        path='/games-admin'
                        render={() => < GamesAdmin 
                        games={props.games}/>}
                        />
                    <Route
                        path='/practices-admin'
                        render={() => < PracticesAdmin 
                        practices={props.practices}/>}
                    />
                    <Route
                        path='/rosters-admin'
                        render={() => < RostersAdmin 
                        players={props.players}/>}
                    />
                    <Route
                        path='/teams-admin'
                        render={() => < TeamsAdmin 
                        teams={props.teams}/>}
                    />
                    <Route
                        path='/clubs-admin'
                        render={() => < ClubsAdmin 
                        clubs={props.clubs}/>}
                    />
                    {/* <Route
                        path='/admin'
                        render={() => < Admin 
                        teams={this.state.teams}
                        games={this.state.games}
                        fields={this.state.fields}
                        players={this.state.players}
                        practices={this.state.practices}
                        clubs={this.state.clubs}/>}
                    /> */}
                  
                </main>
                
            </div>
    )
}

export default Admin