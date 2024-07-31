import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type ICustomButtonProps from '../../Interfaces/ICustomButtonProps';

const CustomButton: React.FC<ICustomButtonProps> = ({ text, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {text !== '' ? <Text>{text}</Text> : <></>}
      {icon === true ? <View>{icon}</View> : <></>}
    </TouchableOpacity>
  );
};

export default CustomButton;
