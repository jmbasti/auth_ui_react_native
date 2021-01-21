import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import { AuthParamList } from "../types/AuthParamList";

const Stack = createStackNavigator<AuthParamList>();

interface AuthScreenProps {}

export const AuthScreen: React.FC<AuthScreenProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ header: () => null }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
