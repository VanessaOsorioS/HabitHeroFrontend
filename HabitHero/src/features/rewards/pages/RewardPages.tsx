import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";
import AvatarCard from "../components/AvatarCard";
import RewardCard from "../components/RewardCard";
import { getAllRewards } from "@/src/services/rewardService";
import { Reward } from "../types";

export default function RewardsScreen() {
const [rewards, setRewards] = useState<Reward[]>([]);
    useEffect(() => {
      const fetchMissions = async () => {
        try {
          
       const reward = await getAllRewards();
          setRewards(reward);
        } catch (error) {
          console.error("Error al cargar recompensas:", error);
        }
      };
  
      fetchMissions();
    }, []);
    
  return (
    <ImageBackground
      source={require("../../../assets/forest3.jpg")}
      style={styles.bg}                // ✅ llena la pantalla
      resizeMode="cover"               // ✅ que cubra sin deformar
    >
      <view style={styles.viewImg}>
      <ImageBackground source={require("../../../assets/backTree.png")} style={styles.bgImage}
      imageStyle={styles.panelImage}
      >
      <View style={styles.panel}>
        <AvatarCard
          name="Mariana Lopez"
          level="Nivel 1 - Novato"
          xp={5}
          xpMax={10}
          avatar={require("../../../assets/avatar.png")}
        />

        <Text style={styles.title}>Mis recompensas</Text>

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
    justifyContent: "center", // centra verticalmente
    alignItems: "center",     // centra horizontalmente
  },
  bgImage: {
    width: 700,
    height: 700,
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  viewImg:{
    
  },

  panelImage: {
    opacity: 0.75,              // ← madera suave (ajusta 0..1)
    borderRadius: 16,           // ← mismo radio que el panel
  },
  // Panel central sin medidas fijas
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

  // Espacia las columnas de 3 en 3
  row: {
    justifyContent: "space-between",
    margin: 5,
  },
});

