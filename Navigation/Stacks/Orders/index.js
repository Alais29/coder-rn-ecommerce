import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogOutBtn from "../../../components/LogOutButton";
import Orders from "../../../screens/Orders";
import { colors } from "../../../styles/colors";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Nunito",
          fontSize: 25,
        },
        headerTitleAlign: "center",
        headerRight: () => <LogOutBtn />,
      }}
    >
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          title: "Orders",
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
