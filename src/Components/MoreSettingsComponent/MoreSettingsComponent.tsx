import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { type RootState } from '@/store';

import { colors } from '../../theme/colors';

import styles from './style';

const MoreSettings: FC = () => {
  const navigation = useNavigation();
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  return (
    <>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => {
          navigation.navigate('AddInstructions' as never);
        }}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Add Instruction</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => {
          navigation.navigate('SetTreatmentDuration' as never);
        }}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Set treatment duration</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => {
          navigation.navigate('MedicineReminders' as never);
        }}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Medicine Reminders</Text>
        </View>
      </TouchableOpacity>

      {authStatus && (
        <>
          <TouchableOpacity
            style={styles.addMoreSettingsItems}
            onPress={() => {
              navigation.navigate('DoctorAppointments' as never);
            }}>
            <View style={styles.addMoreSettingsContentProperties}>
              <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
              <Text style={styles.addMoreSettingsItemsText}>Doctor Appointments</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addMoreSettingsItems}
            onPress={() => {
              navigation.navigate('AddPrescription' as never);
            }}>
            <View style={styles.addMoreSettingsContentProperties}>
              <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
              <Text style={styles.addMoreSettingsItemsText}>Add prescription</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default MoreSettings;
