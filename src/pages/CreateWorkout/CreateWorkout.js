import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ExerciseApi from "../../models/exercises";
import WorkoutModel from "../../models/workouts";

const CreateWorkout = props => {
    // display exercises from API
    const [exercises, setExercises] = useState([])
    const [value, setValue] = useState([])
    const [exerciseReps, setExerciseReps] = useState()
    const [exerciseName, setExerciseName] = useState('')
    const [selectionArray, setSelectionArray] = useState([])
    const [workoutType, setWorkoutType] = useState('')
    const [workoutName, setWorkoutName] = useState('')

    const workoutTypes = ['Abs', 'Arms', 'Cardio', 'Full Body', 'Glutes', 'Legs', 'Lower Body', 'Strength', 'Upper Body']

    // const reps = 20

    // populating the selections with exercises from API
    const fetchExercises = () => {
        ExerciseApi.getExercises().then(data => {
            const exercises = []
            console.log(data)
            data.map((item, index) => (
                // console.log(item),
                exercises.push(item),
                console.log(exercises)
            ))
            setExercises(exercises)
        })
    }
    // setting the state for the exercise selected
    const handleExerciseSelection = e => {
        e.preventDefault()
        selectionArray.push(e.currentTarget.value)
        console.log(selectionArray)
    }

    //loop through the selectionArray of exercises to post to ExerciseModel
    const addExercises = () => {
        selectionArray.forEach((exercise, index) => {
            return exercise
        })
    }
    

    useEffect(() => {
        fetchExercises();
    }, []);

    // handle the workout type selection
    const handleWorkoutType = e => {
        e.preventDefault()
        setWorkoutType(e.target.value)

    }
    // handle the name of the workout input


    // create the workout on submission
    const handleCreate = e => {
        e.preventDefault()
            WorkoutModel.create({
                workoutType: workoutType,
                workoutName: workoutName,
            }).then(data => {
                console.log("Success! New workout added.", data)
                props.history.push('/')
        })
    }

    return (
        <>
            <h1>Create A New Workout</h1>

            
            <form onSubmit={handleCreate}>
            <div className="form-group">
                <label for='workoutType'>Choose The Workout Type:</label> <br />

                <select id='workoutType'>
                    {workoutTypes.map((type, index) => {
                        return <option key={index} value={type} > {type} </option>
                    })}
                </select>
            </div>

        <div className="form-group">
            <label htmlFor="workoutName">Workout Name: </label>
            <input 
                onChange={ setWorkoutName } 
                value={ workoutName } 
                type="text" 
                id="workoutName" 
                name="workoutName" 
                required  
            />
        </div>

            <div className="form-group">
                <label for='exercises' >Exercises: </label> <br />

                <select id='exercises' onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>

                <select onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>

                <select onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>

                <select onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>

                <select onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>

                <select onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>
            </div>

                <button type="submit">Create!</button>
            </form>
        </>
    );
}

export default CreateWorkout