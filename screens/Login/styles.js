import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  content: {
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: colors.info,
    width: "60%",
  },
  formContainer: {
    marginBottom: 10,
  },
  bottomMessage: {
    alignItems: "center",
  },
  bottomMessageText: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: "Nunito",
    fontSize: 24,
    textAlign: "center",
  },
});
