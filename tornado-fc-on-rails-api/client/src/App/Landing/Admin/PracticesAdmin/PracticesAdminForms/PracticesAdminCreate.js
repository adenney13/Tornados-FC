import React from 'react'


const PracticesAdminCreate = (props) => {
    console.log(props.practices)
    const renderTeamForm = props.teams.map((team) => {
        return <option selected='selected' type='number' name={team.name} value = {team.id} onChange={props.practiceHandleChange}>{team.name}</option>
        })
    const renderFieldForm = props.fields.map((field) => {
        return <option selected='selected' type='number' name={field.name} value = {field.id} onChange={props.practiceHandleChange}>{field.name}</option>
    })

        return(
            <form onSubmit = {props.createPracticeHandleSubmit}>
                <label>
                    Team: <select 
                    value={props.practice.team_id}
                    name='team_id' 
                    onChange={props.practiceHandleChange}>{renderTeamForm}</select>
                </label>
    
                <label>
                    Field: <select 
                    value={props.practice.field_id}
                    name='field_id' 
                    onChange={props.practiceHandleChange}>{renderFieldForm}</select>
                    
                </label>
                <br />
                <label>
                    Date:
                    <input type='text' value={props.practice.date} name='date' onChange={props.practiceHandleChange} />
                </label>
                <br /><label>
                    Time:
                    <input type='text' value={props.practice.time} name='time' onChange={props.practiceHandleChange} />
                </label>
                <br />
                <br />
                <button>Create Practice</button>
            </form>
        )
        
}
    
export default PracticesAdminCreate