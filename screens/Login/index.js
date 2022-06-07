import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/input";
import { signInAsync, signUpAsync } from "../../features/auth";
import loginValidationSchema from "../../utils/validationYup";
import { Formik } from "formik";
// import { schemaEmail, schemaPassword } from "../../utils/validateSchema";

import { styles } from "./styles";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (showSignup) {
      if (values.password === values.confirmPassword) {
        dispatch(signUp({ email: values.email, password: values.password }));
      } else {
        setConfirmPasswordError("Passwords must be the same.");
      }
    } else {
      dispatch(signInAsync({ email: values.email, password: values.password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>{showSignup ? "Sign Up" : "Sign In"}</Text>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={loginValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ handleChange, errors, handleSubmit, values, handleBlur }) => (
              <>
                <Input
                  label="Email"
                  password={false}
                  onChange={handleChange("email")}
                  value={values.email}
                  error={errors.email}
                  onBlur={handleBlur("email")}
                />
                <Input
                  label="Password"
                  password={true}
                  onChange={handleChange("password")}
                  value={values.password}
                  error={errors.password}
                  onBlur={handleBlur("password")}
                />
                {showSignup && (
                  <Input
                    label="Confirm password"
                    password={true}
                    onChange={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                    onBlur={handleBlur("confirmPassword")}
                    error={confirmPasswordError}
                  />
                )}
                <Button
                  title={showSignup ? "SignUp" : "SignIn"}
                  onPress={handleSubmit}
                />
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
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Login;
