import { CompleteMissionResponse } from "../types/mission";
import { Reward } from "../types/reward";
import { httpClient } from "./httpClient";

export const getAllRewards = async () => {
    const response = await httpClient.get<Reward[]>('reward');
    return response?.data;
}

export const getXpAndCoins = async () => {
    const response = await httpClient.get<CompleteMissionResponse>('reward/coin-xp');
    return response?.data;
}