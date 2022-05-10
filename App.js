import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Categories from "./screens/Categories/Categories";
import Products from "./screens/Products/Products";

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);

  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const handleCategory = (category) => {
    setCategorySelected(category);
  };

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <Products category={categorySelected} handleCategory={handleCategory} />
      ) : (
        <Categories handleCategory={handleCategory} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
