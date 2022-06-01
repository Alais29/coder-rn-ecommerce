import { View, Text, Image, useWindowDimensions, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { addItem } from "../../features/cart";

const ProductDetail = () => {
  const [orientation, setOrientation] = useState("");
  const { height, width } = useWindowDimensions();

  const { productSelected } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  const handleAddToCart = () => {
    dispatch(addItem(productSelected));
  };

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
          <Button onPress={handleAddToCart} title="Add to cart" />
        </View>
      )}
    </>
  );
};

export default ProductDetail;
