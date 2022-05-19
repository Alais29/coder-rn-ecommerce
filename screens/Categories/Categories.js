import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { CATEGORIES } from "../../data/categories";
import Header from "../../components/Header/Header";
import Searcher from "../../components/Searcher/Searcher";
import List from "../../components/List/List";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(CATEGORIES);

  useEffect(() => {
    const newItems = CATEGORIES.filter((item) =>
      item.category.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredItems(newItems);
  }, [input]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectCategory = (category) => {
    navigation.navigate("Products", {
      category: category.id,
      name: category.category,
    });
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
