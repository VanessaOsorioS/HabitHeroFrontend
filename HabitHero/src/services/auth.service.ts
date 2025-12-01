import { httpClient } from "./httpClient";
import { LoginRequest, LoginResponse } from "../types/auth";

export const login = async (data: LoginRequest) => {
  const response = await httpClient.post<LoginResponse>(
    "auth/login",
    data
  );

  return response?.data;
};
