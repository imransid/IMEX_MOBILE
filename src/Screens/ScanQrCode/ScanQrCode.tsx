import React, { type FC } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import QrCodeLogo from '../../assets/qr-code-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';

import styles from './style';

const ScanQrCode: FC = (): JSX.Element => {
  const navigation = useNavigation();

  const handlePress: any = () => {
    navigation.navigate('HomeScreen' as never);
  };

  return (
    <View style={styles.container}>
      <QrCodeLogo />
      <View style={styles.buttonPosition}>
        <View style={styles.button}>
          <CustomButton
            onPress={() => handlePress()}
            text="Let’s Scan QR Code"
            icon={<Icon name="arrowright" size={30} color={'#fff'} />}
          />
        </View>
      </View>
    </View>
  );
};

export default ScanQrCode;
