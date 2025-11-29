import React, { useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, 
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { styles } from "./Dropdown.styles";

const options = ['Opción 1', 'Opción 2', 'Opción 3'];

export default function Dropdown() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

    const open = () => setVisible(true);
  const close = () => setVisible(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    close();
  };

  return (
    <>
      {/* Campo que se ve en el formulario */}
      <TouchableOpacity style={styles.input} onPress={open} activeOpacity={0.8}>
        <Text
          style={[
            styles.inputText,
            !selected && styles.placeholderText,
          ]}
          numberOfLines={1}
        >
          {selected ?? "Seleccione una opción"}
        </Text>
        <Text style={styles.arrow}>▾</Text>
      </TouchableOpacity>

      {/* Modal flotante encima de todo */}
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={close}
      >
        {/* Fondo oscuro clickeable para cerrar */}
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.backdrop}>
            {/* Contenedor del menú (no se cierra al tocar dentro) */}
            <TouchableWithoutFeedback>
              <View style={styles.menu}>
                {options.map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={styles.option}
                    onPress={() => handleSelect(opt)}
                  >
                    <Text style={styles.optionText}>{opt}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}