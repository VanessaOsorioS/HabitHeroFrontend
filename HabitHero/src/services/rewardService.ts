import { Mission } from "../types/mission";
import { httpClient } from "./httpClient";

export const getAllRewards = async () => {
    const response = await httpClient.get<Mission[]>('reward');
    console.log('Reward fetched:', response.data);
    return response?.data;
}

export const getXpAndCoins = async () => {
    const response = await httpClient.get<Mission[]>('reward');
    console.log('Reward fetched:', response.data);
    return response?.data;
}