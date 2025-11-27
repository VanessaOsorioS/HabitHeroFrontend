// src/app/index.tsx
import React, { useState } from "react";
import { Text } from "react-native";
import MainLayout from "../shared/layouts/MainLayout";
import MissionsPage from "../features/missions/pages/MissionsPage";
import RewardPages from "../features/rewards/pages/RewardPages";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"missions" | "rewards">("missions");

  return (
    <MainLayout>
      <Text>Contenido</Text>
    </MainLayout>
  );
}

