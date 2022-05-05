import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Searcher = ({ children, customStyle = {} }) => {
  return (
    <View style={[styles.searcherContainer, customStyle]}>{children}</View>
  );
};

export default Searcher;
