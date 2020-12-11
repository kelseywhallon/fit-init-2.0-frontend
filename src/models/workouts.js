import REACT_APP_API_URL from "../config/urls";

export default class WorkoutModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/workouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    // static showWorkout = workoutId => {
    //     return fetch(`${REACT_APP_API_URL}/workout/${workoutId}`, {
    //         method: "GET"
    //     }).then(res => res.json());
    // };

    // static updateWorkout = workout => {
    //     return fetch(`${REACT_APP_API_URL}/workout/${workout.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(workout)
    //     }).then(res => res.json());
    // };

    // static destroyWorkout = workout => {
    //     return fetch(`${REACT_APP_API_URL}/workout/${workout.id}`, {
    //         method: "DELETE"
    //     }).then(res => res.json());
    // };

}
