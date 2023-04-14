import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PolarContextProvider } from "./context/polarContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/home";
import SettingsScreen from "./pages/SettingsScreen";
import Header from "./components/Header";
import DetailsScreen from "./pages/DetailsScreen";
import Loading from "./pages/loading";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "red",
            height: 50,
            margin: -1,
          },
          tabBarItemStyle: {
            backgroundColor: "red",
            margin: 5,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Details") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <PolarContextProvider>
        <Loading>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Tabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </Loading>
      </PolarContextProvider>
    </>
  );
}
