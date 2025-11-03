import { Reward } from "@/src/types/reward";

export type RewardCardProps = {
  reward: Reward;
  onPress?: (r: Reward) => void;
  disabled?: boolean;
  testID?: string;
};
