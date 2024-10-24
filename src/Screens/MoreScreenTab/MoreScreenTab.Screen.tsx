import React, { type FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const MoreScreenTab: FC = () => {
  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  // for showing medicine Name
  const getMedicineName = (medicineId: string) => {
    let medName = storedMedicineList.filter(e => {
      if (e.medicineLocalId === medicineId) {
        return e.medicineName;
      }
    });
    if (medName.length > 0) {
      let x = medName.map(e => {
        let y = e.medicineName;
        return y;
      });
      return x;
    }
  };

  // get Taken Pills
  const getTakenMedicine = (medicineId: string) => {
    let takenPills = storedMedicineList.filter(e => {
      if (e.medicineLocalId === medicineId) {
        return e.medicineName;
      }
    });
    if (takenPills.length > 0) {
      let x = takenPills.map(e => {
        let y = e.doseQuantity;
        return y;
      });
      return x;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="More Settings" />
      </View>
      <View style={styles.refillsHeadingProperties}>
        {storedMedicineList.length > 0 ? (
          <View style={styles.moreSettingsListStyle}>
            <Text style={styles.refillsText}>Refills</Text>
            <View style={styles.medicineDoseComponentPosition}>
              <FlatList
                data={storedMedicineList}
                renderItem={({ item: medicine, index }) => (
                  <TouchableOpacity key={index} style={styles.chip}>
                    <View style={styles.medicineDoseProperties}>
                      <View style={styles.doseDetailsPosition}>
                        <Text style={styles.pillsLeft}>
                          {getMedicineName(medicine.medicineLocalId)}
                        </Text>
                        <Text style={styles.pillsLeftDetailsText}>
                          {`Took ${getTakenMedicine(medicine.medicineLocalId)} Pills`}
                        </Text>
                      </View>
                      <View style={styles.pillsLeftPosition}>
                        <Text style={styles.pillsLeft}>12 Pill(s) Left</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.medicineDoseComponentPosition}></View>
    </View>
  );
};

export default MoreScreenTab;
