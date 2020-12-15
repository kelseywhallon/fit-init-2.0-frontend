import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ExerciseApi from "../../models/exercises";
import WorkoutModel from "../../models/workouts";
import WorkoutExercise from "../../models/exerciseModel"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateWorkout = props => {
    // display exercises from API
    const [exercises, setExercises] = useState([])
    const [exerciseReps, setExerciseReps] = useState()
    const [exerciseName, setExerciseName] = useState('')
    const [selectionArray, setSelectionArray] = useState([])
    const [repsArray, setRepsArray] = useState([])
    const [workoutType, setWorkoutType] = useState('')
    const [workoutName, setWorkoutName] = useState('')

    const workoutTypes = ['Abs', 'Arms', 'Cardio', 'Full Body', 'Glutes', 'Legs', 'Lower Body', 'Strength', 'Upper Body']

    const reps = 30;

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

    useEffect(() => {
        fetchExercises();
    }, []);


    // handle the workout type selection
    const handleWorkoutType = e => {
        e.preventDefault()
        setWorkoutType(e.target.value)
    }
    // workoutName 
    const handleWorkoutName = e => {
        e.preventDefault()
        setWorkoutName(e.target.value)
    }
    // handle the name of the workout input

    // exercise reps 
    const handleExerciseReps = e => {
        e.preventDefault()
        setExerciseReps(e.target.value)
    }

    // create the workout on submission
    const handleCreateWorkout = e => {
        e.preventDefault()
        const allExercises = []
        for (let i = 0; i < selectionArray.length; i++) {
            const newExercise = {
                exerciseName: selectionArray[i],
                exerciseRep: 15
            }
            allExercises.push(newExercise)
        }
        WorkoutModel.newWorkout({
            workoutType: workoutType,
            workoutName: workoutName,
            exercises: allExercises
        }).then(data => {
            // console.log("Success! New workout added.", data)
        })
        props.history.push('/')
    }

    return (
        <>
            <h1>Create A New Workout</h1>
            <Form onSubmit={handleCreateWorkout}>
                <Form.Group>
                    <label htmlFor='workoutType'>Choose The Workout Type:</label> <br />
                    <select id='workoutType' onChange={ handleWorkoutType }>
                        {workoutTypes.map((type, index) => {
                            return <option key={index} value={type} > {type} </option>
                        })}
                    </select>
                </Form.Group>
                <br />
                <Form.Group>
                    <label htmlFor="workoutName">Workout Name: </label>
                    <br />
                    <Form.Control
                        size="lg"
                        type="text"
                        onChange={ handleWorkoutName }
                        value={ workoutName }
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <label htmlFor="workoutName">Choose the Exercises: </label>
                    <br />
                    <Form.Control size="lg" as="select" 
                        onChange={ handleExerciseSelection } >
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                    {/* <label htmlFor="reps">Exercise Reps: </label>
                    <Form.Control size="lg" as="select" onChange={ handleExerciseReps }>  {reps.map((rep, index) => { 
                        return <option key={ index } value={rep} >
                        {rep} </option>
                    }
                    )}
                    </Form.Control> */}
                    <br />
                    <Form.Control size="lg" as="select" onChange={handleExerciseSelection}>
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                    <br />
                    <Form.Control size="lg" as="select" onChange={handleExerciseSelection}>
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                    <br />
                    <Form.Control size="lg" as="select" onChange={handleExerciseSelection}>
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                    <br />
                    <Form.Control size="lg" as="select" onChange={handleExerciseSelection}>
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                    <br />
                    <Form.Control size="lg" as="select" onChange={handleExerciseSelection}>
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                    <br />
                    <Form.Control size="lg" as="select" onChange={handleExerciseSelection}>
                        {exercises.map((exercise, index) => {
                            return <option key={index} value={exercise.name} > {exercise.name} </option>
                        })}
                    </Form.Control>
                </Form.Group>

                <br />
                <Button variant="primary" size="lg" active type="submit">
                    Create Workout!
                </Button>
                {/* <button type="submit">CREATE WORKOUT!</button> */}
            </Form>
        </>
    );
}

export default CreateWorkout