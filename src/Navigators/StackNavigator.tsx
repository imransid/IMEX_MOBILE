import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen/Home';
import ScanQrCode from '../Screens/ScanQrCode/ScanQrCode';

const Stack = createStackNavigator();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScanQrCode" component={ScanQrCode} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
