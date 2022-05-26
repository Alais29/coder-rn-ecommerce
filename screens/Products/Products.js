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
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { setProductSelected } from "../../features/products";
import Searcher from "../../components/Searcher/Searcher";
import List from "../../components/List/List";

import { styles } from "./styles";

const Products = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const { productsByCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filteredItems.length === 0) setFilteredItems(productsByCategory);
    else {
      const newItems = productsByCategory.filter((item) =>
        item.nombre.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredItems(newItems);
    }
  }, [input, productsByCategory]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectProduct = (product) => {
    navigation.navigate("Details");
    dispatch(setProductSelected(product.id));
  };

  return (
    <>
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
                  placeholderTextColor="#fff"
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
    </>
  );
};

export default Products;
