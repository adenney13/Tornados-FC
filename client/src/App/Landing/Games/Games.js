import React from 'react'

const Games = (props) => {
    console.log(props.games)
    return(
        <div className='games'>
         <table border= '3'>
         <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Field</th>
              </tr>
            </thead>
            <tbody>
            {props.games.map(game => {
                return (
                    <tr key={game.id}>
                    <td>{game.date}</td><td>{game.time}</td>
                    <td>{game.home_teams.name}</td>  <td>{game.away_teams.name}</td> <td>{game.field.name} </td>
                    </tr>
                )
            })}
            </tbody>
             
            </table>
        </div>
    )
}
 
export default Games