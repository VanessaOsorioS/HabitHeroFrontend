import React, { useState } from "react";
import { View } from "react-native";
import MissionsPage from "../features/missions/pages/MissionsPage";
import RewardPages from "../features/rewards/pages/RewardPages";


export default function App() {
  const [currentPage, setCurrentPage] = useState<"missions" | "rewards">("missions");

  return (
    <View style={{ flex: 1 }}>
      {currentPage === "missions" ? (
        <MissionsPage goToRewards={() => setCurrentPage("rewards")} />
      ) : (
        <RewardPages goToMissions={() => setCurrentPage("missions")} />
      )}
    </View>
  );
}
