import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DrawerNav from './DrawerNav';
import CustomHeader from './Drawer/CustomHeader';
import {createStackNavigator} from '@react-navigation/stack';
import ApiSetupScreen from '../screen/ApiSetupScreen';
import SignIn from '../screen/SignIn';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const screen = useSelector(state => state.api.level);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screen === 1 ? (
        <Stack.Screen name="SignIn" component={SignIn} />
      ) : (
        <Stack.Screen name="ApiSetupScreen" component={ApiSetupScreen} />
      )}
    </Stack.Navigator>
  );
};

export default function Nav() {
  const isLogged = useSelector(state => state.user.islogged);

  return (
    <NavigationContainer>
      {!isLogged ? (
        <MainStackNavigator />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerMode: 'screen',
            headerTintColor: '#404554',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            header: props => {
              return <CustomHeader {...props} />;
            },
          }}>
          <Stack.Screen name="MainDrawer" component={DrawerNav} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
