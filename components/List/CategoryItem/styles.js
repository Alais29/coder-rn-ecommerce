import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: colors.secondary,
    margin: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    backgroundColor: colors.secondary,
    width: "100%",
    marginBottom: 15,
    paddingRight: 15,
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
