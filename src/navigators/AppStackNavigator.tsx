import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { type AppStackParamList } from '@/models/routePageModel';

import { CameraScanner, ScanQrCodeScreen } from '../Screens';

const Stack = createStackNavigator<AppStackParamList>();

export const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ScanQrCodeScreen'} component={ScanQrCodeScreen} />
      <Stack.Screen name={'CameraScanner'} component={CameraScanner} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
