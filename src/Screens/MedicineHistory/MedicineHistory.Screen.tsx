/* eslint-disable */

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import styles from './style';
import { RootState } from '@/store';

// Define the type for the medicine data
interface Medicine {
  medicineLocalId: string;
  medicineName: string;
  createdDate: string; // Assuming createdDate is a string formatted as "YYYY-MM-DD HH:mm:ss"
}

const MedicineHistory: FC = () => {
  const navigation = useNavigation();

  const medicineHistoryData: Medicine[] = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  const getDoseTime = (medicineId: string) => {
    let medDoseTime = storedMedicineList.filter(e => {
      if (e.medicineLocalId === medicineId) {
        return e.doseTime;
      }
    });
    if (medDoseTime.length > 0) {
      let x = medDoseTime.map(e => {
        let y = e.doseTime;
        return y;
      });
      return x;
    }
  };

  const handleBack = (): void => {
    navigation.goBack();
  };

  // Function to group medicine records by date
  const groupByDate = (data: Medicine[]): Record<string, Medicine[]> => {
    return data.reduce(
      (acc, curr) => {
        const date = curr.createdDate.split(' ')[0]; // Extract date only (YYYY-MM-DD)
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(curr);
        return acc;
      },
      {} as Record<string, Medicine[]>
    );
  };

  const groupedMedicines = groupByDate(medicineHistoryData);
  const today: string = new Date().toISOString().split('T')[0]; // Get today's date (YYYY-MM-DD)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.headingPosition}>
          <Header mainHeader="Medicine History" />
        </View>

        <View style={styles.chipPosition}>
          {Object.keys(groupedMedicines).map(date => (
            <View key={date}>
              <Text style={styles.medicineHistoryHeading}>{date === today ? 'Today' : date}</Text>
              {groupedMedicines[date].map(medicine => (
                <View key={medicine.medicineLocalId} style={styles.chip}>
                  <View style={styles.chipContentProperties}>
                    <Text style={styles.chipText}>{medicine.medicineName}</Text>
                    <Text style={styles.chipText}>{getDoseTime(medicine.medicineLocalId)}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.BackbuttonPosition}>
          <CustomButton onPress={handleBack} icon={<></>} text="Back" />
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicineHistory;
