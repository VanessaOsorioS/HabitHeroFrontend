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
    width: 250,
    maxHeight: 250,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  optionText: {
    fontSize: 14,
    color: "#333333",
  },
});