import React, { useState } from 'react';
import Router from '../api/router';

const PolarContext = React.createContext();

const PolarContextProvider = ({ children }) => {
    const [ userData, setUserData ] = useState([]);
    const [ exerciseData, setExerciseData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    React.useEffect(() => {
        let didCancel = false;

        if (!didCancel) {
            Promise.all([ Router.getUser(), Router.getExercises() ])
                .then(([ user, exercises ]) => {
                    setUserData(user);
                    setExerciseData(exercises);
                    
                })
                .catch(e => console.error('Context', e))
                .finally(() => setLoading(false));
        }

        return () => didCancel = true;
    }, [])

    return (
        <PolarContext.Provider value={{ userData, exerciseData, loading }} >
            {children}
        </PolarContext.Provider>
    );
}

export { PolarContext, PolarContextProvider };