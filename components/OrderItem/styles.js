import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: colors.info,
    borderWidth: 1,
    borderRadius: 6,
  },
  date: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
    fontFamily: "Montserrat",
  },
});
