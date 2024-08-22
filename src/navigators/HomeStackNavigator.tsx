import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../Screens';

const HomeStack = createStackNavigator();

const HomeStackNavigator: any = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
