import React, { useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { styles } from "./Dropdown.styles";
import {DropdownProps} from "../types/Dropdown";

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Seleccione una opción",
}: DropdownProps) {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    close();
  };

  return (
    <>
      <TouchableOpacity style={styles.input} onPress={open} activeOpacity={0.8}>
        <Text
          style={[
            styles.inputText,
            !selectedOption && styles.placeholderText,
          ]}
          numberOfLines={1}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>

        <Text style={styles.arrow}>▾</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={close}
      >
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.menu}>
                {options.map((opt) => (
                  <TouchableOpacity
                    key={opt.value}
                    style={styles.option}
                    onPress={() => handleSelect(opt.value)}
                  >
                    <Text style={styles.optionText}>{opt.label}</Text>
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