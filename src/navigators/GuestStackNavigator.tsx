import React, { type FC } from 'react';
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
  Login,
  MedicineAddingMethod,
  MedicineDailyDoses,
  MedicineDoses,
  MedicineReminders,
  MedicineType,
  MonthlyDose,
  MonthlyDoseDetails,
  OnceAdayDose,
  PasswordChanged,
  ResetPassword,
  SetTreatmentDuration,
  ThreeTimesAdayDose,
  TwiceAdayDose,
  WeeklyDose,
  WeeklyDoseDetails,
  XtimesAdayDose
} from '../Screens';
import { colors } from '../theme/colors';

import GuestDrawerNavigator from './GuestDrawerNavigator';
import styles from './Styles';

const Stack = createStackNavigator();

const GuestStackNavigator: FC = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="GuestDrawer"
        component={GuestDrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
        options={{ headerShown: false, headerTitle: '', headerTintColor: colors.buttonBg }}
        name={'AddedMedicine'}
        component={AddedMedicine}
      />
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default GuestStackNavigator;
