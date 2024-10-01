import React, { type FC } from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomUserDrawer, PreviewDoseDetails } from '../Screens';
import { colors } from '../theme/colors';

import styles from './Styles';
import UserBottomTabNavigator from './UserBottomTabNavigator';

const Drawer = createDrawerNavigator();

const UserDrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="UserBottomTab"
      drawerContent={props => <CustomUserDrawer {...props} />}
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
        name="UserBottomTab"
        component={UserBottomTabNavigator}
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

export default UserDrawerNavigator;
