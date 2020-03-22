import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pages from "./Pages";
import Home from "../__pages/Home";
import Restaurant from "../__pages/Restaurant";

export default function() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={Pages.HOME}>
      <Stack.Screen
        name={Pages.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Pages.RESTAURANT}
        component={Restaurant}
        options={{ title: "Restaurante" }}
      />
    </Stack.Navigator>
  );
}
