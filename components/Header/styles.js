import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontSize: 22,
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
});
