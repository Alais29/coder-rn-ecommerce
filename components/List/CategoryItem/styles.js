import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../styles/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    maxWidth: windowWidth * 0.4,
    width: 150,
    maxHeight: windowWidth * 0.4,
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
