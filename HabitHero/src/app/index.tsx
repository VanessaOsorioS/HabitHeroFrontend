import React, { useState } from "react";
import RewardPages from "../features/rewards/pages/RewardPages";
import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";
import RegisterMission from "../features/missionRegistration/pages/RegisterMission";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>("rewards");

  const pages: Record<MenuOption, React.ReactNode> = {
    rewards: <RewardPages />,
    missions: <RegisterMission />,
    avatar: <></>
  };

  return (
    <MainLayout onSelectMenuOption={setCurrentPage}>
      {pages[currentPage]}
    </MainLayout>
  );
}

