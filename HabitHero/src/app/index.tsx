import React, { useState } from "react";
import { View } from "react-native";

import MissionsPage from "../features/missions/pages/MissionsPage";
import RewardPages from "../features/rewards/pages/RewardPages";
import AvatarPage from "../features/avatar/pages/AvatarPage"; // Avatar

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "avatar" | "missions" | "rewards"
  >("avatar"); // Inicia en AvatarPage

  return (
    <View style={{ flex: 1 }}>
      
      {/* ⭐ AVATAR PAGE */}
      {currentPage === "avatar" && (
        <AvatarPage
          goToMissions={() => setCurrentPage("missions")}
          goToRewards={() => setCurrentPage("rewards")}
        />
      )}

      {/* ⭐ MISSIONS PAGE */}
      {currentPage === "missions" && (
        <MissionsPage
          goToRewards={() => setCurrentPage("rewards")}
          goToAvatar={() => setCurrentPage("avatar")}
        />
      )}

      {/* ⭐ REWARDS PAGE */}
      {currentPage === "rewards" && (
        <RewardPages
          goToMissions={() => setCurrentPage("missions")}
          goToAvatar={() => setCurrentPage("avatar")}
        />
      )}

    </View>
  );
}
