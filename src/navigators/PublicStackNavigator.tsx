import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CameraScanner, Login, MedicineDetails, ScanQrCode } from '../Screens';
import { colors } from '../theme/colors';

import styles from './Styles';

const publicStack = createStackNavigator();

const PublicStackNavigator: any = () => {
  const navigation = useNavigation();
  return (
    <publicStack.Navigator initialRouteName="ScanQrCodeScreen">
      <publicStack.Screen
        name={'ScanQrCodeScreen'}
        component={ScanQrCode}
        options={{ headerShown: false }}
      />
      <publicStack.Screen
        name={'CameraScanner'}
        component={CameraScanner}
        options={{ headerShown: false }}
      />
      <publicStack.Screen
        name={'MedicineDetails'}
        component={MedicineDetails}
        options={{
          headerShown: true,
          headerTitle: 'Medicine Details',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.white
          },
          headerTitleStyle: { fontSize: moderateScale(14) },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={styles.backNavigationProperties}>
                <Ionicons name="chevron-back" size={28} color={colors.buttonBg} />
                <Text style={styles.backNavigationText}>Back</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.white
          },
          headerTitleStyle: { fontSize: moderateScale(14) },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={styles.backNavigationProperties}>
                <Ionicons name="chevron-back" size={28} color={colors.buttonBg} />
                <Text style={styles.backNavigationText}>Back</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        name={'Login'}
        component={Login}
      />
    </publicStack.Navigator>
  );
};

export default PublicStackNavigator;
