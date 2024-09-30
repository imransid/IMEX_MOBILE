import React, { type FC } from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer, PreviewDoseDetails } from '../Screens';
import { colors } from '../theme/colors';

import GuestBottomTabNavigator from './GuestBottomTabNavigator';
import styles from './Styles';

const Drawer = createDrawerNavigator();

const GuestDrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="GuestBottomTab"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitle: () => (
          <>
            <Text style={styles.usernameText}>Hi, guest</Text>
            <Text style={styles.greetingsText}>Good Morning</Text>
          </>
        ),
        headerTintColor: colors.buttonBg
      }}>
      <Drawer.Screen
        name="GuestBottomTab"
        component={GuestBottomTabNavigator}
        options={{ title: '' }}
      />
      <Drawer.Screen
        name="PreviewDoseDetails"
        component={PreviewDoseDetails}
        options={{ title: '' }}
      />
    </Drawer.Navigator>
  );
};

export default GuestDrawerNavigator;
