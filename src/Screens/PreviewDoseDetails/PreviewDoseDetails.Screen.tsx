import React, { useState, type FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import MedicineImage from '../../assets/medicine-image';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const PreviewDoseDetails: FC = () => {
  const medicineName = useSelector((state: RootState) => state.medicineDetails.medicineName);
  const medicineType = useSelector((state: RootState) => state.medicineDetails.typeMed);
  const medicineUnit = useSelector((state: RootState) => state.medicineDetails.unitMed);
  const medicineStrength = useSelector((state: RootState) => state.medicineDetails.strengthMed);

  const weeklyDoseTime = useSelector((state: RootState) => state.medicineDetails.weeklyDoseTime);

  const weeklyTime = useSelector((state: RootState) => state.medicineDetails.weeklyTime);

  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

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
          {storedMedicineList.length > 0
            ? storedMedicineList.map((medicine, index) => (
                <Header mainHeader={medicine.medicineName} />
              ))
            : ''}
        </View>
        <View style={styles.subHeader}>
          <Header subHeader={`${medicineType}, ${medicineStrength}${medicineUnit}`} />
        </View>

        <View style={styles.doseDetailsPosition}>
          <View style={styles.schedulePosition}>
            <View style={styles.doseDetailsProperties}>
              <Text style={styles.headingStyle}>Schedule</Text>
              <View style={styles.chip}>
                <View style={styles.dayContentProperties}>
                  <Text style={styles.chipText}>
                    {weeklyTime.length > 0
                      ? weeklyTime.map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(', ')
                      : ''}
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
                      <Text style={styles.chipText}>{dose.doseTime}</Text>
                      <Text style={styles.chipText}>
                        {dose.doseQuantity}{' '}
                        {parseInt(dose.doseQuantity) > 1 ? 'Capsules' : 'Capsule'}
                      </Text>
                    </>
                  ))
                : ''}
            </View>
          </View>
        </View>
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
          <View style={styles.secondaryButtonPosition}>
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
          </View>
        </View>
      </ScrollView>
      <View style={styles.DonebuttonPosition}>
        <CustomButton onPress={handleDone} icon={<></>} text="Done" />
      </View>
    </View>
  );
};

export default PreviewDoseDetails;
