import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type ICustomButtonProps from '../../Interfaces/ICustomButtonProps';

import styles from './style';

const CustomButton: React.FC<ICustomButtonProps> = ({ text, icon, onPress }) => {
  return (
    <View style={styles.buttonPosition}>
      <TouchableOpacity style={styles.buttonProperties} onPress={onPress}>
        {text !== '' ? <Text style={styles.buttonText}>{text}</Text> : <></>}
        {icon && <View>{icon}</View>}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
