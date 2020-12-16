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
        {/* <h1 className={`${styles.workoutsPageTitle}`}> Workouts </h1> */}
            <div className={styles.workoutDiv}>
                {workouts.map((workout, index) => {
                    return (
                    <div className={`${styles.workoutContainer} ${styles.options}`} key={(Math.random())}> 
                        <Card className={`${styles.workoutCard}`}>
                            <Card.Body className={`${styles.cardbody}`}>
                                <Card.Title className={`${styles.workoutCardtitle}`} key={(Math.random())}>{workout.workoutName}</Card.Title>
                                <Card.Text className={`${styles.workoutCardtext}`} key={(Math.random())}> {workout.workoutType}</Card.Text>
                                <Card.Text className={`${styles.workoutReps}`} key={(Math.random())} > Reps: 15 <br /> Repeat 4x </Card.Text>
                            </Card.Body>

                            <ListGroup className={`${styles.workoutListgroup}`} className="list-group-flush">
                                {/* <ListGroupItem className={`${styles.workoutCategory}`}> {workout.exerciseName} </ListGroupItem> */}
                                {workout.exercises.map((exercise, index) => {
                                    return <ListGroupItem className={`${styles.workoutCategory}`} key={(Math.random())} value={exercise.exerciseName}>  {exercise.exerciseName}</ListGroupItem>
                                })}
                            </ListGroup>
                        </Card>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Workouts;
