import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { newWorkout } from "../../../fit-init-2.0-backend/controllers/workouts";
import ExerciseApi from "../models/exercises";
import WorkoutModel from "../models/workouts"

const CreateWorkout = props => {
    // display exercises from API
    const [exercises, setExercises] = useState([])
    const [value, setValue] = useState([])
    const [exerciseReps, setExerciseReps] = useState()
    const [exerciseName, setExerciseName] = useState('')

    const [selectionArray, setSelectionArray] = useState([])

    const fetchExercises = () => {
        ExerciseApi.getExercises().then(data => {
            const exercises = []
            console.log(data)
            data.map((item, index) => (
                // console.log(item),
                exercises.push(item)
                // console.log(exercises)
            ))
            setExercises(exercises)
        })
    }

    const handleExerciseSelection = e => {
        e.preventDefault()
        console.log("before: ", selectionArray)
        selectionArray.push(e.currentTarget.value)
        console.log(e.currentTarget.value)
        console.log("after", selectionArray)
        // setValue(valueArray)
    }

    useEffect(() => {
        fetchExercises();
    }, []);

    const handleCreate = e => {
        e.preventDefault()
        console.log(selectionArray)
        WorkoutModel.create({
            exerciseName: selectionArray
        }).then(data => {
            console.log("Success! New workout added.", data)
            props.history.push('/')
        })
    }

    return (
        <>
            <h1>Create A New Workout</h1>
            <form onSubmit={handleCreate}>
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
                <select onChange={handleExerciseSelection}>
                    {exercises.map((exercise, index) => {
                        return <option key={index} value={exercise.name} > {exercise.name} </option>
                    })}
                </select>
                <br />
                <button type="submit">Create!</button>
            </form>
        </>
    );
}

export default CreateWorkout