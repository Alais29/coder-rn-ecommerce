import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    backgroundColor: colors.secondary,
    margin: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
