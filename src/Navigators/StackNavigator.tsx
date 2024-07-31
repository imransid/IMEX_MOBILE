import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ScanQrCodeScreen } from '@/Screens';

const Stack = createStackNavigator();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScanQrCode" component={ScanQrCodeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
