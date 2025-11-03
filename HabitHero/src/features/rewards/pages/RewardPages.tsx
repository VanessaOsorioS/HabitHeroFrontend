import { getAllRewards, getXpAndCoins } from "@/src/services/rewardService";
import { Reward } from "@/src/types/reward";
import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import AvatarCard from "../components/AvatarCard";
import RewardCard from "../components/RewardCard";

export default function RewardsScreen() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [xpAndCoins, setXpAndCoins] = useState<{ xp: number; coins: number }>({ xp: 0, coins: 0 });

  const maxXp = 1000;
  useEffect(() => {
    const fetchRewars = async () => {
      try {

        const reward = await getAllRewards();
        const xpAndCoins = await getXpAndCoins();
        setRewards(reward);
        setXpAndCoins(xpAndCoins);
      } catch (error) {
        console.error("Error al cargar recompensas:", error);
      }
    };

    fetchRewars();
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/forest3.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >
      <view style={styles.viewImg}>
        <ImageBackground source={require("../../../assets/backTree.png")} style={styles.bgImage}
          imageStyle={styles.panelImage}
        >
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
              <Text style={styles.title}>Aún no tienes recompensas registradas</Text>
            )}
            <FlatList
              data={rewards}
              keyExtractor={(item) => (item?.id ?? '').toString()}
              renderItem={({ item }) => <RewardCard reward={item} />}
              numColumns={4}
              columnWrapperStyle={styles.row}
              contentContainerStyle={{ paddingBottom: 24 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </view>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // fondo de pantalla
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: 700,
    height: 700,
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  viewImg: {

  },

  panelImage: {
    opacity: 0.75,
    borderRadius: 16,
  },

  panel: {
    width: 500,
    height: 600,
    alignSelf: "center",
    backgroundColor: "rgba(255, 235, 172, 1)",
    borderRadius: 16,
    padding: 20,
    margin: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4B2E05",
    marginBottom: 10,
  },

  row: {
    justifyContent: "space-between",
    margin: 5,
  },
});

