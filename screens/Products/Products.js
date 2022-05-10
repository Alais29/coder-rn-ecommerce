import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Button, Text } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header/Header";
import Searcher from "../../components/Searcher/Searcher";
import List from "../../components/List/List";
import { PRODUCTS } from "../../data/products";

import { styles } from "./styles";

const Products = ({
  category = { id: 1, category: "Ropa" },
  handleCategory,
}) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);

  useEffect(() => {
    const initialProducts = PRODUCTS.filter(
      (product) => product.categoria === category.id
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

  return (
    <>
      <Header title={category.category} />
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => handleCategory(null)}
            style={styles.backButton}
          >
            <AntDesign name="back" size={24} color="black" />
            <Text style={styles.backButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
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
            <List data={filteredItems} itemType="products" onPress={() => {}} />
          ) : (
            <Text style={styles.text}>
              No hay artículos que coincidan con tu búsqueda
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

export default Products;
