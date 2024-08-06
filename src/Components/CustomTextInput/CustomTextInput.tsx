import React, { useState, type FC } from 'react';
import ICustomTextInputProps from '../../Interfaces/ICustomTextInputProps';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const CustomTextInput: React.FC<ICustomTextInputProps & TextInputProps> = ({
  type,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = '#888888',
  maxLength,
  isPassword = false,
  inputStyle
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getKeyboardType = () => {
    switch (type) {
      case 'mobile':
        return 'phone-pad';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, inputStyle]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        onChangeText={onChangeText}
        keyboardType={getKeyboardType()}
        secureTextEntry={showPassword ? false : true}
      />
      {isPassword && (
        <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-outline' : 'eye'} size={30} color={'#888888'}></Icon>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
