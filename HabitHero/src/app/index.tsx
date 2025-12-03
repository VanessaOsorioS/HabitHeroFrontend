import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import AvatarPage from "../features/avatar/pages/AvatarPage";
import LoginPage from "../features/login/pages/LoginPage";
import RegisterMissionScreen from "../features/missionRegistration/pages/RegisterMission";
import MissionsPage from "../features/missions/pages/MissionsPage";
import RewardPages from "../features/rewards/pages/RewardPages";

import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";
import { User } from "../types/auth";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>("missions");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const [token] = await Promise.all([
          AsyncStorage.getItem("auth_token"),
        ]);

        if (token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error loading session:", error);
      } finally {
        setIsCheckingSession(false);
      }
    };

    loadSession();
  }, []);

  const handleLogin = async (token: string, loggedUser: User) => {
    try {
      await AsyncStorage.setItem("auth_token", token);
      await AsyncStorage.setItem("auth_user", JSON.stringify(loggedUser));
      setCurrentPage("missions");
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error saving session:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(["auth_token", "auth_user"]);
      setIsLoggedIn(false);
      setCurrentPage("login");
    } catch (error) {
      console.error("Error clearing session:", error);
    }
  };

  const pages: Record<MenuOption, React.ReactNode> = {
    rewards: <RewardPages />,
    missions: (
      <MissionsPage
        goToRegisterMission={() => setCurrentPage("register_mission")}
      />
    ),
    avatar: <AvatarPage />,
    register_mission: (
      <RegisterMissionScreen goBackToMissions={() => setCurrentPage("missions")} />
    ),
    login: <LoginPage onLogin={handleLogin} />,
  };

  if (!isLoggedIn) {
    return (
      <MainLayout showMenu={false}>
        <LoginPage onLogin={handleLogin} />
      </MainLayout>
    );
  }

  return (
    <MainLayout
      onSelectMenuOption={setCurrentPage}
      onLogout={handleLogout}
    >
      {pages[currentPage]}
    </MainLayout>
  );
}