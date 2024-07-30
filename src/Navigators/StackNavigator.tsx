import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../src/Screens/HomeScreen/HomeScreen';
import LetsScanQrCodeScreen from '../Screens/LetsScanQrCodeScreen/LetsScanQrCodeScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LetsScanQrCodeScreen" component={LetsScanQrCodeScreen} />
    </Stack.Navigator>
  );
}
