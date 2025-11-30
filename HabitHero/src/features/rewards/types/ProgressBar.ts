import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export type ProgressBarProps = {
  progress?: number;
  icon?: ImageSourcePropType;
  valueText?: string;
  containerStyle?: StyleProp<ViewStyle>;
};