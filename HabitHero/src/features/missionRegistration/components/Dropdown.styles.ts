import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overlay: {
    flex: 1,
  },
  inputText: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
    marginRight: 8,
  },
  placeholderText: {
    color: "#8a8a8a",
  },
  arrow: {
    fontSize: 16,
    color: "#8a8a8a",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: 250,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
  },
});