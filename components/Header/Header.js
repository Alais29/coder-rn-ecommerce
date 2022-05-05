import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

const Header = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Header;
