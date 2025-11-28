import React, { useState } from "react";
import RewardPages from "../features/rewards/pages/RewardPages";
import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";
import RegisterMission from "../features/missionRegistration/pages/RegisterMission";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>("rewards");

  return (
    <MainLayout onSelectMenuOption={setCurrentPage}>
      <RegisterMission/>
      {/* cuando tengas Avatar */}
      {/* {currentPage === "avatar" && <AvatarPage />} */}
    </MainLayout>
  );
}

