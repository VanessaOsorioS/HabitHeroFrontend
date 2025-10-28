import { StyleSheet } from "react-native";

const CARD_W = 100;
const CARD_H = 130;
const RADIUS  = 12;

export const RewardCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: RADIUS,
    width: CARD_W,
    height: CARD_H,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  cardPressed: { opacity: 0.9 },
  cardDisabled: { opacity: 0.5 },
  icon: { width: 45, height: 45, marginBottom: 6 },
  title: {
    fontSize: 12,
    textAlign: "center",
    color: "#4B2E05",
    fontWeight: "600",
    marginBottom: 4,
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    // evita gap por compatibilidad
  },
  coinText: { fontSize: 14, fontWeight: "bold", color: "#E9A100", marginRight: 4 },
  coinIcon: { width: 14, height: 14 },
});
