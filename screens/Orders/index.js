import { View, FlatList } from "react-native";
import React from "react";
import { ORDERS } from "../../data/orders";
import OrderItem from "../../components/OrderItem";

const Orders = () => {
  const renderItem = (data) => {
    return <OrderItem item={data.item} />;
  };
  return (
    <View>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Orders;
