import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  searcherContainer: {
    backgroundColor: colors.tertiary,
    flexDirection: "row",
    width: "90%",
    // height: 120,
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 12,
  },
});
