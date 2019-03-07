import React from 'react'

const Clubs = (props) => {
    console.log(props.clubs)
    return(
        <div>
             {props.clubs.map(club => {
                return <p key={club.id}>{club.name}</p>
            })}
        </div>
    )
}

export default Clubs