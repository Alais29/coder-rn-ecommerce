import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../../screens/Cart";
import { colors } from "../../../styles/colors";

const Stack = createNativeStackNavigator();

const CartStack = () => {
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
      }}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Carrito",
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
