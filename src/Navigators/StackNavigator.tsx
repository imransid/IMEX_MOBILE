import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LetsScanQrCodeScreen from '../Screens/LetsScanQrCodeScreen/LetsScanQrCodeScreen';

const Stack = createStackNavigator();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LetsScanQrCodeScreen" component={LetsScanQrCodeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
