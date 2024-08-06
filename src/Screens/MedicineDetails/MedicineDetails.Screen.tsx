import React, { type FC } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import styles from './style';
import { Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const MedicineDetails: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedData } = route.params as { scannedData: string };

  const handlePress: any = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scannedText}>Scanned Data : {scannedData}</Text>
      <CustomButton
        onPress={() => handlePress()}
        icon={<Icon name="calendar-number-outline" size={30} color={colors.white} />}
        text="Schedule Dosage"
      />
    </View>
  );
};

export default MedicineDetails;
