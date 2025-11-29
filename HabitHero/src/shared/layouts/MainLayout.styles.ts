import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const MainLayoutStyles = StyleSheet.create({
  container: { flex: 1 },

  background: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },

  panelWrapper: {
    width: "auto",
    height: "90%",
    minWidth: "50%",
  },

  panel: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },

  panelImage: {
    opacity: 0.75,
    borderRadius: 16,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  menuAbsolute: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    zIndex: 9999,
  }

});
