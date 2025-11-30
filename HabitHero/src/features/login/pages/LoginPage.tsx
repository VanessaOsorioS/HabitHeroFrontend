import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./LoginPage.styles";
import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { PropsLogin } from "../types/Login";

export default function LoginPage({ onLogin }: PropsLogin) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="login" size={50} color="white" />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>¡La aventura comienza aqui!</Text>
      </View>

      <View style={styles.formRow}>
        <Feather name="user" size={24} color="green" />
        <Text style={styles.label}> Usuario</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
        />
      </View>

      <View style={styles.formRow}>
        <MaterialIcons name="password" size={24} color="green" />
        <Text style={styles.label}> Contraseña</Text>
        <TextInput
          style={styles.input}
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
