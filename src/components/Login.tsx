import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
// COMPONENTS
import { AppButton } from "./AppButton";

// TYPES
import { AuthNavProps } from "../types/AuthParamList";

// FORMIK
import { Formik, FormikErrors } from "formik";
import { useFormik } from "formik";
// YUP
import * as Yup from "yup";

const width = Dimensions.get("screen").width;

export default function Login({ route, navigation }: AuthNavProps<"Login">) {
  // FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // YUP VALIDATION SCHEMA
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter valid email")
        .required("Email address is required"),
      password: Yup.string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      // CLEAR THE FORM AFTER SUBMISSION
      setTimeout(resetForm, 1000);
    },
  });

  return (
    <Container>
      <ImageBackground
        resizeMode='cover'
        source={require("../../assets/background2.jpg")}
      />
      <Logo source={require("../../assets/logo.png")} />
      <Content>
        <Text>Welcome!</Text>
        <FormGroup>
          <EmailInput
            placeholder='Email'
            placeholderTextColor='#9c9b9a'
            value={formik.values.email}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            keyboardType='email-address'
            textContentType='emailAddress'
          />

          <ErrorContent>
            {formik.errors.email && formik.touched.email && (
              <ErrorText>{formik.errors.email}</ErrorText>
            )}
          </ErrorContent>
        </FormGroup>
        <FormGroup>
          <PasswordContainer>
            <PasswordInput
              placeholder='Password'
              placeholderTextColor='#fff'
              secureTextEntry
              value={formik.values.password}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              textContentType='password'
            />
            <Feather
              name='eye'
              color='#fff'
              style={{
                fontSize: 24,
                alignSelf: "center",
                marginHorizontal: -50,
              }}
            />
          </PasswordContainer>
          <ErrorContent>
            {formik.errors.password && formik.touched.password && (
              <ErrorText>{formik.errors.password}</ErrorText>
            )}
          </ErrorContent>
        </FormGroup>

        <ForgotText>Forgot password or login?</ForgotText>

        <AppButton onPress={formik.handleSubmit} />

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

const FormGroup = styled.View`
  margin-bottom: 10px;
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
const ErrorContent = styled.View`
  height: 15px;
`;
const ErrorText = styled.Text`
  font-size: 16px;
  color: #fff;
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
  height: 60px;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
`;
const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const PasswordInput = styled.TextInput`
  background-color: #acaaaa;
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
`;

const RegisterButton = styled.View`
  background-color: transparent;
  border: 1px solid #faf3ed;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

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

  margin-bottom: 20px;
`;
