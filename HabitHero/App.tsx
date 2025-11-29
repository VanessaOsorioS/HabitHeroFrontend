import React from "react";
import { View, StatusBar, Text } from "react-native";
import MainLayout from "./src/shared/layouts/MainLayout";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
