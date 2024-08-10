import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { type AppStackParamList } from '@/models/routePageModel';

import { CameraScanner, Login, MedicineDetails, MedicineDoses, ScanQrCode } from '../Screens';

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
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
