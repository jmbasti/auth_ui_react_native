import React from "react";
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./src/screens/AuthScreen";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
};
