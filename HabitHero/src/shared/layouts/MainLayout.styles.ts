import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const MainLayoutStyles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  Image: {
    width: 40,
    height: 40,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  viewImg: {
    width: "35%"
  },
  panelImage: {
    opacity: 0.75,
    borderRadius: 16,
  },
  row: {
    justifyContent: "space-between",
    margin: 5,
  },
});