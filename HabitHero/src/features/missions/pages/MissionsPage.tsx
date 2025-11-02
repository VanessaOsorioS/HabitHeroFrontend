import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import MissionCard from "../components/MissionCard";
import { styles } from "./MissionsPage.styles";


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



export default MissionsPage;
