import React from 'react'


const TeamsAdminCreate = (props) => {
    
    const renderClubForm = props.clubs.map((club) => {
        return <option type='number' name={club.name} value = {club.id} onChange={props.teamHandleChange}>{club.name}</option>
        })

        return(
            <form onSubmit = {props.createTeamHandleSubmit}>
                <label>
                    Team Name:
                    <input type='text' value={props.team.name} name='name' onChange={props.teamHandleChange} />
                </label>
                <br />
                <label>
                    Club: <select 
                    value={props.team.club_id}
                    name='club_id' 
                    onChange={props.teamHandleChange}>{renderClubForm}</select>
                    
                </label>
                <br />
                <br />
                <button>Create Team</button>
            </form>
        )
        
}
        
    


export default TeamsAdminCreate