import REACT_APP_API_URL from "../config/urls";

export default class ExerciseModel {
    //post to exercise model
    static createExercise(data) {
        return fetch(`${REACT_APP_API_URL}/workoutexercise`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    // show all exercises
    static showAllExercises = () => {
        return fetch(`${REACT_APP_API_URL}/workoutexercise`, {
            method: "GET",
        }).then(res => res.json());
    };    
    
    // show exercise by id
    static showExercise = exercisesId => {
        return fetch(`${REACT_APP_API_URL}/workoutexercise/${exerciseId}`, {
            method: "GET",
        }).then(res => res.json(data));
    }


    // fetch exercises belonging to specific workout

}