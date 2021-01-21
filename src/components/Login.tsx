import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { AuthNavProps } from "../types/AuthParamList";

const width = Dimensions.get("screen").width;

export default function Login({ route, navigation }: AuthNavProps<"Login">) {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  return (
    <Container>
      <ImageBackground
        resizeMode='cover'
        source={require("../../assets/background2.jpg")}
      />
      <Logo source={require("../../assets/logo.png")} />
      <Content>
        <Text>Welcome!</Text>
        <EmailInput placeholder='Email' placeholderTextColor='#9c9b9a' />
        <Password>
          <PasswordInput placeholder='Password' placeholderTextColor='#fff' />
          <Feather
            name='eye'
            size={30}
            color='#fff'
            style={{ fontSize: 35, alignSelf: "center", marginHorizontal: -50 }}
          />
        </Password>
        <ForgotText>Forgot password or login?</ForgotText>
        <TouchableOpacity>
          <LoginButton>
            <ButtonText>Login</ButtonText>
          </LoginButton>
        </TouchableOpacity>

        <TouchableOpacity>
          <RegisterButton>
            <ButtonText>I don't have an account</ButtonText>
          </RegisterButton>
        </TouchableOpacity>

        <BottomText>Contact us</BottomText>
      </Content>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Logo = styled.Image`
  height: 100px;
  width: 100px;
  position: absolute;
  left: ${width / 2 - 50}px;
  top: ${Platform.OS === "android" ? StatusBar.currentHeight : 80}px;
`;

const Content = styled.View`
  width: ${width}px;
  height: 580px;
  position: absolute;
  bottom: 0;
  background-color: rgb(132, 125, 133);
  opacity: 0.88;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 45px;
`;

const ImageBackground = styled.ImageBackground`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 15px;
  color: #faf3ed;
  font-family: ${Platform.OS === "android" ? "Roboto" : "Avenir"};
`;

const EmailInput = styled.TextInput`
  background-color: #faf3ed;
  width: 100%;
  height: 68px;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 15px;
`;
const Password = styled.View`
  flex-direction: row;
  align-items: center;
`;
const PasswordInput = styled.TextInput`
  background-color: #acaaaa;
  width: 100%;
  height: 68px;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
`;

const RegisterButton = styled.View`
  background-color: transparent;
  border: 1px solid #faf3ed;
  width: 100%;
  height: 68px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.View`
  background-color: #1a1a1a;
  width: 100%;
  height: 68px;
  padding: 10px;
  border-radius: 10px;
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

const BottomText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-top: 15px;
`;

const ForgotText = styled.Text`
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
`;
