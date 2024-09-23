import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '@/theme/colors';

import { Login } from '../Screens';

import styles from './Styles';

const Stack = createStackNavigator();

const AuthStackNav: any = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default AuthStackNav;
