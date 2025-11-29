import React, { useState } from "react";
import RewardPages from "../features/rewards/pages/RewardPages";
import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";
import MissionsPage from "../features/missions/pages/MissionsPage";
import AvatarPage from "../features/avatar/pages/AvatarPage";
import LoginPage from "../features/login/pages/LoginPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>("missions");

  const pages: Record<MenuOption, React.ReactNode> = {
    missions: <MissionsPage />,
    rewards: <RewardPages />,
    avatar: <AvatarPage/>,
  };

  return (
    <MainLayout onSelectMenuOption={setCurrentPage}>
      {pages[currentPage]}
    </MainLayout>
  );
}

