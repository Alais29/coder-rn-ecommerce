import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmPurchaseAsync, emptyCart } from "../../features/cart";
import CartItem from "../../components/CartItem";

import { styles } from "./styles";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const total = products.reduce((acc, product) => {
    const productTotal = product.quantity * product.precio;
    return acc + productTotal;
  }, 0);

  const handleDeleteItem = (id) =>
    console.log(`Se elimina del carrito el producto: ${id} `);

  const handleConfirm = () => {
    dispatch(confirmPurchaseAsync(products));
    dispatch(emptyCart());
  };

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          renderItem={renderItem}
          data={products}
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
