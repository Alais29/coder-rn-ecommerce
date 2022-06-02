import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";
import AuthStack from "./Stacks/Auth/index";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {user.userID ? <TabNavigatorLogged /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
