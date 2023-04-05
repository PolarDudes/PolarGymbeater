import React from 'react';
import { Text, View } from 'react-native';

import { UserContext, ExerciseContext } from './src/context';
import Home from './pages/home';

export default function App() {
  const [ loading, setLoading ] = React.useState(true);

  React.useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      Promise.all([ UserContext._currentValue, ExerciseContext._currentValue ])
        // .then(([ user, exercises ]) => {
        //   console.log(user, exercises);
        // })
        .finally(() => setLoading(false));
    }

    return () => didCancel = true;
  }, [])

  Home();

  return (
    <>
      {loading
        ?
        <Text>Loading...</Text>
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
