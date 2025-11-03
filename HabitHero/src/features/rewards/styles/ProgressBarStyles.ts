import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  container: {
    flex: 1,
    height: 10,
    backgroundColor: "rgba(248, 212, 131, 1)",
    borderRadius: 10,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: "rgba(68, 171, 216, 1)",
  },
  icon: {
    position: "absolute",
    marginLeft: -10,
    width: 32,
    height: 32,
    zIndex: 5, 
  }
});