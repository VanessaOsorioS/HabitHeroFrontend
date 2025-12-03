import { getAllRewards, getXpAndCoins } from "@/src/services/rewardService";
import { User } from "@/src/types/auth";
import { Reward } from "@/src/types/reward";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AvatarCard from "../components/AvatarCard";
import RewardCard from "../components/RewardCard";
import { RewardPagesStyles as styles } from "./RewardPagesStyles";

type Props = {
  goToMissions?: () => void;
};

export default function RewardsScreen({ goToMissions }: Props) {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [level, setLevel] = useState<number>(1);
  const [user, setUser] = useState<User>();
  const [xpAndCoins, setXpAndCoins] = useState<{ xp: number; coins: number }>({
    xp: 0,
    coins: 0,
  });

  const maxXp = 100;

  useEffect(() => {
    const fetchUser = async () => {
      const [user] = await Promise.all([
        AsyncStorage.getItem("auth_user"),
      ]);
      setUser(user ? JSON.parse(user) : null);
    }

    const fetchRewards = async () => {
      try {
        const reward = await getAllRewards();
        let xpAndCoins = await getXpAndCoins();
        const levelCalculated = Math.trunc(xpAndCoins.xp / maxXp);
        xpAndCoins = {
          ...xpAndCoins,
          xp: xpAndCoins.xp % maxXp,
        };
        setLevel(levelCalculated + 1);
        setRewards(reward);
        setXpAndCoins(xpAndCoins);
      } catch (error) {
        console.error("Error al cargar recompensas:", error);
      }
    };

    fetchUser();
    fetchRewards();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <AvatarCard
          name={user?.name || ""}
          level={`Nivel ${level}`}
          xp={xpAndCoins.xp}
          xpMax={maxXp}
          coin={xpAndCoins.coins}
          avatar={require("../../../assets/first-avatar.png")}
        />

        <Text style={styles.title}>Mis recompensas</Text>

        {rewards.length === 0 && (
          <Text style={styles.subtitle}>
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
          style={styles.list}
        />

        {goToMissions && (
          <TouchableOpacity style={styles.button} onPress={goToMissions}>
            <Text style={styles.buttonText}>Volver a Misiones</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}



