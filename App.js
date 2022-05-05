import { StyleSheet, View } from "react-native";
import Categories from "./screens/Categories/Categories";

export default function App() {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
