import REACT_APP_API_URL from "../config/urls";

export default class ExerciseApi {

    static getExercises(data) {
        return fetch(`${REACT_APP_API_URL}/exercises/exercises`, {
            method: "GET",
        }).then(res => res.json(data));
    }

}