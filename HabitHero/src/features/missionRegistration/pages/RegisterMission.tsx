import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { styles } from "./RegisterMission.styles";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Dropdown from "../components/Dropdown";

const missionTypes = [
  { label: "Diaria", value: "daily" },
  { label: "Semanal", value: "weekly" },
  { label: "Única", value: "unique" },
];

const categories = [
  { label: "C1", value: "daily" },
  { label: "C2", value: "weekly" },
];

export default function RegisterMissionScreen() {

    const [type, setType] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.treasureContainer}>
                <Image
                    source={require("../../../assets/coffer.png")}
                    style={styles.treasureImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.cardContainer}>
                <Text style={styles.title}>Registrar misiones.</Text>

                <ScrollView
                    contentContainerStyle={styles.formContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Título */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Titulo</Text>
                        <TextInput style={styles.input} />
                    </View>

                    {/* Descripción */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Descripción.</Text>
                        <TextInput style={styles.input} />
                    </View>

                    {/* Prioridad */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Prioridad.</Text>
                        <TextInput style={styles.input} />
                    </View>

                    {/* Dificultad */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Dificultad.</Text>
                        <TextInput style={styles.input} />
                    </View>

                    {/* Fecha de vencimiento */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Fecha de vencimiento</Text>
                        <View style={styles.dateContainer}>
                            <TextInput
                                style={[styles.input, styles.inputDate]}
                                placeholder="13/11/2025"
                                placeholderTextColor="#b8b8b8"
                            />
                            <Text style={styles.calendarIcon}>📅</Text>
                        </View>
                    </View>

                    {/* Duración estimada */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Duración estimada</Text>
                        <View style={styles.inlineInputContainer}>
                            <TextInput
                                style={[styles.input, styles.inlineInput]}
                                keyboardType="numeric"
                            />
                            <Text style={styles.inlineText}>días.</Text>
                        </View>
                    </View>

                    {/* Estado inicial */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Estado inicial.</Text>
                        <TextInput style={styles.input} />
                    </View>

                    {/* Categoría*/}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Categoría.</Text>
                        <Dropdown
                            options={categories}
                            value={category}
                            onChange={setCategory}
                            placeholder="Seleccione una categoría"
                        />
                    </View>

                    {/* Tipo de misión*/}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Tipo de misión.</Text>
                        <Dropdown
                            options={missionTypes}
                            value={type}
                            onChange={setType}
                            placeholder="Seleccione un tipo"
                        />
                    </View>

                    {/* Botón Registrar */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
