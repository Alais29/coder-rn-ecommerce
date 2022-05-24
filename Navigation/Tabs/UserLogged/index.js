import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartStack from "../../Stacks/Cart";
import ShopNavigator from "../../Stacks/Shop";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import OrderStack from "../../Stacks/Orders";

import { styles } from "./styles";

const BottomTabs = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="shop" size={24} color="black" />
                <Text>Shop</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="shopping-cart" size={24} color="black" />
                <Text>Cart</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="list" size={24} color="black" />
                <Text>Cart</Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigatorLogged;
