import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    backgroundColor: "#F2F2F2",
    height: 44,
    paddingVertical: 12,
    paddingLeft: 12,
    borderRadius: 5,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#E23C44",
    padding: 10,
    height: 44,
    width: 44,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    color: "#262626",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
  },
});
