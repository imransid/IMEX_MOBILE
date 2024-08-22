import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CameraScanner, Login, MedicineDetails, ScanQrCode } from '../Screens';
import { colors } from '../theme/colors';

const publicStack = createStackNavigator();

const PublickStackNavigator: any = () => {
  return (
    <publicStack.Navigator>
      <publicStack.Screen name={'ScanQrCodeScreen'} component={ScanQrCode} />
      <publicStack.Screen name={'CameraScanner'} component={CameraScanner} />
      <publicStack.Screen name={'MedicineDetails'} component={MedicineDetails} />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTintColor: colors.buttonBg
        }}
        name={'Login'}
        component={Login}
      />
    </publicStack.Navigator>
  );
};

export default PublickStackNavigator;
