import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import MedicineImage from '../../assets/medicine-image';
import HorizontalCalendar from '../../Components/HorizontalCalender/HorizontalCalendar';
import { colors } from '../../theme/colors';

import styles from './style';

const HomeScreen: FC = () => {
  const navigation = useNavigation();

  const handleAddMedicine: any = () => {
    navigation.navigate('MedicineAddingMethod' as never);
  };

  const handleDosePress: any = () => {
    navigation.navigate('PreviewDoseDetails' as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <HorizontalCalendar />
      </View>

      {/* Medicine Name and Dose Chip   */}
      <View style={styles.medicineDoseComponentPosition}>
        <View style={styles.doseComponent}>
          <View style={styles.chipheadingPosition}>
            <Text style={styles.chipheadingText}>Pills for today</Text>
          </View>
          <TouchableOpacity style={styles.chip} onPress={() => handleDosePress()}>
            <View style={styles.medicineDoseProperties}>
              <MedicineImage />
              <View style={styles.doseDetailsPosition}>
                <View style={styles.doseProperties}>
                  <MaterialCommunityIcons name="pill" size={18} color={colors.buttonBg} />
                  <Text style={styles.medicineNameText}>Adflox</Text>
                </View>
                <Text style={styles.doseText}>1 pill | Before meal</Text>
                <View style={styles.doseDatesPosition}>
                  <AntDesign name="calendar" size={18} color={colors.typedText} />
                  <Text style={styles.doseText}>Sun, Tue, Thu, Sat</Text>
                </View>
              </View>
              <View style={styles.doseTimePosition}>
                <Text style={styles.medicineNameText}>Time</Text>
                <Text style={styles.doseText}>Upcoming</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

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
