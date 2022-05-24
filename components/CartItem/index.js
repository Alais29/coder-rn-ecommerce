import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.nombre}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>Precio: {item.precio}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
