import { View, Text } from "react-native";
import React from "react";

import { styles } from "./styles";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item }) => {
  const total = item.items.reduce((acc, product) => {
    const itemTotal = product.quantity * product.precio;
    return acc + itemTotal;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.order}>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        {item.items.map((product) => (
          <View style={styles.products}>
            <Text key={`${item.id}-${product.id}-name`}>
              - {product.nombre}
            </Text>
            <Text key={`${item.id}-${product.id}-price`}>
              ${product.precio}
            </Text>
          </View>
        ))}
        <Text style={styles.total}>${total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
