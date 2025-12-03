import React from "react";
import { Image, Text, View } from "react-native";
import { avatarCardProps as Props } from "../types";
import { styles } from "./AvatarCardStyles";
import ProgressBar from "./ProgressBar";

export default function AvatarCard({ name, level, xp, xpMax, coin,  avatar }: Props) {
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
          progress={coin / coin}
          valueText={`${coin}`}
          styleFill={styles.fill}
        />

      </View>
    </View>
  );
}
