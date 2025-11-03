import { Mission } from "../types/mission";
import { httpClient } from "./httpClient";

export const getMissions = async () => {
    const response = await httpClient.get<Mission[]>('mission');
    return response?.data;
}

export const completeMission = async (id: number) => {
    const response = await httpClient.post<{ xp: number; coins: number }>(`mission/complete/${id}`);
    return response?.data;
}