import { createContext } from "react";
import Router from "../api/router";

const UserContext = createContext(
    Router.getUser()
        .then(response => response)
        .catch(e => console.error(e))
);

const ExerciseContext = createContext(
    Router.getExercises()
        .then(response => response)
        .catch(e => console.error(e))
);

export { UserContext, ExerciseContext };