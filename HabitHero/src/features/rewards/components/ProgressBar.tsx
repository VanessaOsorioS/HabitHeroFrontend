import React from "react";
import { View } from "react-native";
import { styles } from "../styles/ProgressBarStyles";

export default function ProgressBar({ progress }: { progress: number }) {
  const pct = Math.min(Math.max(progress, 0), 1);
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${pct * 100}%` }]} />
    </View>
  );
}
