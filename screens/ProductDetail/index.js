import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const ProductDetail = ({ navigation }) => {
  const [orientation, setOrientation] = useState("");
  const { height, width } = useWindowDimensions();

  const { productSelected } = useSelector((state) => state.products);

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  return (
    <>
      {Object.values(productSelected).length !== 0 && (
        <View
          style={
            orientation === "portrait"
              ? styles.containerVertical
              : styles.containerHorizontal
          }
        >
          <Image
            source={{ uri: `${productSelected.fotos}/200` }}
            style={styles.image}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.description}>
              {productSelected.descripcion}
            </Text>
            <Text style={styles.price}>${productSelected.precio}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default ProductDetail;
