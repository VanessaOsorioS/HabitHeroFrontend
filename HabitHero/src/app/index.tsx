import React, { useState } from "react";
import RewardPages from "../features/rewards/pages/RewardPages";
import MainLayout from "../shared/layouts/MainLayout";
import { MenuOption } from "../shared/menu/MainMenu";

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>("rewards");

  return (
    <MainLayout onSelectMenuOption={setCurrentPage}>
      <RewardPages/>
      {/* cuando tengas Avatar */}
      {/* {currentPage === "avatar" && <AvatarPage />} */}
    </MainLayout>
  );
}

