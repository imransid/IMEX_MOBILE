import React, { type FC } from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomUserDrawer, PreviewDoseDetails } from '../Screens';
import { colors } from '../theme/colors';

import styles from './Styles';
import UserBottomTabNavigator from './UserBottomTabNavigator';

const Drawer = createDrawerNavigator();

const getGreeting: any = () => {
  const currentHour = new Date().getHours();

  if (currentHour > 0 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour > 12 && currentHour < 16) {
    return 'Good Noon';
  } else if (currentHour > 16 && currentHour < 18) {
    return 'Good AfterNoon';
  } else if (currentHour > 18 && currentHour < 21) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
};

const UserDrawerNavigator: FC = () => {
  const greetings = getGreeting();
  return (
    <Drawer.Navigator
      initialRouteName="UserBottomTab"
      drawerContent={props => <CustomUserDrawer {...props} />}
      screenOptions={{
        headerTitle: () => (
          <>
            <Text style={styles.usernameText}>Hi, user</Text>
            <Text style={styles.greetingsText}>{greetings}</Text>
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
