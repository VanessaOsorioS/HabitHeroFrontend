import React from "react";
import { View, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainLayoutStyles as styles } from "./MainLayout.styles";
import MainMenu, { MenuOption } from "../menu/MainMenu";

type Props = {
  children: React.ReactNode;
  onSelectMenuOption?: (option: MenuOption) => void;
  showMenu?: boolean;
};

export default function MainLayout({ children, onSelectMenuOption, showMenu = true,}: Props) {
  return (
    <View style={styles.container}>

      {/* Menú*/}
      {showMenu && (
        <View style={styles.menuAbsolute}>
          <MainMenu onSelectOption={onSelectMenuOption} />
        </View>
      )}
      <ImageBackground
        source={require("../../assets/forest3.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.panelWrapper}>
          <ImageBackground
            source={require("../../assets/backTree.png")}
            style={styles.panel}
            imageStyle={styles.panelImage}
          >
            <View style={styles.top}>
              <Ionicons name="radio-button-on" size={32} color="white" />

              <Ionicons name="radio-button-on" size={40} color="white" />
            </View>

            {/* Contenido */}
            <View style={styles.content}>
              {children}
            </View>

            <View style={styles.top}>
              <Ionicons name="radio-button-on" size={32} color="white" />
              <Ionicons name="radio-button-on" size={32} color="white" />
            </View>

          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}


