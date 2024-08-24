import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator initialRouteName="Today">
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
