import { missionService } from "@/src/services/missionsService";
import {
    CreateMissionRequest,
    MissionType,
} from "@/src/types/mission";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Dropdown from "../components/Dropdown";
import { styles } from "./RegisterMission.styles";

const missionTypes = [
    { label: "Estudio", value: MissionType.STUDY },
    { label: "Tarea", value: MissionType.TASK },
];

const categories = [
    { label: "C1", value: "C1" },
    { label: "C2", value: "C2" },
    { label: "C3", value: "C3" },
];

type FormErrors = {
    title?: string;
    priority?: string;
    difficulty?: string;
    dueDateText?: string;
    durationDays?: string;
    category?: string;
};

type Props = {
  goBackToMissions: () => void;
};

export default function RegisterMissionScreen({ goBackToMissions }: Props) {
    const [showSuccess, setShowSuccess] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [dueDateText, setDueDateText] = useState("");
    const [durationDays, setDurationDays] = useState("");
    const [initialStatus, setInitialStatus] = useState("");

    const [type, setType] = useState<MissionType>(MissionType.STUDY);
    const [category, setCategory] = useState<string | null>(null);

    const [errors, setErrors] = useState<FormErrors>({});

    // ─────────────────────────────
    // Handlers de cambio de inputs
    // ─────────────────────────────

    // Solo letras y espacios (con acentos y ñ)
    const handleTitleChange = (text: string) => {
        const cleaned = text.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
        setTitle(cleaned);
    };

    const handleInitialStatusChange = (text: string) => {
        const cleaned = text.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
        setInitialStatus(cleaned);
    };

    // Solo números
    const handlePriorityChange = (text: string) => {
        const numeric = text.replace(/[^0-9]/g, "");
        setPriority(numeric);
    };

    const handleDifficultyChange = (text: string) => {
        const numeric = text.replace(/[^0-9]/g, "");
        setDifficulty(numeric);
    };

    const handleDurationDaysChange = (text: string) => {
        const numeric = text.replace(/[^0-9]/g, "");
        setDurationDays(numeric);
    };

    const handleDescriptionChange = (text: string) => {
        setDescription(text);
    };

    const handleDueDateTextChange = (text: string) => {
        setDueDateText(text);
    };

    // ─────────────────────────────
    // Validación del formulario
    // ─────────────────────────────

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Título: requerido, mínimo 3 caracteres
        if (!title.trim()) {
            newErrors.title = "El título es obligatorio.";
        } else if (title.trim().length < 3) {
            newErrors.title = "El título debe tener al menos 3 caracteres.";
        }

        // Prioridad: número entre 1 y 5
        const priorityNumber = Number(priority);
        if (!priority) {
            newErrors.priority = "La prioridad es obligatoria.";
        } else if (isNaN(priorityNumber)) {
            newErrors.priority = "La prioridad debe ser un número.";
        } else if (priorityNumber < 1 || priorityNumber > 5) {
            newErrors.priority = "La prioridad debe estar entre 1 y 5.";
        }

        // Dificultad: número entre 1 y 5
        const difficultyNumber = Number(difficulty);
        if (!difficulty) {
            newErrors.difficulty = "La dificultad es obligatoria.";
        } else if (isNaN(difficultyNumber)) {
            newErrors.difficulty = "La dificultad debe ser un número.";
        } else if (difficultyNumber < 1 || difficultyNumber > 5) {
            newErrors.difficulty = "La dificultad debe estar entre 1 y 5.";
        }

        if (dueDateText) {
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (!dateRegex.test(dueDateText)) {
                newErrors.dueDateText = "La fecha debe tener el formato dd/mm/aaaa.";
            }
        }

        if (durationDays) {
            const durationNumber = Number(durationDays);
            if (isNaN(durationNumber)) {
                newErrors.durationDays = "La duración debe ser un número.";
            } else if (durationNumber < 1 || durationNumber > 365) {
                newErrors.durationDays =
                    "La duración debe estar entre 1 y 365 días.";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // ─────────────────────────────
    // Envío del formulario
    // ─────────────────────────────

    const handleRegister = async () => {
        const isValid = validateForm();
        if (!isValid) {
            console.log("Formulario inválido, revisa los campos.");
            return;
        }

        try {
            const HOURS_END_OF_DAY = 23;
            const MINUTES_END_OF_DAY = 59;
            const SECONDS_END_OF_DAY = 59;
            const HOURS_IN_DAY = 24;
            const MINUTES_IN_HOUR = 60;
            const MONTH_OFFSET = 1;

            const priorityNumber = Number(priority);
            const difficultyNumber = Number(difficulty);

            let dueDateIso: string | undefined = undefined;
            if (dueDateText) {
                const [day, month, year] = dueDateText.split("/");
                if (day && month && year) {
                    const dueDate = new Date(
                        Number(year),
                        Number(month) - MONTH_OFFSET,
                        Number(day),
                        HOURS_END_OF_DAY,
                        MINUTES_END_OF_DAY,
                        SECONDS_END_OF_DAY
                    );
                    dueDateIso = dueDate.toISOString();
                }
            }

            const durationMinutes = durationDays ? Number(durationDays) *
                HOURS_IN_DAY * MINUTES_IN_HOUR : undefined;

            const request: CreateMissionRequest = {
                title: title.trim(),
                description: description.trim() || undefined,
                type: type,
                category: category || undefined,
                priority: priorityNumber,
                difficulty: difficultyNumber,
                dueDate: dueDateIso,
                durationMinutes,
                daily: false,
                reminderEnabled: false,
            };

            const created = await missionService.createMission(request);
            if (created) {
                setShowSuccess(true);
            }
            console.log("Mission created:", created);

        } catch (error) {
            console.error("Error creating mission:", error);
        }
    };

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
                        <Text style={styles.label}>Título</Text>
                        <TextInput
                            style={styles.input}
                            value={title}
                            onChangeText={handleTitleChange}
                        />
                    </View>
                    {errors.title && (
                        <Text style={styles.errorText}>{errors.title}</Text>
                    )}

                    {/* Descripción */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Descripción</Text>
                        <TextInput
                            style={styles.input}
                            value={description}
                            onChangeText={handleDescriptionChange}
                        />
                    </View>

                    {/* Prioridad */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Prioridad (1-5)</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={priority}
                            onChangeText={handlePriorityChange}
                        />
                    </View>
                    {errors.priority && (
                        <Text style={styles.errorText}>{errors.priority}</Text>
                    )}

                    {/* Dificultad */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Dificultad (1-5)</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={difficulty}
                            onChangeText={handleDifficultyChange}
                        />
                    </View>
                    {errors.difficulty && (
                        <Text style={styles.errorText}>{errors.difficulty}</Text>
                    )}

                    {/* Fecha de vencimiento */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Fecha de vencimiento</Text>
                        <View style={styles.dateContainer}>
                            <TextInput
                                style={[styles.input, styles.inputDate]}
                                placeholder="dd/mm/aaaa"
                                placeholderTextColor="#b8b8b8"
                                value={dueDateText}
                                onChangeText={handleDueDateTextChange}
                            />
                            <Text style={styles.calendarIcon}>📅</Text>
                        </View>
                    </View>
                    {errors.dueDateText && (
                        <Text style={styles.errorText}>{errors.dueDateText}</Text>
                    )}

                    {/* Duración estimada */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Duración estimada</Text>
                        <View style={styles.inlineInputContainer}>
                            <TextInput
                                style={[styles.input, styles.inlineInput]}
                                keyboardType="numeric"
                                value={durationDays}
                                onChangeText={handleDurationDaysChange}
                            />
                            <Text style={styles.inlineText}>días.</Text>
                        </View>
                    </View>
                    {errors.durationDays && (
                        <Text style={styles.errorText}>{errors.durationDays}</Text>
                    )}

                    {/* Estado inicial (solo letras) */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Estado inicial (texto)</Text>
                        <TextInput
                            style={styles.input}
                            value={initialStatus}
                            onChangeText={handleInitialStatusChange}
                        />
                    </View>

                    {/* Categoría */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Categoría</Text>
                        <Dropdown
                            options={categories}
                            value={category}
                            onChange={setCategory}
                            placeholder="Seleccione una categoría"
                        />
                    </View>
                    {errors.category && (
                        <Text style={styles.errorText}>{errors.category}</Text>
                    )}

                    {/* Tipo de misión */}
                    <View style={styles.formRow}>
                        <FontAwesome5 name="leaf" size={20} color="green" />
                        <Text style={styles.label}>Tipo de misión</Text>
                        <Dropdown
                            options={missionTypes}
                            value={type}
                            onChange={(value) => setType(value as MissionType)}
                            placeholder="Seleccione un tipo"
                        />
                    </View>

                    {/* Botón Registrar */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            {showSuccess && (
                <View style={styles.successOverlay}>
                    <View style={styles.successBox}>
                        <Text style={styles.successIcon}>✨</Text>
                        <Text style={styles.successTitle}>¡Misión creada!</Text>
                        <Text style={styles.successMessage}>
                            Tu misión fue registrada correctamente.
                        </Text>

                        <TouchableOpacity
                            style={styles.successButton}
                            onPress={() => goBackToMissions()}
                        >
                            <Text style={styles.successButtonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
