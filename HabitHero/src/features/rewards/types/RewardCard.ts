import { ImageSourcePropType } from "react-native";

export type Reward = {
  id?: string | number;
  title: string;
  coins: number;
  image?: ImageSourcePropType;
};

export type RewardCardProps = {
  reward: Reward;
  onPress?: (r: Reward) => void;
  disabled?: boolean;
  testID?: string;
};
