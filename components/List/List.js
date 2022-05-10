import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import ProductItem from "./ProductItem/ProductItem";

const List = ({ data, itemType = "category", onPress }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        {itemType === "category" ? (
          <CategoryItem category={item} />
        ) : (
          <ProductItem product={item} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={itemType === "category" ? 2 : 1}
    />
  );
};

export default List;
