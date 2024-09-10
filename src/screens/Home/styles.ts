import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A4A9E",
    paddingHorizontal: 24,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 54,
    color: "#F2F2F2",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  listTitle: {
    marginTop: 34,
    marginBottom: 16,
    color: "#F2F2F2",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  emptyListText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    color: "#F2F2F2",
    fontWeight: "400",
  },
  subtitle: {
    color: "#F2F2F2",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input: {
    flex: 1,
    maxWidth: 345,
    height: 51,
    backgroundColor: "#F2F2F2",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 16,
    fontSize: 16,
  },
  button: {
    height: 51,
    width: 51,
    backgroundColor: "#31C667",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
