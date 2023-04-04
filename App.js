import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import Router from './api/router';
import Loading from './pages/loading';

export default function App() {
  const [ userData, setUserData ] = useState([]);
  const [ exerciseData, setExerciseData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    let didCancel = false;

    const user = () => Router.getUser()
      .then(response => setUserData(response))

    const exercises = () => Router.getExercises()
      .then(response => setExerciseData(response))

    if (!didCancel) {
      Promise.all([ user(), exercises() ])
        .catch(e => console.error(e))
        .finally(() => setLoading(false));
    }

    return () => didCancel = true;
  }, [])

  return (
    <>
      {loading
        ?
        <Loading />
        : (
          <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text>App</Text>
          </View>
        )}
    </>
  );
}
