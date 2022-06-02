import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../../screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Auth"
        component={Login}
        options={{
          title: "Auth",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
