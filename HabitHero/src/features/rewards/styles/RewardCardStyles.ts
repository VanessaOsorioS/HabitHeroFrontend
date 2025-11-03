import { StyleSheet } from "react-native";

const CARD_W = 90;
const CARD_H = 120;
const RADIUS  = 20;

export const RewardCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: RADIUS,
    width: CARD_W,
    height: CARD_H,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    boxShadow: "3px 4px 6px rgba(154, 49, 0, 0.39)",
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
  },
  coinText: { fontSize: 14, fontWeight: "bold", color: "rgba(81, 39, 9, 1)", marginRight: 4 },
  coinIcon: { width: 14, height: 14 },
});
