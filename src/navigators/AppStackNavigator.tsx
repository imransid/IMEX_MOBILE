import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { type AppStackParamList } from '@/models/routePageModel';

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
  HomeScreen,
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
  ScanQrCode,
  SetTreatmentDuration,
  ThreeTimesAdayDose,
  TwiceAdayDose,
  WeeklyDose,
  WeeklyDoseDetails,
  XtimesAdayDose
} from '../Screens';
import { colors } from '../theme/colors';

const Stack = createStackNavigator<AppStackParamList>();

export const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ScanQrCodeScreen'} component={ScanQrCode} />
      <Stack.Screen name={'CameraScanner'} component={CameraScanner} />
      <Stack.Screen name={'MedicineDetails'} component={MedicineDetails} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTintColor: colors.buttonBg
        }}
        name={'Login'}
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineDoses'}
        component={MedicineDoses}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineDailyDoses'}
        component={MedicineDailyDoses}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'CreateAccount'}
        component={CreateAccount}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'ForgotPassword'}
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EnterOtp'}
        component={EnterOtp}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'ResetPassword'}
        component={ResetPassword}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'PasswordChanged'}
        component={PasswordChanged}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'OnceAdayDose'}
        component={OnceAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddedMedicine'}
        component={AddedMedicine}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineAddingMethod'}
        component={MedicineAddingMethod}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddMedicineManually'}
        component={AddMedicineManually}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddMedicineStrength'}
        component={AddMedicineStrength}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineType'}
        component={MedicineType}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddInstructions'}
        component={AddInstructions}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'SetTreatmentDuration'}
        component={SetTreatmentDuration}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MedicineReminders'}
        component={MedicineReminders}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'DoctorAppointments'}
        component={DoctorAppointments}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddPrescription'}
        component={AddPrescription}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'TwiceAdayDose'}
        component={TwiceAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'ThreeTimesAdayDose'}
        component={ThreeTimesAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'FourTimesAdayDose'}
        component={FourTimesAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AskTimeInterval'}
        component={AskTimeInterval}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'XtimesAdayDose'}
        component={XtimesAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AskHourInterval'}
        component={AskHourInterval}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXhoursDose'}
        component={EveryXhoursDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'WeeklyDose'}
        component={WeeklyDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'WeeklyDoseDetails'}
        component={WeeklyDoseDetails}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MonthlyDose'}
        component={MonthlyDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'MonthlyDoseDetails'}
        component={MonthlyDoseDetails}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXdaysDose'}
        component={EveryXdaysDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXdaysDoseDetails'}
        component={EveryXdaysDoseDetails}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXweeksDose'}
        component={EveryXweeksDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXweeksDoseDetails'}
        component={EveryXweeksDoseDetails}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXmonthsDose'}
        component={EveryXmonthsDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'EveryXmonthsDoseDetails'}
        component={EveryXmonthsDoseDetails}
      />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
