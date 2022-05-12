import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerVertical: {
    padding: 20,
    alignItems: "center",
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 0.8 * Dimensions.get("window").width,
    height: 300,
    borderRadius: 30,
  },
  description: {
    marginTop: 20,
    fontSize: 20,
  },
  price: {
    fontSize: 18,
    marginTop: 15,
  },
});
