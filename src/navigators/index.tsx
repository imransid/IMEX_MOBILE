/* eslint-disable */
import React, { FC, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { CameraScanner, CreateAccount, ForgotPassword, Login, MedicineDetails } from '../Screens';
import { RootState } from '@/store';
import { checkingLoader } from '../store/slices/features/settings/slice';
import AuthStackNav from './AuthStackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanQrCodeScreen from '@/Screens/ScanQrCode/ScanQrCode.Screen';
import UserDrawerNavigator from './UserDrawerNavigator';

const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const appLoadFirstTime = useSelector((state: RootState) => state.settings.appLoadFirstTime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingLoader());
  }, []);

  const Stack = createNativeStackNavigator();

  const InitialLoadTime = () => {
    return (
      <Stack.Navigator
        initialRouteName={'ScanQrCodeScreen'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="ScanQrCodeScreen" component={ScanQrCodeScreen} />
        <Stack.Screen name="CameraScanner" component={CameraScanner} />
        <Stack.Screen name="MedicineDetails" component={MedicineDetails} />
      </Stack.Navigator>
    );
  }


  const UserStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {
          authStatus ? <Stack.Screen name="UserDrawerNavigator" component={UserDrawerNavigator} /> : <Stack.Screen name="AuthStackNav" component={AuthStackNav} />
        }
      </Stack.Navigator>
    );
  }

  return (
    <GestureHandlerRootView >
      <NavigationContainer>
        {appLoadFirstTime ? <InitialLoadTime /> : <UserStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigator;
