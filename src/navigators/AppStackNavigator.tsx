import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackNav from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Public"
        component={PublickStackNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Authentication"
        component={AuthStackNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MainTabs" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
