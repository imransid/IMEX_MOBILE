import React, { type FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { PreviewDoseDetails } from '../Screens';

import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator>
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
