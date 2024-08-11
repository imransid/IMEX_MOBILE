import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { type AppStackParamList } from '@/models/routePageModel';

import {
  CameraScanner,
  CreateAccount,
  EnterOtp,
  ForgotPassword,
  Login,
  MedicineDailyDoses,
  MedicineDetails,
  MedicineDoses,
  PasswordChanged,
  ResetPassword,
  ScanQrCode
} from '../Screens';

const Stack = createStackNavigator<AppStackParamList>();

export const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
