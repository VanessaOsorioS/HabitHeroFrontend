import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  panelWrapper: {
    width: width * 0.5,
    height: height * 0.9,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  borderOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 60,
    borderColor: "rgba(39, 35, 35, 0.6)",
    borderRadius: 5,
    zIndex: 2,
  },
  cornerDot: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#fff",
    borderWidth: 2.5,
    borderColor: "rgba(0,0,0,0.25)",
    zIndex: 3,
  },
  topLeft: { top: -44, left: -44 },
  topRight: { top: -44, right: -44 },
  bottomLeft: { bottom: -44, left: -44 },
  bottomRight: { bottom: -44, right: -44 },
  panel: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 35,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 25,
  },
  panelImage: { borderRadius: 5, opacity: 0.95 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  scrollContent: { width: "100%", paddingBottom: 10 },
  loadingText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#f4a261",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  rewardsBox: {
    width: 280,
    backgroundColor: "#FFEBB7",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  rewardsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#5B3A09",
    textAlign: "center",
  },

  rewardsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },

  rewardIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  rewardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6B4B1F",
  },
  successOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  successButton: {
    backgroundColor: "#0099cc",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginTop: 15,
  },

  successButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

});