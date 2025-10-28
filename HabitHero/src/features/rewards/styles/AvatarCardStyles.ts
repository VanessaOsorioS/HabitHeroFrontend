import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF1CC",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B2E05",
    marginBottom: 6,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  level: {
    fontSize: 12,
    color: "#4B2E05",
  },
  xp: {
    fontSize: 12,
    color: "#4B2E05",
  },
});