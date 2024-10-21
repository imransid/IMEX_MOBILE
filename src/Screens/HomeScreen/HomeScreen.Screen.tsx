import React, { type FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { type StackNavigationProp } from '@react-navigation/stack';

import ClickToAddMedicine from '@/assets/click-to-add-med';
import { type RootState } from '@/store';

import MedicineImage from '../../assets/medicine-image';
import HorizontalCalendar from '../../Components/HorizontalCalender/HorizontalCalendar';
import { colors } from '../../theme/colors';

import styles from './style';

// Define your stack navigation parameter list
interface RootStackParamList {
  PreviewDoseDetails: { medicineId: number };
  // Add other screens and their params here if needed
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PreviewDoseDetails'>;

const HomeScreen: FC = () => {
  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  const weeklyTime = useSelector((state: RootState) => state.medicineDetails.weeklyTime);

  const instruction = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.instrucTion
  );

  // const navigation = useNavigation();

  // Use the defined navigation prop type
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleAddMedicine: any = () => {
    navigation.navigate('MedicineAddingMethod' as never);
  };

  const handleDosePress: any = (medicineId: number) => {
    navigation.navigate('PreviewDoseDetails', { medicineId });
  };
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <HorizontalCalendar />
      </View>

      {/* Medicine Name and Dose Chip   */}
      <View style={styles.medicineDoseComponentPosition}>
        <View style={styles.doseComponent}>
          {storedMedicineList.length > 0 && (
            <View style={styles.chipheadingPosition}>
              <Text style={styles.chipheadingText}>Pills for today</Text>
            </View>
          )}
          {storedMedicineList.length > 0 ? (
            <FlatList
              style={styles.medicineDoseListStyle}
              data={storedMedicineList}
              renderItem={({ item: medicine, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.chip}
                  onPress={() => handleDosePress(medicine.medicineLocalId)}>
                  <View style={styles.medicineDoseProperties}>
                    <MedicineImage />
                    <View style={styles.doseDetailsPosition}>
                      <View style={styles.doseProperties}>
                        <MaterialCommunityIcons name="pill" size={18} color={colors.buttonBg} />
                        <Text style={styles.medicineNameText}>{medicine.medicineName}</Text>
                      </View>
                      <Text style={styles.doseText}>
                        {medicine.doseQuantity}{' '}
                        {parseInt(medicine.doseQuantity) > 1 ? 'pills' : 'pill'}
                        {instruction !== '' ? ` | ${instruction}` : ''}
                      </Text>
                      <View style={styles.doseDatesPosition}>
                        <AntDesign name="calendar" size={18} color={colors.typedText} />
                        <Text style={styles.doseText}>
                          {weeklyTime
                            .map(day => day.charAt(0).toUpperCase() + day.slice(1))
                            .join(', ')}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.doseTimePosition}>
                      <Text style={styles.medicineNameText}>Time</Text>
                      <Text style={styles.doseText}>Upcoming</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.clickToAddMedPosition}>
              <ClickToAddMedicine />
              <View style={styles.donotHaveMedTextPosition}>
                <Text style={styles.donotHaveMedText}>You don’t have any meds</Text>
              </View>
              <View style={styles.clickToAddMedTextPosition}>
                <Text style={styles.clickToAddText}>Click</Text>
                <Text style={styles.plusIconText}> + </Text>
                <Text style={styles.clickToAddText}>to add your first treatment</Text>
              </View>
            </View>
          )}
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
