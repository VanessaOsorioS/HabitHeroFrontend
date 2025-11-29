import { Mission } from "./mission";

export interface Reward {
  id: number;
  rewardType: RewardType;
  value: number;
  description: string;
  missionId: number;
  mission: Mission;
}

export enum RewardType {
  XP = "XP",
  COIN = "COIN",
  BADGE = "BADGE",
  COLLECTABLE = "COLLECTABLE",
  TITLE = "TITLE",
}