import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ExerciseApi from "../../models/exercises";
import WorkoutModel from "../../models/workouts"
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import styles from "./Workouts.module.scss";

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
            console.log("inside db workouts:", workouts)
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
            {workouts.map((workout, index) => {
                return (
                <div className={`${styles.container} ${styles.options}`} key={(Math.random())}> 
                    <Card className={`${styles.card}`}>
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body className={`${styles.cardbody}`}>
                            <Card.Title className={`${styles.cardtitle}`} key={(Math.random())}>Workout Type: {workout.workoutType}</Card.Title>
                            <Card.Text className={`${styles.cardtext}`} key={(Math.random())}> Workout Name: {workout.workoutName}</Card.Text>
                        </Card.Body>

                        <ListGroup className={`${styles.listgroup}`} className="list-group-flush">
                            <ListGroupItem className={`${styles.listitem}`}>{workout.exerciseName}</ListGroupItem>
                            {workout.exercises.map((exercise, index) => {
                                return <ListGroupItem key={(Math.random())} value={exercise.exerciseName}>Exercise {index + 1}: {exercise.exerciseName}</ListGroupItem>
                            })}
                        </ListGroup>
                    </Card>
                </div>
                )
            })}
        </>
    )
}

export default Workouts;
