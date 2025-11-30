import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "./AvatarCardStyles";
import ProgressBar from "./ProgressBar";
import { avatarCardProps as Props } from "../types";

export default function AvatarCard({ name, level, xp, xpMax, avatar }: Props) {
  const progress = xp / xpMax;

  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.info}>

        <View style={styles.namePill}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <ProgressBar
          progress={progress}
          valueText={`${xp}/${xpMax}`}
        />

        <View style={styles.levelRow}>
          <Text style={styles.levelLabel}>{level}</Text>
        </View>

        <ProgressBar
          icon={require("../../../assets/coin.png")} 
          valueText="200"
        />

      </View>
    </View>
  );
}
