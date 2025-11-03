import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "../styles/AvatarCardStyles";
import ProgressBar from "./ProgressBar";
import { avatarCardProps as Props } from "../types";

export default function AvatarCard({ name, level, xp, xpMax, avatar }: Props) {
  const progress = xp / xpMax;

  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <ProgressBar progress={progress} />
        <View style={styles.row}>
          <Text style={styles.level}>{level}</Text>
          <Text style={styles.xp}>{`${xp}/${xpMax}`}</Text>
        </View>
      </View>
    </View>
  );
}
