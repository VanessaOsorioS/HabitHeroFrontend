import { login } from "@/src/services/auth.service";
import { LoginRequest } from "@/src/types/auth";
import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { PropsLogin } from "../types/Login";
import { styles } from "./LoginPage.styles";

export default function LoginPage({ onLogin }: PropsLogin) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const request = {
        email: email,
        password: password
      } as LoginRequest;

      const result = await login(request);
      console.log("Login result:", result);

      onLogin(result.token, result.user);

    } catch (err: any) {
      console.error("Login error:", err);
      setError("Credenciales inválidas");
    }
  };

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
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.formRow}>
        <MaterialIcons name="password" size={24} color="green" />
        <Text style={styles.label}> Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
