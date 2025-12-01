import {
  CompleteMissionResponse,
  CreateMissionRequest,
  CreateMissionResponse,
  GetMissionsResponse,
  GetPendingMissionsResponse
} from "../types/mission";

import { httpClient } from "./httpClient";

export const missionService = {
  getMissions: async () => {
    const response = await httpClient.get<GetMissionsResponse>("mission");
    return response.data.data;
  },

  getPendingMissions: async () => {
    const response = await httpClient.get<GetPendingMissionsResponse>(
      "mission/pending"
    );
    return response.data.data;
  },

  createMission: async (data: CreateMissionRequest) => {
    const response = await httpClient.post<CreateMissionResponse>(
      "mission",
      data
    );
    return response;
  },

  completeMission: async (missionId: number) => {
    const response = await httpClient.post<CompleteMissionResponse>(
      `mission/complete/${missionId}`
    );
    return response.data; // { xp, coins }
  },
};
