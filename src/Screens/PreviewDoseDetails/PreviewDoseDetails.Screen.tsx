import React, { type FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { type RootState } from '@/store';

import MedicineImage from '../../assets/medicine-image';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const PreviewDoseDetails: FC = () => {
  const route = useRoute(); // Access the route prop
  const { medicineId } = route.params as { medicineId: any }; // Extract medicineId from route params

  const weeklyDoseTime = useSelector((state: RootState) => state.medicineDetails.weeklyDoseTime);

  const weeklyTime = useSelector((state: RootState) => state.medicineDetails.weeklyTime);

  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  // Find the medicine based on medicineId
  const selectedMedicine = storedMedicineList.find(
    medicine => medicine.medicineLocalId === medicineId
  );

  // for getting week days of specific medicine
  const weeklyMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineWeeklyList
  );

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
    return <></>;
  };

  // for retriving specific time
  const weeklyDoseTimeList = useSelector(
    (state: RootState) => state.medicineDetails.weeklyDoseTime
  );

  const getWeeklyDoseTimeList = (medicineId: string) => {
    let timeMM = '';
    weeklyDoseTimeList.filter(e => {
      if (e.medicineLocalId === medicineId) {
        timeMM = e.doseTime;
      }
    });

    return timeMM === '' ? <></> : timeMM;
  };

  const getWeeklyDoseQuantityList = (medicineId: string) => {
    let quantityMM = '';
    weeklyDoseTimeList.filter(e => {
      if (e.medicineLocalId === medicineId) {
        quantityMM = e.doseQuantity;
      }
    });

    return quantityMM === '' ? <></> : quantityMM;
  };

  const navigation = useNavigation();

  const handleDone: any = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imagePosition}>
          <MedicineImage />
        </View>

        <View style={styles.mainHeader}>
          <Header mainHeader={selectedMedicine?.medicineName} />
        </View>
        <View style={styles.subHeader}>
          <Header
            subHeader={
              selectedMedicine?.typeMed !== ''
                ? `${selectedMedicine?.typeMed}, ${selectedMedicine?.strengthMed}${selectedMedicine?.unitMed}`
                : ''
            }
          />
        </View>
        {weeklyTime.length > 0 && (
          <View style={styles.doseDetailsPosition}>
            <View style={styles.schedulePosition}>
              <View style={styles.doseDetailsProperties}>
                <Text style={styles.headingStyle}>Schedule</Text>
                <View style={styles.chip}>
                  <View style={styles.dayContentProperties}>
                    <Text style={styles.chipText}>
                      {getWeeklyMedicineList(selectedMedicine?.medicineLocalId)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.timeAndQuantityProperties}>
                {weeklyDoseTime.length > 0
                  ? weeklyDoseTime.map((dose, index) => (
                      <>
                        <Text style={styles.chipText}>
                          {getWeeklyDoseTimeList(selectedMedicine?.medicineLocalId)}
                        </Text>
                        <Text style={styles.chipText}>
                          {/* {`${getWeeklyDoseQuantityList(selectedMedicine?.medicineLocalId)} ${selectedMedicine?.typeMed}`} */}
                          {parseInt(getWeeklyDoseQuantityList(selectedMedicine?.medicineLocalId)) >
                          1
                            ? `${getWeeklyDoseQuantityList(selectedMedicine?.medicineLocalId)} ${selectedMedicine?.typeMed}(s)`
                            : `${getWeeklyDoseQuantityList(selectedMedicine?.medicineLocalId)} ${selectedMedicine?.typeMed}`}
                        </Text>
                      </>
                    ))
                  : ''}
              </View>
            </View>
          </View>
        )}

        <View style={styles.doseDetailsPosition}>
          <View style={styles.optionalDetailsPosition}>
            <View style={styles.doseDetailsProperties}>
              <Text style={styles.headingStyle}>Optional Details</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                style={styles.displayNameInput}
                placeholder="Display Name"
                placeholderTextColor={colors.typedText}
                maxLength={10}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                style={styles.notesInput}
                placeholder="Notes"
                placeholderTextColor={colors.typedText}
                maxLength={100}
              />
            </View>
          </View>
          {/* <View style={styles.secondaryButtonPosition}>
            <TouchableOpacity style={styles.rescheduleButton}>
              <View style={styles.rescheduleButtonProperties}>
                <Ionicons name="alarm-outline" size={22} color={colors.header} />
                <Text style={styles.secondayButtonText}>Reschedule</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.historyButton}>
              <View style={styles.historyButtonProperties}>
                <MaterialCommunityIcons name="history" size={22} color={colors.header} />
                <Text style={styles.secondayButtonText}>History</Text>
              </View>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
      <View style={styles.DonebuttonPosition}>
        <CustomButton onPress={handleDone} icon={<></>} text="Done" />
      </View>
    </View>
  );
};

export default PreviewDoseDetails;
