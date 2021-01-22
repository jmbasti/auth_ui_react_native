import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

interface AppButtonProps {
  onPress: () => void;
}

export const AppButton: React.FC<AppButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LoginButton>
        <ButtonText>Login</ButtonText>
      </LoginButton>
    </TouchableOpacity>
  );
};

const LoginButton = styled.View`
  background-color: #1a1a1a;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
