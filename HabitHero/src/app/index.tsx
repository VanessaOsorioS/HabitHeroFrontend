import React, { useState } from "react";
import RewardPages from "../features/rewards/pages/RewardPages";
import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";
import MissionsPage from "../features/missions/pages/MissionsPage";
import AvatarPage from "../features/avatar/pages/AvatarPage";
import LoginPage from "../features/login/pages/LoginPage";
import RegisterMissionScreen from "../features/missionRegistration/pages/RegisterMission";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption | "register-mission">("missions");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pages: Record<MenuOption | "register-mission", React.ReactNode> = {
    rewards: <RewardPages />,
    missions: (
      <MissionsPage 
        goToRegisterMission={() => setCurrentPage("register-mission")}
      />
    ),
    avatar: <AvatarPage />,
    "register-mission": <RegisterMissionScreen />,
  };

  if (!isLoggedIn) {
    return (
      <MainLayout showMenu={false}>
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      </MainLayout>
    );
  }
  
  return (
    <MainLayout
      showMenu={currentPage !== "register-mission"}
      onSelectMenuOption={setCurrentPage}
    >
      {pages[currentPage]}
    </MainLayout>
  );
}