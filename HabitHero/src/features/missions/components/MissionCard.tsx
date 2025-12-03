import { Mission } from "@/src/types/mission";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./MissionCard.styles";

type Props = {
  mission: Mission;
  onComplete?: (missionId: number) => void;
};

const MissionCard: React.FC<Props> = ({ mission, onComplete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    
    Animated.timing(animation, {
      toValue: expanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 250], 
  });

  const handlePress = () => {
    
    setExpanded(!expanded);
  };

  const toggleCheckbox = () => {
    console.log("Checkbox toggled:", !isCompleted);
    setIsCompleted(!isCompleted);
    onComplete?.(mission.id);
  };

  return (
    <Animated.View style={[styles.cardContainer, { height: heightInterpolate }]}>
      <ImageBackground
        source={require("../../../assets/leaf-bg.jpg")} 
        imageStyle={styles.cardImage}
        style={[styles.card, isCompleted && styles.completed]}
      >
        <View style={styles.header}>
          
          <TouchableOpacity 
            onPress={toggleCheckbox}
            style={styles.checkboxButton}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.leftIndicator,
                isCompleted 
                  ? { backgroundColor: "#4CAF50", borderColor: "#3D2817", borderWidth: 3 }
                  : { backgroundColor: "#8B6F47", borderColor: "#3D2817", borderWidth: 2 }
              ]}
            >
              {isCompleted && (
                <FontAwesome name="check" size={12} color="#FFF" />
              )}
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handlePress}
            style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
          >
            <Text style={styles.title}>{mission.title}</Text>
            <View style={styles.stars}>
              {[...Array(mission.difficulty)].map((_, i) => (
                <FontAwesome key={i} name="star" size={16} color="#FFD700" />
              ))}
            </View>
          </TouchableOpacity>
        </View>

          {expanded && (
            <View style={styles.expandedContent}>
              <Text style={styles.description}>
                {mission.description ||
                  "No hay descripción disponible para esta misión."}
              </Text>
              <View style={styles.dateRow}>
                <View style={styles.greenDot} />
                <Text style={styles.date}>{mission.dueDate || "18/10/2025"}</Text>
              </View>

              
              <View style={styles.rewardBoxWrapper}>
                <View style={styles.rewardBox}>
                  <View style={styles.coinContainer}>
                   
                    <FontAwesome name="circle" size={50} color="#FFB300" />
                   
                    <View style={styles.coinSmall}>
                      <FontAwesome name="circle" size={28} color="#FF8C00" />
                    </View>
                  </View>
                  <View style={styles.rewardTextContainer}>
                    <Text style={styles.rewardLabel}>¡Tarea completada!</Text>
                    <Text style={styles.rewardValue}>{20}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
      </ImageBackground>
    </Animated.View>
  );
};

export default MissionCard;