/* eslint-disable */
import React, { type FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ClickToAddMedicine from '@/assets/click-to-add-med';
import { type RootState } from '@/store';

import MedicineImage from '../../assets/medicine-image';
import HorizontalCalendar from '../../Components/HorizontalCalender/HorizontalCalendar';
import { colors } from '../../theme/colors';
import styles from './style';
import moment from 'moment';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define your stack navigation parameter list
interface RootStackParamList {
  PreviewDoseDetails: { medicine: any };
  // Add other screens and their params here if needed
}

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PreviewDoseDetails'>;

const HomeScreen: FC = () => {
  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  const selectedDate = useSelector((state: RootState) => state.medicineDetails.selectedDates);

  const instructionList = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.storeInstrucTionList
  );
  const weeklyMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineWeeklyList
  );

  //const currentTime = moment();

  // for retriving weekley times
  const getWeeklyMedicineList = (medicineId: string) => {
    let weeklyList = weeklyMedicineList.filter(e => {
      if (e.medicineLocalId.medicineLocalId === medicineId) {
        return e.medicineLocalId.weeklyTime;
      }
    });

    if (weeklyList.length > 0) {
      let x = weeklyList.map(e => {
        let y = e.medicineLocalId.weeklyTime
          .map(i => i.charAt(0).toUpperCase() + i.slice(1))
          .join(', ');

        return y;
      });
      return x;
    }
    return false;
  };

  // for retriving given instruction
  const getInstructionList = (medicineId: string) => {
    let instruction = instructionList.filter(e => {
      if (e.medicineLocalId === medicineId) {
        return e.instrucTion;
      }
    });
    if (instruction.length > 0) {
      let x = instruction.map(e => {
        let y = e.instrucTion;
        return y;
      });
      return x;
    }
  };

  // Use the defined navigation prop type
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleAddMedicine: any = async () => {
    navigation.navigate('MedicineAddingMethod' as never);
  };

  const handleAddAppointment: any = async () => {
    navigation.navigate('DoctorAppointments' as never);
  };

  const handleDosePress: any = (medicine: any) => {
    navigation.navigate('PreviewDoseDetails', { medicine });
  };

  const filteredMedicineList = storedMedicineList.filter(medicine => {
    // Check if the medicine's date matches the selected date
    const medicineDateString = medicine.createdDate.split(' ')[0];

    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    return medicineDateString === formattedDate;
  });

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <HorizontalCalendar />
      </View>

      {/* Medicine Name and Dose Chip   */}
      <View style={styles.medicineDoseComponentPosition}>
        <View style={styles.doseComponent}>
          {filteredMedicineList.length > 0 ? (
            <>
              <View style={styles.chipheadingPosition}>
                <Text style={styles.chipheadingText}>Pills for today</Text>
              </View>
              <FlatList
                style={styles.medicineDoseListStyle}
                data={storedMedicineList}
                renderItem={({ item: medicine, index }) => {
                  const currentTime = moment(); // Get the current time

                  // Parse medicine.doseTime with today's date for accurate comparison
                  const today = moment().format('YYYY-MM-DD');
                  const doseTime = moment(`${today} ${medicine.doseTime}`, 'YYYY-MM-DD hh:mm A');

                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.chip}
                      onPress={() => handleDosePress(medicine)}>
                      <View style={styles.medicineDoseProperties}>
                        <MedicineImage />
                        <View style={styles.doseDetailsPosition}>
                          <View style={styles.doseProperties}>
                            <MaterialCommunityIcons name="pill" size={18} color={colors.buttonBg} />
                            <Text style={styles.medicineNameText}>{medicine.medicineName}</Text>
                          </View>
                          <Text style={styles.doseText}>
                            {medicine.doseQuantity}{' '}
                            {parseInt(medicine.doseQuantity) > 1 ? 'pills' : '0 pill'}
                            {getInstructionList(medicine.medicineLocalId)
                              ? ` | ${getInstructionList(medicine.medicineLocalId)}`
                              : ' | Not Present'}
                          </Text>
                          <View style={styles.doseDatesPosition}>
                            <AntDesign name="calendar" size={18} color={colors.typedText} />
                            <Text style={styles.weekDayText}>
                              {getWeeklyMedicineList(medicine.medicineLocalId)
                                ? getWeeklyMedicineList(medicine.medicineLocalId)
                                : 'No Week Days Selected'}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.doseTimePosition}>
                          <Text style={styles.medicineNameText}>{medicine.doseTime}</Text>
                          <Text style={styles.doseText}>
                            {currentTime.isBefore(doseTime) ? 'Upcoming' : 'Passed'}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </>
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
      <View style={styles.addAppointmentButtonPosition}>
        <TouchableOpacity
          style={styles.addAppointmentButton}
          onPress={() => handleAddAppointment()}>
          <View style={styles.addAppointmentButtonProperties}>
            <Feather name="plus" size={22} color={colors.white}></Feather>
            <Text style={styles.addMedicineText}>Add Appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
