import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Searcher from "../../components/Searcher/Searcher";
import List from "../../components/List/List";
import { PRODUCTS } from "../../data/products";

import { styles } from "./styles";

const Products = ({ route, navigation }) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);

  const { category } = route.params;

  useEffect(() => {
    const initialProducts = PRODUCTS.filter(
      (product) => product.categoria === category
    );
    setInitialProducts(initialProducts);
  }, []);

  useEffect(() => {
    if (initialProducts.length !== 0) {
      const newItems = initialProducts.filter((item) =>
        item.nombre.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredItems(newItems);
    }
  }, [input, initialProducts]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectProduct = (product) => {
    navigation.navigate("Details", { item: product.id, name: product.nombre });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoid}
      keyboardVerticalOffset={10}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Searcher>
            <View style={styles.inputContainer}>
              <TextInput
                value={input}
                onChangeText={setInput}
                keyboardType="default"
                style={styles.input}
                placeholder="Buscar producto..."
              />
            </View>
            <TouchableOpacity onPress={handleErase}>
              <Entypo name="erase" size={36} color="black" />
            </TouchableOpacity>
          </Searcher>
          <View style={styles.list}>
            {filteredItems.length !== 0 ? (
              <List
                data={filteredItems}
                itemType="products"
                onPress={handleSelectProduct}
              />
            ) : (
              <Text style={styles.text}>
                No hay artículos que coincidan con tu búsqueda
              </Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Products;
