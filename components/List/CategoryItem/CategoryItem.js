import { Text, View, ImageBackground } from "react-native";
import React from "react";
import { getRandomNumber } from "../../../utils";

import { styles } from "./styles";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `${category.image}/150?random=${getRandomNumber(10)}` }}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <Text style={styles.text}>{category.category}</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryItem;
