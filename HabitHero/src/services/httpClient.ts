import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

httpClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("auth_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.log("Token expirado o inválido, cerrando sesión...");
      AsyncStorage.multiRemove(["auth_token", "auth_user"]);      
    }
    return Promise.reject(error);
  }
);
