import { getMissions } from "@/src/services/missionsService";
import { Mission } from "@/src/types/mission";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import MissionCard from "../components/MissionCard";
import { styles } from "./MissionsPage.styles";

type Props = {
  goToRewards?: () => void;
  goToAvatar?: () => void;
};

const MissionsPage: React.FC<Props> = ({ goToRewards }) => {
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
      
        

          
            <Text style={styles.title}>Mis misiones</Text>

            {loading ? (
              <Text style={styles.loadingText}>Cargando misiones...</Text>
            ) : (
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                {missions.length === 0 && (
                  <Text style={styles.title}>
                    No tienes misiones pendientes por ahora.
                  </Text>
                )}
                {missions.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} />
                ))}
              </ScrollView>
            )}
            <TouchableOpacity style={styles.button} onPress={goToRewards}>
              <Text style={styles.buttonText}>Ver Recompensas</Text>
            </TouchableOpacity>
        </View>
      
    
  );
};

export default MissionsPage;
