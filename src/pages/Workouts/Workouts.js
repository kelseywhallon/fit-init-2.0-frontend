import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ExerciseApi from "../../models/exercises";
import WorkoutModel from "../../models/workouts"

const Workouts = (props) => {
    console.log(props)
    const [workouts, setWorkouts] = useState()


    const fetchCreatedWorkouts = () =>{
        WorkoutModel.findAllWorkouts().then(data => {
            setWorkouts(data)
        })
    }

    useEffect(() => {
        fetchCreatedWorkouts();
    
    }, [])
}

export default Workouts;
