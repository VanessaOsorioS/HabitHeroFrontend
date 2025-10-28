import React from "react";
import { View, StatusBar } from "react-native";
import RewardsScreen from "../features/rewards/pages/RewardPages";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <RewardsScreen />
    </View>
  );
}
