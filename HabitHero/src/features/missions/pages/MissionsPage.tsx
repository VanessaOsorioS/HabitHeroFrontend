import { getMissions } from "@/src/services/missionsService";
import { Mission } from "@/src/types/mission";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View
} from "react-native";
import MissionCard from "../components/MissionCard";
import { styles } from "./MissionsPage.styles";

const MissionsPage: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        
     const missions = await getMissions();
        console.log("Missions loaded:", missions);
        setMissions(missions);
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
                {missions.length === 0 && (
                  <Text style={styles.title}>No tienes misiones pendientes por ahora.</Text>
                )}
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
