import React, { memo } from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";
import AvatarCard from "../components/AvatarCard";
import RewardCard from "../components/RewardCard";
const rewards = [
  { id: "1", title: "Leer capítulo 3 de matemática", coins: 20 },
  { id: "2", title: "Algo 1", coins: 20 },
  { id: "3", title: "Algo 2", coins: 20 },
  { id: "4", title: "Algo 3", coins: 40 },
  { id: "5", title: "Algo 4", coins: 5 },
  { id: "6", title: "Algo 5", coins: 20 },
  { id: "7", title: "Algo 6", coins: 20 },
  { id: "8", title: "Algo 7", coins: 1 },
];

export default function RewardsScreen() {
  return (
    <View style={styles.container}>
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RewardCard reward={item} />}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF6E4",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4B2E05",
    marginVertical: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
