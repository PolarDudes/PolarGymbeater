import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Router from './api/router';
import Loading from './pages/loading';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ userData, setUserData ] = useState([]);
  const [ exerciseData, setExerciseData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ page, setPage ] = useState('loading')

  const turnPage = (dest) => {
    setPage(dest)
    console.log(page)
  }

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" k component={Loading} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
