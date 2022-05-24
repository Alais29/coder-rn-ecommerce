import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import CartItem from "../../components/CartItem";
import { cart } from "../../data/cart";

import { styles } from "./styles";

const Cart = () => {
  const total = 12000;

  const handleDeleteItem = (id) =>
    console.log(`Se elimina del carrito el producto: ${id} `);
  const handleConfirm = () => console.log("Se confirma la compra");

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          renderItem={renderItem}
          data={cart}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
