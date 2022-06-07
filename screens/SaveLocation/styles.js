import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.info,
  },
  image: {
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.secondary,
  },
});
