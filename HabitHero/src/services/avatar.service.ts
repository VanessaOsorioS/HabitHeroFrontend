import { httpClient } from "./httpClient";
import {
  Avatar,
  GetAvatarResponse,
  UpdateAvatarRequest,
  UpdateAvatarResponse,
  InitAvatarResponse,
} from "../types/avatar";

export const avatarService = {
  getAvatar: async (userId: number) => {
    const response = await httpClient.get<GetAvatarResponse>(
      `avatar/${userId}`
    );
    return response.data.data;
  },

  updateAvatar: async (userId: Number, data: UpdateAvatarRequest) => {
    const response = await httpClient.put<UpdateAvatarResponse>(
      `avatar/${userId}`,
      data
    );
    return response.data.data;
  },

  initAvatar: async (userId: Number) => {
    const response = await httpClient.post<InitAvatarResponse>(
      `avatar/init/${userId}`
    );
    return response.data.data;
  },
};
