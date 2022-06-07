import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

import { styles } from "./styles";

const PlaceItem = ({ onSelect, title, image, address }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
