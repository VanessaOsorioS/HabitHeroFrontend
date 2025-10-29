import React, { memo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RewardCardStyles as styles } from "../styles/RewardCardStyles";
import { RewardCardProps} from "../types";

function RewardCard({ reward, onPress,testID }: RewardCardProps) {
  const source = require("../../../assets/trophy.png");

  return (
    <Pressable // componente que me permite detectar presiones, hace que la tarjeta sea interactiva y cambie de estilo cuando se presiona
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
        {reward.title}
      </Text>
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>{reward.coins}</Text>
        <Image
          source={require("../../../assets/coin.png")}
          style={styles.coinIcon}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
}

export default memo(RewardCard);

