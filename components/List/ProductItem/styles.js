import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    color: colors.primary,
    flex: 1,
    marginBottom: 15,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  price: {
    fontFamily: "Rubik",
  },
});
