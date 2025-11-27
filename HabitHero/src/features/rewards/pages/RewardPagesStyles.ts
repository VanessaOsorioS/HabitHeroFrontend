import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const RewardPagesStyles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 40,
    height: 40,
  },
  viewImg: {
    width: "35%"
  },
  panel: {
    width: 500,
    height: 600,
    alignSelf: "center",
    backgroundColor: "rgba(255, 235, 172, 1)",
    borderRadius: 16,
    padding: 20,
    margin: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4B2E05",
    marginBottom: 10,
  },
  row: {
    justifyContent: "space-between",
    margin: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4B2E05",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});