import React from 'react'

const PracticesAdmin = (props) => {
    console.log(props.practices)
    return(
        <div>
        {props.practices.map(practice => {
            return <p key={practice.id}>{practice.team.name} at {practice.field.name} on {practice.date} from {practice.time} <br /> <button>Edit</button><button value = {practice.id} onClick= {props.deletePractice}>Delete</button></p>
        })}
          <button>Add New Practice</button>
        </div>
    )
}

export default PracticesAdmin