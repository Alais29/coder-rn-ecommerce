import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/input";
import { signInAsync, signUpAsync } from "../../features/auth";
import { schemaEmail, schemaPassword } from "../../utils/validateSchema";

import { styles } from "./styles";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();

  const handleSignup = () => {
    const validateEmail = schemaEmail.validate({ email });
    const validatePassword = schemaPassword.validate({ password });

    if (validateEmail.error) setEmailError(validateEmail.error.message);
    else setEmailError("");

    if (validatePassword.error)
      setPasswordError(validatePassword.error.message);
    else setPasswordError("");

    if (password === confirmPassword) {
      dispatch(signUpAsync({ email, password }));
      setConfirmPasswordError("");
    } else setConfirmPasswordError("Passwords don't match");
  };

  const handleSignin = () => {
    if (email !== "" && password !== "") {
      dispatch(signInAsync({ email, password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>{showSignup ? "Sign Up" : "Sign In"}</Text>
          <Input
            label="Email"
            onChange={setEmail}
            value={email}
            error={emailError}
          />
          <Input
            label="Password"
            password={true}
            onChange={setPassword}
            value={password}
            error={passwordError}
          />
          {showSignup ? (
            <Input
              label="Confirm Password"
              password={true}
              onChange={setConfirmPassword}
              value={confirmPassword}
              error={confirmPasswordError}
            />
          ) : null}
          <Button
            title={showSignup ? "SignUp" : "SignIn"}
            onPress={showSignup ? handleSignup : handleSignin}
          />
        </View>
        <View style={styles.bottomMessage}>
          <Text style={styles.bottomMessageText}>
            {showSignup ? "Already" : "Don't"} have an account?
          </Text>
          <Button
            title={showSignup ? "Sign In" : "Sign Up"}
            style={{ width: "100%" }}
            onPress={() => setShowSignup((prevValue) => !prevValue)}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
