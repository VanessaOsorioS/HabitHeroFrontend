import { Mission } from "../types/mission";
import { httpClient } from "./httpClient";

export const getMissions = async () => {
    const response = await httpClient.get<Mission[]>('mission');
    return response?.data;
}