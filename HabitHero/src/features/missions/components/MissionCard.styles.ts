import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: 610,
    minHeight: 70,
  },
  cardImage: {
    borderRadius: 10,
    opacity: 0.9,
  },
  completed: {
    opacity: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftIndicator: {
    width: 18,
    height: 18,
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxButton: {
    padding: 5,
    marginRight: 5,
  },
  title: {
    flex: 1,
    color: "#000",
    fontWeight: "bold",
  },
  stars: {
    flexDirection: "row",
    gap: 3,
  },
  expandedContent: {
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
    padding: 12,
  },
  description: {
    color: "#000",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 15,
    gap: 8,
  },
  greenDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#4CAF50",
  },
  date: {
    color: "#000",
    fontSize: 11,
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    fontWeight: "500",
  },
  rewardBoxWrapper: {
    alignItems: "center",
    width: "100%",
  },
  rewardBox: {
    borderWidth: 2,
    borderColor: "#8B6F47",
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "transparent",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "50%",
  },
  coinContainer: {
    position: "relative",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  coinBig: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  coinSmall: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -14 }, { translateY: -14 }],
    justifyContent: "center",
    alignItems: "center",
  },
  rewardTextContainer: {
    justifyContent: "center",
    flex: 1,
  },
  rewardLabel: {
    color: "#000",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 3,
  },
  rewardValue: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
});