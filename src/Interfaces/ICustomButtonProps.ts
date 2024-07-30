import { StyleProp, TextStyle } from 'react-native';

interface ICustomButtonProps {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
  textStyle: StyleProp<TextStyle>;
}

export default ICustomButtonProps;
