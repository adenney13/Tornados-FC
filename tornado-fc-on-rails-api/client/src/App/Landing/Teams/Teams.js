import React from 'react'

const Teams = (props) => {
 console.log(props.teams)
    return(
        <div className ="Teams">
         <table border= '3'>
            <thead>
              <tr>
                <th>Name</th>
                
              </tr>
            </thead>
            <tbody>
            {props.teams.map(team => {
                return <tr key={team.id}><td>{team.name}</td></tr>
            })}
            </tbody>
           </table>
        
        </div>
    ) 
}

export default Teams