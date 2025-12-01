import { Mission } from "../types/mission";
import { httpClient } from "./httpClient";

export const getMissions = async () => {
  const response = await httpClient.get<{ data: Mission[] }>('mission');
  return response.data.data;
};

export const getPendingMissions = async () => {
  const response = await httpClient.get<{ data: Mission[] }>('mission/pending');
  return response.data.data;
};

export const createMission = async (mission: any) => {
  const response = await httpClient.post<{ data: Mission }>('mission', mission);
  return response.data.data;
};

export const completeMission = async (missionId: number) => {
  const response = await httpClient.post<{ xp: number; coins: number }>(
    `mission/complete/${missionId}`
  );
  return response.data; // XP y Coins
};
