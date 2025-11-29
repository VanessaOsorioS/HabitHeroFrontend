import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { styles } from "./Dropdown.styles";
import {DropdownOption, DropdownProps} from "../types/Dropdown";


export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Seleccione una opción",
}: DropdownProps) {
  const [visible, setVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const inputRef = useRef<View | null>(null);

  const open = () => {
    if (inputRef.current) {
      inputRef.current.measureInWindow((x, y, width, height) => {
        setMenuPosition({
          top: y + height + 4,
          left: x,
          width: width,
        });
        setVisible(true);
      });
    }else {
      setVisible(true);
    }
  };

  const close = () => setVisible(false);

  const handleSelect = (option: string) => {
    onChange(option);
    close();
  };
  
  const selectedOption: DropdownOption | undefined = options.find(
    (opt) => opt.value === value
  );
  return (
    <>
      {/* Campo */}
      <TouchableOpacity
        ref={inputRef}
        style={styles.input}
        onPress={open}
        activeOpacity={0.8}
      >
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

      {/* Modal flotante */}
      <Modal visible={visible} transparent animationType="none">
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.overlay}>
            <View
              style={[
                styles.menu,
                {
                  top: menuPosition.top,
                  left: menuPosition.left,
                  width: menuPosition.width,
                },
              ]}
            >
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
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}