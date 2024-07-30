import { TouchableOpacity, View } from 'react-native';
import ICustomButtonProps from '../../Interfaces/ICustomButtonProps';
import React from 'react';
import { Text } from 'react-native';
import styles from './style';

const CustomButton: React.FC<ICustomButtonProps> = ({ text, icon, onPress, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonProperties}>
        {text && <Text style={textStyle}>{text}</Text>}
        {icon && <View>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
