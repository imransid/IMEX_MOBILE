import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AddedMedicine,
  AddInstructions,
  AddMedicineManually,
  AddMedicineStrength,
  AddPrescription,
  AskHourInterval,
  AskTimeInterval,
  CameraScanner,
  CreateAccount,
  DoctorAppointments,
  EnterOtp,
  EveryXdaysDose,
  EveryXdaysDoseDetails,
  EveryXhoursDose,
  EveryXmonthsDose,
  EveryXmonthsDoseDetails,
  EveryXweeksDose,
  EveryXweeksDoseDetails,
  ForgotPassword,
  FourTimesAdayDose,
  MedicineAddingMethod,
  MedicineDailyDoses,
  MedicineDetails,
  MedicineDoses,
  MedicineReminders,
  MedicineType,
  MonthlyDose,
  MonthlyDoseDetails,
  OnceAdayDose,
  PasswordChanged,
  ResetPassword,
  ScanQrCode,
  SetTreatmentDuration,
  ThreeTimesAdayDose,
  TwiceAdayDose,
  WeeklyDose,
  WeeklyDoseDetails,
  XtimesAdayDose
} from '../Screens';
import { colors } from '../theme/colors';

import styles from './Styles';

const publicStack = createStackNavigator();

const PublickStackNavigator: any = () => {
  const navigation = useNavigation();
  return (
    <publicStack.Navigator>
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
          headerTitle: 'Medicine Name',
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
        name={'MedicineDoses'}
        component={MedicineDoses}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'MedicineDailyDoses'}
        component={MedicineDailyDoses}
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
        name={'CreateAccount'}
        component={CreateAccount}
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
        name={'ForgotPassword'}
        component={ForgotPassword}
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
        name={'EnterOtp'}
        component={EnterOtp}
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
        name={'ResetPassword'}
        component={ResetPassword}
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
        name={'PasswordChanged'}
        component={PasswordChanged}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'OnceAdayDose'}
        component={OnceAdayDose}
      />
      <publicStack.Screen
        options={{ headerShown: false, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddedMedicine'}
        component={AddedMedicine}
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
        name={'MedicineAddingMethod'}
        component={MedicineAddingMethod}
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
        name={'AddMedicineManually'}
        component={AddMedicineManually}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'AddMedicineStrength'}
        component={AddMedicineStrength}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'MedicineType'}
        component={MedicineType}
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
        name={'AddInstructions'}
        component={AddInstructions}
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
        name={'SetTreatmentDuration'}
        component={SetTreatmentDuration}
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
        name={'MedicineReminders'}
        component={MedicineReminders}
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
        name={'DoctorAppointments'}
        component={DoctorAppointments}
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
        name={'AddPrescription'}
        component={AddPrescription}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'TwiceAdayDose'}
        component={TwiceAdayDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'ThreeTimesAdayDose'}
        component={ThreeTimesAdayDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'FourTimesAdayDose'}
        component={FourTimesAdayDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'AskTimeInterval'}
        component={AskTimeInterval}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'XtimesAdayDose'}
        component={XtimesAdayDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'AskHourInterval'}
        component={AskHourInterval}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXhoursDose'}
        component={EveryXhoursDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'WeeklyDose'}
        component={WeeklyDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'WeeklyDoseDetails'}
        component={WeeklyDoseDetails}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'MonthlyDose'}
        component={MonthlyDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'MonthlyDoseDetails'}
        component={MonthlyDoseDetails}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXdaysDose'}
        component={EveryXdaysDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXdaysDoseDetails'}
        component={EveryXdaysDoseDetails}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXweeksDose'}
        component={EveryXweeksDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXweeksDoseDetails'}
        component={EveryXweeksDoseDetails}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXmonthsDose'}
        component={EveryXmonthsDose}
      />
      <publicStack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Medicine Name',
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
        name={'EveryXmonthsDoseDetails'}
        component={EveryXmonthsDoseDetails}
      />
    </publicStack.Navigator>
  );
};

export default PublickStackNavigator;
