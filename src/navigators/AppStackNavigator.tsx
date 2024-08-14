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
  EveryXhoursDose,
  ForgotPassword,
  FourTimesAdayDose,
  Login,
  MedicineAddingMethod,
  MedicineDailyDoses,
  MedicineDetails,
  MedicineDoses,
  MedicineReminders,
  MedicineType,
  OnceAdayDose,
  PasswordChanged,
  ResetPassword,
  ScanQrCode,
  SetTreatmentDuration,
  ThreeTimesAdayDose,
  TwiceAdayDose,
  WeeklyDose,
  XtimesAdayDose
} from '../Screens';

const Stack = createStackNavigator<AppStackParamList>();

export const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="MedicineDoses" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ScanQrCodeScreen'} component={ScanQrCode} />
      <Stack.Screen name={'CameraScanner'} component={CameraScanner} />
      <Stack.Screen name={'MedicineDetails'} component={MedicineDetails} />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'Login'}
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'MedicineDoses'}
        component={MedicineDoses}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'MedicineDailyDoses'}
        component={MedicineDailyDoses}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'CreateAccount'}
        component={CreateAccount}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'ForgotPassword'}
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'EnterOtp'}
        component={EnterOtp}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'ResetPassword'}
        component={ResetPassword}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'PasswordChanged'}
        component={PasswordChanged}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'OnceAdayDose'}
        component={OnceAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AddedMedicine'}
        component={AddedMedicine}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'MedicineAddingMethod'}
        component={MedicineAddingMethod}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AddMedicineManually'}
        component={AddMedicineManually}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AddMedicineStrength'}
        component={AddMedicineStrength}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'MedicineType'}
        component={MedicineType}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AddInstructions'}
        component={AddInstructions}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'SetTreatmentDuration'}
        component={SetTreatmentDuration}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'MedicineReminders'}
        component={MedicineReminders}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'DoctorAppointments'}
        component={DoctorAppointments}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AddPrescription'}
        component={AddPrescription}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'TwiceAdayDose'}
        component={TwiceAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'ThreeTimesAdayDose'}
        component={ThreeTimesAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'FourTimesAdayDose'}
        component={FourTimesAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AskTimeInterval'}
        component={AskTimeInterval}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'XtimesAdayDose'}
        component={XtimesAdayDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'AskHourInterval'}
        component={AskHourInterval}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'EveryXhoursDose'}
        component={EveryXhoursDose}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: '' }}
        name={'WeeklyDose'}
        component={WeeklyDose}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
