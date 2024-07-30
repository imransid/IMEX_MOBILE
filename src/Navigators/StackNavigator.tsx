import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen } from '@/Screens';

const Stack = createStackNavigator();

export const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};
