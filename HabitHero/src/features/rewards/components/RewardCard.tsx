import { RewardType } from "@/src/types/reward";
import React, { memo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RewardCardStyles as styles } from "./RewardCardStyles";
import { RewardCardProps } from "../types";

function RewardCard({ reward, onPress, testID }: RewardCardProps) {
  const source = require("../../../assets/trophy.png");
  const coinSource = require("../../../assets/coin.png");
  const bookSource = require("../../../assets/libro.png");

  return (
    <Pressable
      onPress={() => onPress?.(reward)}
    style={({ pressed }) => [
    styles.card,
    pressed && styles.cardPressed,
      ]}
      hitSlop={8}
      testID={testID ?? "reward-card"}
    >
      <Image source={source} style={styles.icon} resizeMode="contain" />
      <Text style={styles.title} numberOfLines={2}>
        {reward.mission.title}
      </Text>
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>{reward.value}</Text>
        <Image
          source={reward.rewardType === RewardType.XP ? bookSource : 
            reward.rewardType === RewardType.COIN ? coinSource : ""}
          style={styles.coinIcon}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
}

export default memo(RewardCard);

