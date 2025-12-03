import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    borderRadius: 24,
  },
  treasureContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  treasureImage: {
    width: 500,
    height: 500,
  },
  cardContainer: {
    width: 450,
    backgroundColor: "#FFE8B7",
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  formContent: {
    paddingBottom: 12,
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    width: 130,
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    fontSize: 14,
  },

  dateContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  inputDate: {
    paddingRight: 28,
  },
  calendarIcon: {
    position: "absolute",
    right: 6,
    fontSize: 14,
  },

  inlineInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inlineInput: {
    flex: 0,
    width: 80,
  },
  inlineText: {
    marginLeft: 6,
    fontSize: 14,
  },

  selectInput: {
    flex: 1,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectPlaceholder: {
    fontSize: 14,
    color: "#8a8a8a",
  },
  selectArrow: {
    fontSize: 18,
    color: "#8a8a8a",
  },

  buttonContainer: {
    marginTop: 18,
    alignItems: "center",
  },
  button: {
    width: 220,
    height: 40,
    borderRadius: 999,
    backgroundColor: "#1F8AC0",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginLeft: 8,
    marginBottom: 4,
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

  successBox: {
    width: 280,
    backgroundColor: "#FFEBB7", // color cálido tipo pergamino
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

  successIcon: {
    fontSize: 50,
    marginBottom: 10,
  },

  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#5B3A09",
  },

  successMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 18,
    color: "#6B4B1F",
  },

  successButton: {
    backgroundColor: "#0099cc",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  successButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

});
