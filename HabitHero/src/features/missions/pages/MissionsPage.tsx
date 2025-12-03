import { missionService } from "@/src/services/missionsService";
import { CompleteMissionResponse, Mission } from "@/src/types/mission";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MissionCard from "../components/MissionCard";
import { styles } from "./MissionsPage.styles";

type Props = {
  goToAvatar?: () => void;
  goToRegisterMission?: () => void;
};

const MissionsPage: React.FC<Props> = ({ goToRegisterMission }) => {
  const [showRewards, setShowRewards] = useState(false);
  const [rewards, setRewards] = useState<CompleteMissionResponse>();
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);

  const coinSource = require("../../../assets/coin.png");
  const bookSource = require("../../../assets/libro.png");

  const fetchMissions = async () => {
    try {
      const missions = await missionService.getPendingMissions(); 
      setMissions(missions); 
      console.log("Missions loaded:", missions);
    } catch (error) {
      console.error("Error al cargar misiones:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (id: number) => {
    try {
      setLoading(true);
      const updateMission = await missionService.completeMission(id);
      console.log("Mission completed, rewards:", updateMission);
      if (updateMission) {
        setRewards(updateMission);
        setShowRewards(true);
      }
      console.log("Missions updated:", missions);

    } catch (error) {
      console.error("Error completing mission:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleReward = async () => {
    await fetchMissions();
    setShowRewards(false);
  }

  useEffect(() => {
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
            <MissionCard key={mission.id} mission={mission} onComplete={() => handleComplete(mission.id)} />
          ))}
        </ScrollView>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToRegisterMission}>
          <Text style={styles.buttonText}>Registrar Misión</Text>
        </TouchableOpacity>
      </View>

      {showRewards && (
        <View style={styles.successOverlay}>
          <View style={styles.rewardsBox}>
            <Text style={styles.rewardsTitle}>🎉 ¡Recompensas obtenidas! 🎉</Text>

            <View style={styles.rewardsRow}>
              <Image source={coinSource} style={styles.rewardIcon} />
              <Text style={styles.rewardText}>{rewards?.coins} monedas</Text>
            </View>

            <View style={styles.rewardsRow}>
              <Image source={bookSource} style={styles.rewardIcon} />
              <Text style={styles.rewardText}>{rewards?.xp} XP</Text>
            </View>

            <TouchableOpacity
              style={styles.successButton}
              onPress={handleReward}
            >
              <Text style={styles.successButtonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
};

export default MissionsPage;