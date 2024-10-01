import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { type RootState } from '@/store';

import CustomButton from '../../Components/CustomButton/CustomButton';
import { colors } from '../../theme/colors';

import styles from './style';

const MedicineDetails: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedData } = route.params as { scannedData: string };

  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);

  const handlePress: any = () => {
    authStatus
      ? navigation.navigate('MedicineDoses' as never)
      : navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scannedText}>Scanned Data : {scannedData}</Text>
      <View style={styles.buttonPosition}>
        <CustomButton
          onPress={() => handlePress()}
          icon={<Icon name="calendar-number-outline" size={30} color={colors.white} />}
          text="Schedule Dosage"
        />
      </View>
    </View>
  );
};

export default MedicineDetails;
