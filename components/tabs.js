import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/home'
import SettingsScreen from '../pages/SettingsScreen'
import Header from '../components/Header'
// import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: 'red',
            height: 50,
            margin: -1,
          },
          tabBarItemStyle: {
            backgroundColor: 'red',
            margin: 5,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline'
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          //   component={Profile}
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  )
}
