import React from 'react'

const Rosters = (props) => {
    console.log(props.players)
    return(
        <div>
        <table border= '3'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
                {props.players.map(player => {
                    return <tr key={player.id}> <td>{player.name}</td>  
                    <td>{player.number}</td><td>{player.team.name} </td></tr>
                })}
            </tbody>
        </table>  
        </div>
    )
}

export default Rosters