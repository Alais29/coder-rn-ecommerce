import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

import { styles } from "./styles";

const BackButton = ({ onPress }) => {
  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <AntDesign name="back" size={24} color="black" />
        <Text style={styles.backButtonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
