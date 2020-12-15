import REACT_APP_API_URL from "../config/urls";

export default class WorkoutModel {
    
    static newWorkout(data) {
        console.log(data)
        return fetch(`${REACT_APP_API_URL}/workouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    static findAllWorkouts = () => {
        return fetch(`${REACT_APP_API_URL}/workouts`, {
            method: "GET"
        }).then(res => res.json());
    };
    
    static findWorkout = workoutId => {
        return fetch(`${REACT_APP_API_URL}/workouts/${workoutId}`, {
            method: "GET"
        }).then(res => res.json());
    };

}
