import { StyleProp, TextStyle } from "react-native";

interface ICustomTextInputProps {
  isPassword?: boolean;
  type: 'string' | 'mobile' | 'email' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  maxLength: number;
  icon?: React.ReactNode;
  inputStyle?: StyleProp<TextStyle>;
}

export default ICustomTextInputProps;