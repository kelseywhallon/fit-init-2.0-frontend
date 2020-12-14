import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ExerciseApi from "../../models/exercises";
import WorkoutModel from "../../models/workouts"
import WorkoutCard from "../../components/WorkoutCard"

const Workouts = props => {
    console.log("workout props", props)
    const [workouts, setWorkouts] = useState([])

    
    const fetchCreatedWorkouts = () => {
        WorkoutModel.findAllWorkouts().then(data => {
            const AllWorkouts = data.AllWorkouts
            console.log("inside find all workouts", AllWorkouts)
            // const workoutsArray = [];
            for (let i = 0; i < AllWorkouts.length; i++) {
                workouts.push(AllWorkouts[i]);
            }
            console.log("workouts:", workouts)
            setWorkouts(workouts)
        }
        )
    }

        
        useEffect(() => {
            fetchCreatedWorkouts();
        }, [])

    return (
        <>
            <h1>My Workouts </h1>
                {/* <WorkoutCard  
                    {workouts.map((workout, index) => {
                        return workouts.workoutType
                    })}
                /> */}
        </>

    )
}

export default Workouts;
