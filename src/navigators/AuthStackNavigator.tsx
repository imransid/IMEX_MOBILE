import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '@/theme/colors';

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

import styles from './Styles';
import UserDrawerNavigator from './UserDrawerNavigator';
import GuestDrawerNavigator from './GuestDrawerNavigator';

const Stack = createStackNavigator();

const screens = [
  { name: 'CameraScanner', component: CameraScanner, headerShown: false },
  { name: 'MedicineDetails', component: MedicineDetails, title: 'Medicine Details' },
  { name: 'MedicineDoses', component: MedicineDoses, title: 'Medicine Name' },
  { name: 'Login', component: Login, title: '' },
  { name: 'MedicineDailyDoses', component: MedicineDailyDoses, title: 'Medicine Name' },
  { name: 'CreateAccount', component: CreateAccount, title: '' },
  { name: 'ForgotPassword', component: ForgotPassword, title: '' },
  { name: 'EnterOtp', component: EnterOtp, title: '' },
  { name: 'ResetPassword', component: ResetPassword, title: '' },
  { name: 'PasswordChanged', component: PasswordChanged, title: '' },
  { name: 'OnceAdayDose', component: OnceAdayDose, title: 'Medicine Name' },
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
  { name: 'TwiceAdayDose', component: TwiceAdayDose, title: 'Medicine Name' },
  { name: 'ThreeTimesAdayDose', component: ThreeTimesAdayDose, title: 'Medicine Name' },
  { name: 'FourTimesAdayDose', component: FourTimesAdayDose, title: 'Medicine Name' },
  { name: 'AskTimeInterval', component: AskTimeInterval, title: 'Medicine Name' },
  { name: 'XtimesAdayDose', component: XtimesAdayDose, title: 'Medicine Name' },
  { name: 'AskHourInterval', component: AskHourInterval, title: 'Medicine Name' },
  { name: 'EveryXhoursDose', component: EveryXhoursDose, title: 'Medicine Name' },
  { name: 'WeeklyDose', component: WeeklyDose, title: 'Medicine Name' },
  { name: 'WeeklyDoseDetails', component: WeeklyDoseDetails, title: 'Medicine Name' },
  { name: 'MonthlyDose', component: MonthlyDose, title: 'Medicine Name' },
  { name: 'MonthlyDoseDetails', component: MonthlyDoseDetails, title: 'Medicine Name' },
  { name: 'EveryXdaysDose', component: EveryXdaysDose, title: 'Medicine Name' },
  { name: 'EveryXdaysDoseDetails', component: EveryXdaysDoseDetails, title: 'Medicine Name' },
  { name: 'EveryXweeksDose', component: EveryXweeksDose, title: 'Medicine Name' },
  { name: 'EveryXweeksDoseDetails', component: EveryXweeksDoseDetails, title: 'Medicine Name' },
  { name: 'EveryXmonthsDose', component: EveryXmonthsDose, title: 'Medicine Name' },
  { name: 'EveryXmonthsDoseDetails', component: EveryXmonthsDoseDetails, title: 'Medicine Name' },
  { name: 'UserDrawer', component: UserDrawerNavigator, headerShown: false },
  { name: 'GuestDrawer', component: GuestDrawerNavigator, headerShown: false }
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

const defaultHeaderOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.white
  },
  headerTitleStyle: { fontSize: moderateScale(14) },
  headerLeft: HeaderLeft
};

const AuthStackNav: any = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
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

export default AuthStackNav;
