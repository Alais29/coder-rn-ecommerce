import { Text, View, Image } from "react-native";
import React from "react";
import { getRandomNumber } from "../../../utils";

import { styles } from "./styles";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `${product.fotos}/50?random=${getRandomNumber(50)}` }}
      />
      <View>
        <Text style={styles.name}>{product.nombre}</Text>
        <Text style={styles.price}>${product.precio}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
