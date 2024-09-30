import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AddedMedicine,
  AddMedicineManually,
  AddMedicineStrength,
  CameraScanner,
  Login,
  MedicineAddingMethod,
  MedicineDailyDoses,
  MedicineDetails,
  MedicineDoses,
  OnceAdayDose,
  ScanQrCode
} from '../Screens';
import { colors } from '../theme/colors';

import styles from './Styles';

const publicStack = createStackNavigator();

const screens = [
  { name: 'MedicineDailyDoses', component: MedicineDailyDoses, title: 'Medicine Name' },
  { name: 'OnceAdayDose', component: OnceAdayDose, title: 'Medicine Name' },
  { name: 'AddedMedicine', component: AddedMedicine, headerShown: false },
  { name: 'MedicineAddingMethod', component: MedicineAddingMethod, title: '' },
  { name: 'AddMedicineManually', component: AddMedicineManually, title: '' },
  { name: 'AddMedicineStrength', component: AddMedicineStrength, title: 'Medicine Name' },
  { name: 'MedicineDoses', component: MedicineDoses, title: 'Medicine Name' }
];

const HeaderLeft: React.FC = (): React.ReactNode => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <View style={styles.backNavigationProperties}>
        <Ionicons name="chevron-back" size={28} color={colors.buttonBg} />
        <Text style={styles.backNavigationText}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

const defaultHeaderOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.white
  },
  headerTitleStyle: { fontSize: moderateScale(14) },
  headerLeft: HeaderLeft
};

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

      {screens.map(({ name, component, title, headerShown = true }) => (
        <publicStack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            ...defaultHeaderOptions,
            headerShown,
            headerTitle: title
          }}
        />
      ))}
    </publicStack.Navigator>
  );
};

export default PublicStackNavigator;
