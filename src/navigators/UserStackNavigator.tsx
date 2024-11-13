import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AddedMedicine,
  AddInstructions,
  AddMedicineManually,
  AddMedicineStrength,
  AddPrescription,
  AskHourInterval,
  AskTimeInterval,
  CameraScanner,
  CreateAccount,
  DoctorAppointments,
  EnterOtp,
  EveryXdaysDose,
  EveryXdaysDoseDetails,
  EveryXhoursDose,
  EveryXmonthsDose,
  EveryXmonthsDoseDetails,
  EveryXweeksDose,
  EveryXweeksDoseDetails,
  ForgotPassword,
  FourTimesAdayDose,
  Login,
  MedicineAddingMethod,
  MedicineDailyDoses,
  MedicineDetails,
  MedicineDoses,
  MedicineReminders,
  MedicineType,
  MonthlyDose,
  MonthlyDoseDetails,
  OnceAdayDose,
  PasswordChanged,
  ResetPassword,
  SetTreatmentDuration,
  ThreeTimesAdayDose,
  TwiceAdayDose,
  WeeklyDose,
  WeeklyDoseDetails,
  XtimesAdayDose
} from '../Screens';
import { colors } from '../theme/colors';

import styles from './Styles';
import UserDrawerNavigator from './UserDrawerNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Stack = createNativeStackNavigator();

const UserStackNavigator: FC = () => {
  const screens = [
    { name: 'CameraScanner', component: CameraScanner, headerShown: false },
    { name: 'MedicineDetails', component: MedicineDetails, title: 'Medicine Details' },
    { name: 'MedicineDoses', component: MedicineDoses, title: '' },
    { name: 'MedicineDailyDoses', component: MedicineDailyDoses, title: '' },
    //{ name: 'CreateAccount', component: CreateAccount, title: '' },
    //{ name: 'ForgotPassword', component: ForgotPassword, title: '' },
    //{ name: 'EnterOtp', component: EnterOtp, title: '' },
    //{ name: 'ResetPassword', component: ResetPassword, title: '' },
    //{ name: 'PasswordChanged', component: PasswordChanged, title: '' },
    { name: 'OnceAdayDose', component: OnceAdayDose, title: '' },
    { name: 'AddedMedicine', component: AddedMedicine, headerShown: false },
    { name: 'MedicineAddingMethod', component: MedicineAddingMethod, title: '' },
    { name: 'AddMedicineManually', component: AddMedicineManually, title: '' },
    { name: 'AddMedicineStrength', component: AddMedicineStrength, title: '' },
    { name: 'MedicineType', component: MedicineType, title: '' },
    { name: 'AddInstructions', component: AddInstructions, title: '' },
    { name: 'SetTreatmentDuration', component: SetTreatmentDuration, title: '' },
    { name: 'MedicineReminders', component: MedicineReminders, title: '' },
    { name: 'DoctorAppointments', component: DoctorAppointments, title: '' },
    { name: 'AddPrescription', component: AddPrescription, title: '' },
    { name: 'TwiceAdayDose', component: TwiceAdayDose, title: '' },
    { name: 'ThreeTimesAdayDose', component: ThreeTimesAdayDose, title: '' },
    { name: 'FourTimesAdayDose', component: FourTimesAdayDose, title: '' },
    { name: 'AskTimeInterval', component: AskTimeInterval, title: '' },
    { name: 'XtimesAdayDose', component: XtimesAdayDose, title: '' },
    { name: 'AskHourInterval', component: AskHourInterval, title: '' },
    { name: 'EveryXhoursDose', component: EveryXhoursDose, title: '' },
    { name: 'WeeklyDose', component: WeeklyDose, title: '' },
    { name: 'WeeklyDoseDetails', component: WeeklyDoseDetails, title: '' },
    { name: 'MonthlyDose', component: MonthlyDose, title: 'Medicine Name' },
    { name: 'MonthlyDoseDetails', component: MonthlyDoseDetails, title: '' },
    { name: 'EveryXdaysDose', component: EveryXdaysDose, title: '' },
    { name: 'EveryXdaysDoseDetails', component: EveryXdaysDoseDetails, title: '' },
    { name: 'EveryXweeksDose', component: EveryXweeksDose, title: 'Medicine Name' },
    { name: 'EveryXweeksDoseDetails', component: EveryXweeksDoseDetails, title: '' },
    { name: 'EveryXmonthsDose', component: EveryXmonthsDose, title: '' },
    { name: 'EveryXmonthsDoseDetails', component: EveryXmonthsDoseDetails, title: '' },
    { name: 'UserDrawer', component: UserDrawerNavigator, headerShown: false }
  ];

  const HeaderLeft: React.FC = (): React.ReactNode => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.backNavigationProperties}>
          <Ionicons name="chevron-back" size={28} color={colors.buttonBg} />
          <Text style={styles.backNavigationText}>Back</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const HeaderRight: React.FC = (): React.ReactNode => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UserDrawer' as never);
        }}>
        <View style={styles.backNavigationProperties}>
          <Text style={styles.backNavigationText}>Cancel</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const defaultHeaderOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.white
    },
    headerTitleStyle: { fontSize: moderateScale(14) },
    headerLeft: HeaderLeft,
    headerRight: HeaderRight
  };

  const firstScanMedName = useSelector((state: RootState) => state.medicineDetails.medicineName);

  return (
    <Stack.Navigator initialRouteName={firstScanMedName !== '' ? 'MedicineDoses' : 'UserDrawer'}>
      {screens.map(({ name, component, title, headerShown = true }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            ...defaultHeaderOptions,
            headerShown,
            headerTitle: title,
            headerTitleAlign: 'center'
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default UserStackNavigator;
