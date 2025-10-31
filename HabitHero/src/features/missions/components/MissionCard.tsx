import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Star } from "lucide-react-native";

interface Mission {
  id: number;
  title: string;
  stars: number;
  completed: boolean;
}

interface MissionCardProps {
  mission: Mission;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  return (
    <View style={[styles.card, mission.completed && styles.completedCard]}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          { backgroundColor: mission.completed ? "#5E8C31" : "#5E3A1B" },
        ]}
      />
      <Text style={styles.text}>{mission.title}</Text>
      <View style={styles.stars}>
        {Array.from({ length: mission.stars }).map((_, i) => (
          <Star key={i} size={18} color="#FFD700" fill="#FFD700" />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  completedCard: {
    opacity: 0.8,
    backgroundColor: "rgba(94, 140, 49, 0.4)",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  stars: {
    flexDirection: "row",
    gap: 2,
  },
});

export default MissionCard;
