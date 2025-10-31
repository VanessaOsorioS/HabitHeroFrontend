import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import MissionCard from "../components/MissionCard";

const missions = [
  { id: 1, title: "Leer capítulo 3 matemática.", stars: 3, completed: true },
  { id: 2, title: "Realizar las sumas.", stars: 3, completed: false },
  { id: 3, title: "Organizar escritorio.", stars: 4, completed: false },
];

export const MissionsPage: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../../assets/bg-wood.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}> {}
        <Text style={styles.title}>Mis misiones</Text>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {missions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,                   
    width: "100%",              
    height: "100%",             
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "90%",
    borderRadius: 15,
    padding: 20,
    flex: 1,                   
  },
  scrollContent: {
    flexGrow: 1,                
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default MissionsPage;