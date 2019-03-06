import React from 'react'


const GamesAdminEdit = (props) => {
    console.log(props.teams, "PROPS")
    const renderTeamForm = props.teams.map((team) => {
        return <option type='number' name={team.name} value = {team.id} onChange={props.gameHandleChange}>{team.name}</option>
        })
    const renderFieldForm = props.fields.map((field) => {
        return <option type='number' name={field.name} value = {field.id} onChange={props.gameHandleChange}>{field.name}</option>
    })

        return(
            <form onSubmit = {() => props.editGameHandleSubmit(props.id)}>
               <label>
                    Date:
                    <input type='text' value={props.game.date} name='date' onChange={props.gameHandleChange} />
                </label>
                <br /><label>
                    Time:
                    <input type='text' value={props.game.time} name='time' onChange={props.gameHandleChange} />
                </label>
                <br />
                <label>
                    Home Team: <select 
                    value={props.game.home_id}
                    name='home_id' 
                    onChange={props.gameHandleChange}>{renderTeamForm}</select>
                    
                </label>
                <label>
                    Away Team: <select 
                    value={props.game.away_id}
                    name='away_id' 
                    onChange={props.gameHandleChange}>{renderTeamForm}</select>
                    
                </label>

                <label>
                    Field: <select 
                    value={props.fields.field_id}
                    name='field_id' 
                    onChange={props.gameHandleChange}>{renderFieldForm}</select>
                    
                </label>
                <br />
                <br />
                <button>Edit Game</button>
            </form>
        )
        
}
    
export default GamesAdminEdit