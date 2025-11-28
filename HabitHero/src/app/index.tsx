import React, { useState } from "react";
import RewardPages from "../features/rewards/pages/RewardPages";
import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";
import MissionsPage from "../features/missions/pages/MissionsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>("rewards");

  const pages: Record<MenuOption, React.ReactNode> = {
    rewards: <RewardPages />,
    missions: <MissionsPage />,
    avatar: <></>
  };

  return (
    <MainLayout onSelectMenuOption={setCurrentPage}>
      {pages[currentPage]}
    </MainLayout>
  );
}

