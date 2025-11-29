import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    borderRadius: 24,
  },

  /* Panel del cofre */
  treasureContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  treasureImage: {
    width: 500,
    height: 500,
  },

  /* Card del formulario */
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

  /* Filas del formulario */
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
});
