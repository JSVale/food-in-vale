import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./__routes";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
