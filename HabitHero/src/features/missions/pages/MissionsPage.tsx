import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import MissionCard from "../components/MissionCard";

const { width, height } = Dimensions.get("window");

type Mission = {
  id: number;
  title: string;
  stars: number;
  completed: boolean;
  description?: string;
  date?: string;
  reward?: number;
};

const MissionsPage: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);   

  
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        
        const mockData: Mission[] = [
          {
            id: 1,
            title: "Leer capítulo 3 matemática.",
            stars: 3,
            completed: true,
            description:
              "Lee el capítulo 3 del libro de matemáticas y realiza los ejercicios propuestos.",
            date: "18/10/2025",
            reward: 20,
          },
          {
            id: 2,
            title: "Realizar las sumas.",
            stars: 3,
            completed: false,
            description:
              "Completa todas las operaciones de suma del cuaderno número 2.",
            date: "20/10/2025",
            reward: 15,
          },
          {
            id: 3,
            title: "Organizar escritorio.",
            stars: 4,
            completed: false,
            description:
              "Limpia tu escritorio y organiza tus útiles escolares en orden.",
            date: "21/10/2025",
            reward: 10,
          },
        ];

        setMissions(mockData);
      } catch (error) {
        console.error("Error al cargar misiones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/missions-bg.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.panelWrapper}>
         ¿
          <View style={styles.borderOverlay} pointerEvents="none">
           
            <View style={[styles.cornerDot, styles.topLeft]} />
            <View style={[styles.cornerDot, styles.topRight]} />
            <View style={[styles.cornerDot, styles.bottomLeft]} />
            <View style={[styles.cornerDot, styles.bottomRight]} />
          </View>

          <ImageBackground
            source={require("../../../assets/wood-bg.jpg")}
            style={styles.panel}
            imageStyle={styles.panelImage}
            resizeMode="cover"
          >
            <Text style={styles.title}>Mis misiones</Text>

            {loading ? (
              <Text style={styles.loadingText}>Cargando misiones...</Text>
            ) : (
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                {missions.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} />
                ))}
              </ScrollView>
            )}
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MissionsPage;