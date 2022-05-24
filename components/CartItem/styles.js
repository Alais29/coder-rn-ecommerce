import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.info,
  },
  header: {
    fontSize: 18,
    fontFamily: "Rubik",
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "Rubik",
  },
});
