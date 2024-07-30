import React from 'react';
import QrCodeLogo from '../../assets/qr-code-logo';
import styles from './style';
import { View } from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/AntDesign';

export default function LetsScanQrCodeScreen() {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <QrCodeLogo />
      <View style={styles.buttonPosition}>
        <View style={styles.button}>
          <CustomButton
            onPress={() => handlePress()}
            text="Let’s Scan QR Code"
            textStyle={styles.buttonText}
            icon={<Icon name="arrowright" size={30} color={'#fff'}></Icon>}
          />
        </View>
      </View>
    </View>
  );
}
