import { getAllRewards, getXpAndCoins } from "@/src/services/rewardService";
import { Reward } from "@/src/types/reward";
import React, { useEffect, useState } from "react";
import { RewardPagesStyles as styles } from "./RewardPagesStyles";
import {
  FlatList,
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AvatarCard from "../components/AvatarCard";
import RewardCard from "../components/RewardCard";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  goToMissions?: () => void;
};

export default function RewardsScreen({ goToMissions }: Props) {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [xpAndCoins, setXpAndCoins] = useState<{ xp: number; coins: number }>({
    xp: 0,
    coins: 0,
  });

  const maxXp = 1000;

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const reward = await getAllRewards();
        const xpAndCoins = await getXpAndCoins();
        setRewards(reward);
        setXpAndCoins(xpAndCoins);
      } catch (error) {
        console.error("Error al cargar recompensas:", error);
      }
    };

    fetchRewards();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/forest3.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.viewImg}>
            <View style={styles.panel}>
              <AvatarCard
                name="Mariana Lopez"
                level="Nivel 1 - Novato"
                xp={xpAndCoins.xp}
                xpMax={maxXp}
                avatar={require("../../../assets/avatar.png")}
              />

              <Text style={styles.title}>Mis recompensas</Text>

              {rewards.length === 0 && (
                <Text style={styles.title}>
                  Aún no tienes recompensas registradas
                </Text>
              )}

              <FlatList
                data={rewards}
                keyExtractor={(item) => (item?.id ?? "").toString()}
                renderItem={({ item }) => <RewardCard reward={item} />}
                numColumns={4}
                columnWrapperStyle={styles.row}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator={false}
              />


              {goToMissions && (
                <TouchableOpacity style={styles.button} onPress={goToMissions}>
                  <Text style={styles.buttonText}>Volver a Misiones</Text>
                </TouchableOpacity>
              )}
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}


