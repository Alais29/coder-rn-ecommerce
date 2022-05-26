import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../features/categories";
import { setProductsByCategory } from "../../features/products";
import Searcher from "../../components/Searcher/Searcher";
import List from "../../components/List/List";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") setFilteredItems(categories);
    else {
      const newItems = categories.filter((item) =>
        item.category.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredItems(newItems);
    }
  }, [input]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectCategory = (category) => {
    navigation.navigate("Products");
    dispatch(selectCategory(category));
    dispatch(setProductsByCategory(category.id));
  };

  return (
    <>
      <View style={styles.container}>
        <Searcher>
          <View style={styles.inputContainer}>
            <TextInput
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              style={styles.input}
              placeholder="Buscar categoría..."
              placeholderTextColor="#fff"
            />
          </View>
          <TouchableOpacity onPress={handleErase}>
            <Entypo name="erase" size={36} color="black" />
          </TouchableOpacity>
        </Searcher>
        <View>
          {filteredItems.length !== 0 ? (
            <List
              data={filteredItems}
              itemType="category"
              onPress={handleSelectCategory}
            />
          ) : (
            <Text style={styles.text}>
              No hay categorías que coincidan con tu búsqueda
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

export default Categories;
