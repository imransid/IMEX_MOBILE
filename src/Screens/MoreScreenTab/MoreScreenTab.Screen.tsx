import React, { type FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../Components/Header/Header';
import styles from './style';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const MoreScreenTab: FC = () => {
  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );

  const appointMentList = useSelector((state: RootState) => state.appointment.storeAppointmentList);

  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="More Settings" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainerStyle}>
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
                          <Text style={styles.pillsLeft}>{medicine.medicineName}</Text>
                          <Text style={styles.pillsLeftDetailsText}>
                            Took{' '}
                            {parseInt(medicine.doseQuantity) > 1
                              ? `${medicine.doseQuantity} Pills`
                              : `${medicine.doseQuantity}0 Pill`}
                          </Text>
                        </View>
                        <View style={styles.pillsLeftPosition}>
                          <Text style={styles.pillsLeft}>Number of Pill(s) Left</Text>
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

        <View style={styles.refillsHeadingProperties}>
          {appointMentList.length > 0 ? (
            <View style={styles.moreSettingsListStyle}>
              <Text style={styles.refillsText}>Appointments</Text>
              <View style={styles.medicineDoseComponentPosition}>
                <FlatList
                  data={appointMentList}
                  renderItem={({ item: medicine, index }) => (
                    <TouchableOpacity key={index} style={styles.chip}>
                      <View style={styles.medicineDoseProperties}>
                        <View style={styles.doseDetailsPosition}>
                          <Text style={styles.pillsLeft}>
                            {/* {getDoctorNameList(medicine.medicineLocalId)} */}
                            {medicine.doctorName}
                          </Text>
                          <Text style={styles.pillsLeftDetailsText}>{medicine.date}</Text>
                        </View>
                        <View style={styles.pillsLeftPosition}>
                          <Text style={styles.pillsLeft}>{medicine.time}</Text>
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
      </ScrollView>
    </View>
  );
};

export default MoreScreenTab;
