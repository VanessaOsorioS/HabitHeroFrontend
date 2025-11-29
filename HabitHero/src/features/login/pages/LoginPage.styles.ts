import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E6A1", // color crema del mockup
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "80%",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5B2A06",
    opacity: 0.8,
  },
  text:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#5B2A06",
    marginBottom: 10,
    marginTop: 20,
  },

  formRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },

  label: {
    fontSize: 18,
    color: "#5B2A06",
    width: 100,
  },

  input: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: "white",
    height: 35,
    paddingHorizontal: 10,
    borderRadius: 4,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#4AA9DC", // azul del mockup
    paddingVertical: 12,
    width: 200,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
  },

  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
});
