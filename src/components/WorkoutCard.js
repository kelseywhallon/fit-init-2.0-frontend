import React from 'react'

const WorkoutCard = (props) => {

    return (
        <div className="WorkoutCard">
            <h3><u>Workout Name:</u></h3>
            <p>{props.name}</p>
            <h3><u>Workout Type:</u></h3>
            <p>{props.type}</p>
        </div>
    )
}

export default WorkoutCard