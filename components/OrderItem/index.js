import { View, Text } from "react-native";
import React from "react";

import { styles } from "./styles";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>${item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
