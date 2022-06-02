import { View, Text, TextInput } from "react-native";
import React from "react";

import { styles } from "./styles";

const Input = ({ label, password = false, onChange, value, error = null }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        secureTextEntry={password}
        value={value}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;
