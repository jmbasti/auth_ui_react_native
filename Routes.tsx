import React, { useEffect } from "react";
import firebase from "firebase";
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { AuthScreen } from "./src/screens/AuthScreen";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  useEffect(() => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    let firebaseConfig = {
      apiKey: "AIzaSyA3IC3H0clm_TbyL3Y3WjOSfTpnMDPrjc0",
      authDomain: "auth-ui-react-native.firebaseapp.com",
      projectId: "auth-ui-react-native",
      storageBucket: "auth-ui-react-native.appspot.com",
      messagingSenderId: "786717752171",
      appId: "1:786717752171:web:159d681803e19715b86a2e",
      measurementId: "G-VYBEPP53S5",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
};
