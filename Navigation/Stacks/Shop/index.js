import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../../../screens/Categories/Categories";
import Products from "../../../screens/Products/Products";
import ProductDetail from "../../../screens/ProductDetail";
import { colors } from "../../../styles/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
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
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
