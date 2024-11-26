import React, { useState, type FC } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
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
  const prescriptionList = useSelector((state: RootState) => state.prescription.ImageFile);

  // States to handle the expansion of each list
  const [isMedicineListExpanded, setIsMedicineListExpanded] = useState(false);
  const [isAppointmentListExpanded, setIsAppointmentListExpanded] = useState(false);
  const [isPrescriptionListExpanded, setIsPrescriptionListExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="More Settings" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainerStyle}>
        {/* Medicine List */}
        <View style={styles.refillsHeadingProperties}>
          {storedMedicineList.length > 0 && (
            <View style={styles.moreSettingsListStyle}>
              <View style={styles.itemHeaderStyle}>
                <Text style={styles.refillsText}>Refills</Text>
                <View style={styles.viewButtonPosition}>
                  <TouchableOpacity
                    onPress={() => setIsMedicineListExpanded(!isMedicineListExpanded)}>
                    <Text style={styles.pillsLeft}>
                      {isMedicineListExpanded ? 'View Less' : 'View All'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.medicineDoseComponentPosition}>
                <FlatList
                  data={
                    isMedicineListExpanded ? storedMedicineList : storedMedicineList.slice(0, 1)
                  }
                  renderItem={({ item: medicine, index }) => (
                    <View key={index} style={styles.chip}>
                      <View style={styles.medicineDoseProperties}>
                        <View style={styles.doseDetailsPosition}>
                          <Text style={styles.pillsLeft}>{medicine.medicineName}</Text>
                          <Text style={styles.pillsLeftDetailsText}>
                            Took{' '}
                            {parseInt(medicine.doseQuantity) > 1
                              ? `${medicine.doseQuantity} Pills`
                              : `${medicine.doseQuantity} Pill`}
                          </Text>
                        </View>
                        {/* <View style={styles.pillsLeftPosition}>
                          <Text style={styles.pillsLeft}>Number of Pill(s) Left</Text>
                        </View> */}
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        </View>

        {/* Appointment List */}
        <View style={styles.refillsHeadingProperties}>
          {appointMentList.length > 0 && (
            <View style={styles.moreSettingsListStyle}>
              <View style={styles.itemHeaderStyle}>
                <Text style={styles.refillsText}>Appointments</Text>
                <View>
                  <TouchableOpacity
                    onPress={() => setIsAppointmentListExpanded(!isAppointmentListExpanded)}>
                    <Text style={styles.pillsLeft}>
                      {isAppointmentListExpanded ? 'View Less' : 'View All'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.medicineDoseComponentPosition}>
                <FlatList
                  data={isAppointmentListExpanded ? appointMentList : appointMentList.slice(0, 1)}
                  renderItem={({ item: medicine, index }) => (
                    <View key={index} style={styles.chip}>
                      <View style={styles.medicineDoseProperties}>
                        <View style={styles.doseDetailsPosition}>
                          <Text style={styles.pillsLeft}>{medicine.doctorName}</Text>
                          <Text style={styles.pillsLeftDetailsText}>{medicine.date}</Text>
                        </View>
                        <View style={styles.pillsLeftPosition}>
                          <Text style={styles.pillsLeft}>{medicine.time}</Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        </View>

        {/* Prescription List */}
        <View style={styles.refillsHeadingProperties}>
          {prescriptionList.length > 0 && (
            <View style={styles.moreSettingsListStyle}>
              <View style={styles.itemHeaderStyle}>
                <Text style={styles.refillsText}>Prescriptions</Text>
                <View style={styles.viewButtonPosition}>
                  <TouchableOpacity
                    onPress={() => setIsPrescriptionListExpanded(!isPrescriptionListExpanded)}>
                    <Text style={styles.pillsLeft}>
                      {isPrescriptionListExpanded ? 'View Less' : 'View All'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.medicineDoseComponentPosition}>
                <FlatList
                  data={
                    isPrescriptionListExpanded ? prescriptionList : prescriptionList.slice(0, 1)
                  }
                  renderItem={({ item: medicine, index }) => (
                    <View key={index} style={styles.chip}>
                      <View style={styles.medicineDoseProperties}>
                        <Image
                          style={styles.prescriptionImageStyle}
                          source={{ uri: decodeURIComponent(medicine.uri) }}
                          resizeMode="cover"
                        />
                        <View style={styles.prescriptionDetailsPosition}>
                          <Text style={styles.pillsLeft}>{medicine.fileName}</Text>
                        </View>
                        <View style={styles.pillsLeftPosition}>
                          <Text style={styles.pillsLeft}>Type: {medicine.type}</Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MoreScreenTab;
