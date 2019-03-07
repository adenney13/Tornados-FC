import React from 'react'

const ClubsAdmin = (props) => {
    console.log(props.clubs)
    return(
        <div>
             {props.clubs.map(club => {
                return <p key={club.id}>{club.name}<br/><button>Edit</button><button>Delete</button></p>
            })}
            <button>Add New Club</button>
        </div>
    )
}

export default ClubsAdmin