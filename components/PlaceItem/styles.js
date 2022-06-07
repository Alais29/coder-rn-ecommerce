import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.info,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: colors.primary,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: "#777",
    fontSize: 16,
  },
});
