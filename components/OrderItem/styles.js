import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: colors.info,
    borderWidth: 1,
    borderRadius: 6,
    flex: 1,
  },
  order: {
    flex: 1,
  },
  date: {
    fontSize: 18,
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: {
    fontSize: 18,
    fontFamily: "Montserrat",
  },
});
