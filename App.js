import React from 'react'
import { PolarContextProvider } from './context/polarContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Loading from './pages/loading'
import Home from './pages/home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <PolarContextProvider>
        <Loading>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </Loading>
      </PolarContextProvider>
    </>
  )
}
