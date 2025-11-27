import React from "react";
import {
  View,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MainLayoutStyles as styles } from "./MainLayout.styles";

type Props = {
  children: React.ReactNode;
  goToMissions?: () => void;
};

export default function MainLayout({ children, goToMissions }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/forest3.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.viewImg}>
          <ImageBackground
            source={require("../../assets/backTree.png")}
            style={styles.bgImage}
            imageStyle={styles.panelImage}
          >
            <View style={styles.top}>
              <Ionicons name="radio-button-on" size={32} color="white" />
              <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="black" />
              <Ionicons name="radio-button-on" size={32} color="white" />
            </View>

            <View style={styles.top}>
              <Ionicons name="radio-button-on" size={32} color="white" />
              <Ionicons name="radio-button-on" size={32} color="white" />
            </View>
            <View>{children}</View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

