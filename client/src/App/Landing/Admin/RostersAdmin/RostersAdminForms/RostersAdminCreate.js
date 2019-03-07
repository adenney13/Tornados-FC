import React from 'react'


const RostersCreate = (props) => {
    console.log(props.teams)
    const renderTeamForm = props.teams.map((team) => {
        return <option type='number' name={team.name} value = {team.id} onChange={props.playerHandleChange}>{team.name}</option>
        })

        return(
            <form onSubmit = {props.createPlayerHandleSubmit}>
                <label>
                    Player Name:
                    <input type='text' value={props.player.name} name='name' onChange={props.playerHandleChange} />
                </label>
                <br />
                <label>
                    Number:
                    <input type='text' value={props.player.number} name='number' onChange={props.playerHandleChange} />
                </label>
                <label>
                    Team: <select 
                    value={props.player.team_id}
                    name='team_id' 
                    onChange={props.playerHandleChange}>{renderTeamForm}</select>
                    
                </label>
                <br />
                <br />
                <button>Create Player</button>
            </form>
        )
        
}
        
    


export default RostersCreate