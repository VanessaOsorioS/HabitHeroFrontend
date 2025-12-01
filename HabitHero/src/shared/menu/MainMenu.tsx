import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MainMenuStyles as styles } from "./MainMenu.styles";

export type MenuOption = "rewards" | "missions" | "avatar" | "register_mission" | "login";

type Props = {
  onSelectOption?: (option: MenuOption) => void;
  onLogout?: () => void
};

export default function MainMenu({ onSelectOption, onLogout }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: MenuOption) => {
    setIsOpen(false);
    onSelectOption && onSelectOption(option);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => setIsOpen((prev) => !prev)}
        activeOpacity={0.7}
      >
        <View>
          <MaterialCommunityIcons
            name="microsoft-xbox-controller-menu"
            size={64}
            color="orange"
          />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleSelect("rewards")}
          >
            <MaterialCommunityIcons
              name="trophy-outline"
              size={20}
              color="#4B2E05"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Mis recompensas</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleSelect("missions")}
          >
            <MaterialCommunityIcons
              name="leaf"
              size={20}
              color="#4B2E05"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Mis misiones</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleSelect("avatar")}
          >
            <MaterialCommunityIcons
              name="account"
              size={20}
              color="#4B2E05"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Avatar</Text>
          </TouchableOpacity>

          
          <View style={styles.menuDivider} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={onLogout}
          >
            <MaterialCommunityIcons
              name="logout"
              size={20}
              color="#4B2E05"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
