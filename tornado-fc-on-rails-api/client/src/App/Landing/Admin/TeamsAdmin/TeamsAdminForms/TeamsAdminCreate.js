import React from 'react'


const TeamsAdminCreate = (props) => {
    console.log(props.team.name)
    console.log(props.handleChange)
        return(
            <form >
                <label>
                    Team Name:
                    <input type='text' value={props.team.name} name='name' onChange={props.handleChange} />
                </label>
                <br />
                <label>
                    Club:
                    <input type='number' name='club_id' onChange={props.handleChange} />
                </label>
                <br />
                <br />
                <button onSubmit = {props.createTeamHandleSubmit}>Create Team</button>
            </form>
        )
    
}

export default TeamsAdminCreate