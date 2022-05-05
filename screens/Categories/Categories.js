import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { CATEGORIES } from "../../data/categories";
import Header from "../../components/Header/Header";
import Searcher from "../../components/Searcher/Searcher";
import List from "../../components/List/List";
import { styles } from "./styles";

const Categories = () => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(CATEGORIES);

  useEffect(() => {
    const newItems = CATEGORIES.filter((item) =>
      item.category.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredItems(newItems);
  }, [input]);

  return (
    <>
      <Header>Categorìas</Header>
      <View style={styles.container}>
        <Searcher>
          <View style={styles.inputContainer}>
            <TextInput
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              style={styles.input}
            />
          </View>
          <Text style={styles.text}>Escribe para filtrar por categorías</Text>
        </Searcher>
        <View>
          <List data={filteredItems} itemType="category" />
        </View>
      </View>
    </>
  );
};

export default Categories;
