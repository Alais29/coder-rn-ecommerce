import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BackButton from "../../components/BackButton";

import { styles } from "./styles";

const ProductDetail = ({ route, navigation }) => {
  const [orientation, setOrientation] = useState("");
  const { height, width } = useWindowDimensions();

  const { item } = route.params;

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      {/* <BackButton onPress={handleBack} /> */}
      <View
        style={
          orientation === "portrait"
            ? styles.containerVertical
            : styles.containerHorizontal
        }
      >
        <Image
          source={{ uri: `${item.fotos}/200` }}
          style={styles.image}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.description}>{item.descripcion}</Text>
          <Text style={styles.price}>${item.precio}</Text>
        </View>
      </View>
    </>
  );
};

export default ProductDetail;
