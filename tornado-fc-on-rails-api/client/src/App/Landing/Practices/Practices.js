import React from 'react'

const Practices = (props) => {
    console.log(props.practices)
    return(
        <div className='practices'>
        <table border= '3'>
         <thead>
              <tr>
                <th>Team</th>
                <th>Field</th>
                <th>Date </th>
                <th>Time </th>
              </tr>
            </thead>
            <tbody>
            {props.practices.map(practice => {
            return <tr key={practice.id}>
            <td>{practice.team.name}</td> <td>{practice.field.name}</td> <td>{practice.date}</td>  <td>{practice.time}</td>
            </tr>
        })}
        </tbody>
        </table>
          
        </div>
    )
}

export default Practices