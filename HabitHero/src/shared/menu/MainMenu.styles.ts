import { StyleSheet } from "react-native";

export const MainMenuStyles = StyleSheet.create({
  wrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  menuContainer: {
    position: "absolute",
    top: 80,
    backgroundColor: "rgba(255, 235, 172, 1)",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#4B2E05",
    minWidth: 230,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },

  menuIcon: {
    marginRight: 8,
  },

  menuText: {
    fontSize: 16,
    color: "#4B2E05",
    fontWeight: "500",
  },

  menuDivider: {
    height: 1,
    backgroundColor: "#D0B886",
    marginVertical: 4,
  },
});
