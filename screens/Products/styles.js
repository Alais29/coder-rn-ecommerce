import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  input: {
    height: 50,
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "70%",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  keyboardAvoid: {
    flex: 1,
    width: "100%",
  },
});
