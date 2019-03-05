import React from 'react'

const Practices = (props) => {
    console.log(props.practices)
    return(
        <div>
        {props.practices.map(practice => {
            return <p key={practice.id}>{practice.team.name} at {practice.field.name} on {practice.date} from {practice.time}</p>
        })}
          
        </div>
    )
}

export default Practices