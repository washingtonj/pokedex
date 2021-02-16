import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, About } from "../screens";

const Stack = createStackNavigator();

export default function StackNavigator() {

  const initConfigs = {
    initialRouterName: 'Home',
    screenOptions: { headerShown: false },
    style: { background: 'white' }
  }


  return (
    <NavigationContainer>
      <Stack.Navigator {...initConfigs} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
