import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import HorizontalCalendar from '../../Components/HorizontalCalender/HorizontalCalendar';
import { colors } from '../../theme/colors';

import styles from './style';

const HomeScreen: FC = () => {
  const navigation = useNavigation();

  const handleAddMedicine: any = () => {
    navigation.navigate('AddMedicineManually' as never);
  };
  return (
    <View style={styles.calendarContainer}>
      <HorizontalCalendar />
      <View style={styles.addMedicineButtonPosition}>
        <TouchableOpacity style={styles.addMedicineButton} onPress={() => handleAddMedicine()}>
          <View style={styles.addMedicineButtonProperties}>
            <Feather name="plus" size={22} color={colors.white}></Feather>
            <Text style={styles.addMedicineText}>Add Medicine</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
