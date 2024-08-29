import React, { type FC } from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer, PreviewDoseDetails } from '../Screens';
import { colors } from '../theme/colors';

import BottomTabNavigator from './BottomTabNavigator';
import styles from './Styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
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
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} options={{ title: '' }} />
      <Drawer.Screen
        name="PreviewDoseDetails"
        component={PreviewDoseDetails}
        options={{ title: '' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
