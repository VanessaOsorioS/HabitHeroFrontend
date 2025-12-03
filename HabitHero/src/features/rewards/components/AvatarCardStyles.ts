import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
  },

  avatar: {
    width: 110,
    height: 160,
    borderRadius: 12,
    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  /* --- Nombre en pastilla naranja --- */
  namePill: {
    backgroundColor: "#FFA726",
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 12,
  },
  nameText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },

  /* --- Fila nivel + xp --- */
  levelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 12,
  },
  levelLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  xpText: {
    fontSize: 14,
    fontWeight: "600",
  },
  
  fill: {
    height: "100%",
    backgroundColor: "#facd58",
    textAlign: "center",
  },
});