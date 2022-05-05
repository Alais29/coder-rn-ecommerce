import { Text, View } from "react-native";
import React from "react";

import { styles } from "./styles";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  );
};

export default CategoryItem;
