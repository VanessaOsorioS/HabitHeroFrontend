import { StyleSheet } from "react-native";

export const RewardPagesStyles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  panel: {
    width: "80%",            
    maxWidth: 900,
    backgroundColor: "rgba(255, 235, 172, 1)",
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4B2E05",
    marginTop: 16,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#4B2E05",
    marginBottom: 16,
  },

  row: {
    justifyContent: "space-between",
    marginVertical: 5,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#4B2E05",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
