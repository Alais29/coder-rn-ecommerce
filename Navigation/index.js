import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigatorLogged />
    </NavigationContainer>
  );
};

export default MainNavigation;
