import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type ICustomButtonProps from '../../Interfaces/ICustomButtonProps';

import styles from './style';

const CustomButton: React.FC<ICustomButtonProps> = ({
  text,
  icon,
  onPress,
  disabled,
  pageName
}) => {
  return (
    <View>
      {pageName === 'MedicineDetails' ? (
        <TouchableOpacity disabled={disabled} style={styles.buttonProperties} onPress={onPress}>
          {icon !== true ? <View>{icon}</View> : <></>}
          {text !== '' ? <Text style={styles.buttonText}>{text}</Text> : <></>}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={disabled} style={styles.buttonProperties} onPress={onPress}>
          {text !== '' ? <Text style={styles.buttonText}>{text}</Text> : <></>}
          {icon !== true ? <View>{icon}</View> : <></>}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomButton;
