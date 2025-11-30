import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./ProgressBarStyles";
import { ProgressBarProps } from "../types/ProgressBar";

export default function ProgressBar({
  progress,
  icon = require("../../../assets/libro.png"),
  valueText,
  containerStyle,
}: ProgressBarProps) {

  const hasProgress = typeof progress === "number";
  const pct = hasProgress ? Math.min(Math.max(progress!, 0), 1) : 1;

  return (
    <View style={styles.wrapper}>
      {icon && (
        <Image
          source={icon}
          style={styles.icon}
          resizeMode="contain"
        />
      )}

      <View style={[styles.container, containerStyle]}>
        {hasProgress && (
          <View style={[styles.fill, { width: `${pct * 100}%` }]} />
        )}

        {valueText && <Text style={styles.valueText}>{valueText}</Text>}
      </View>
    </View>
  );
}
