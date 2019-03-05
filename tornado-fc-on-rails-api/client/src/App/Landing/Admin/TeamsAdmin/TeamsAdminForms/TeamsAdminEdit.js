import React from 'react'

const TeamsAdminEdit = (props) => {
    console.log(props.teams)
    
        return(
            <form >
                <label>
                    Team Name:
                    <input type='text' name='name' onChange={props.handleChange} />
                </label>
                <br />
                <label>
                    Club:
                    <input type='number' name='club_id' onChange={props.handleChange} />
                </label>
                <br />
                <br />
                <button>Edit Team</button>
            </form>
        )
    
}

export default TeamsAdminEdit