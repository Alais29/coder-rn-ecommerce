import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { ORDERS } from "../../data/orders";
import { getOrders } from "../../features/orders";
import OrderItem from "../../components/OrderItem";

const Orders = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const renderItem = (data) => {
    return <OrderItem item={data.item} />;
  };
  return (
    <View>
      {orders.length !== 0 && (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Orders;
