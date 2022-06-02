import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 6,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    color: colors.info,
    backgroundColor: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.tertiary,
    padding: 6,
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: 18,
    marginBottom: 6,
    color: "white",
  },
  error: {
    fontFamily: "Montserrat",
    fontSize: 12,
    marginBottom: 4,
    color: "red",
  },
});
