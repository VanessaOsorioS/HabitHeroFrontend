import React from "react";
import { View, StatusBar } from "react-native";
import MissionsPage from "./src/features/missions/pages/MissionsPage";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <MissionsPage />
    </View>
  );
}
