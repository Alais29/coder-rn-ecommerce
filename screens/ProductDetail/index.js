import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../data/products";

import { styles } from "./styles";

const ProductDetail = ({ route, navigation }) => {
  const [orientation, setOrientation] = useState("");
  const { height, width } = useWindowDimensions();
  const [product, setProduct] = useState({});

  const { item } = route.params;

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  useEffect(() => {
    const newProduct = PRODUCTS.find((product) => product.id === item);
    setProduct(newProduct);
  }, [item]);

  return (
    <>
      {Object.values(product).length !== 0 && (
        <View
          style={
            orientation === "portrait"
              ? styles.containerVertical
              : styles.containerHorizontal
          }
        >
          <Image
            source={{ uri: `${product.fotos}/200` }}
            style={styles.image}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.description}>{product.descripcion}</Text>
            <Text style={styles.price}>${product.precio}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default ProductDetail;
