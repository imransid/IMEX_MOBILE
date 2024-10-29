import React, { type FC, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { type RootState } from '@/store';

import { checkingLoader } from '../store/slices/features/settings/slice';

import AuthStackNav from './AuthStackNavigator';
import GuestStackNavigator from './GuestStackNavigator';
import UserStackNavigator from './UserStackNavigator';
import PublicStackNavigator from './PublicStackNavigator';

const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const globalLoaderStatus = useSelector((state: RootState) => state.settings.isLoading);
  const appLoadFirstTime = useSelector((state: RootState) => state.settings.appLoadFirstTime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingLoader());
  }, []);

  console.log('---------------', authStatus);
  console.log('---------------', appLoadFirstTime);

  return (
    // <NavigationContainer>
    //   {!authStatus && appLoadFirstTime ? (
    //     <PublicStackNavigator />
    //   ) : authStatus && !appLoadFirstTime ? (
    //     <UserStackNavigator />
    //   ) : (
    //     <GuestStackNavigator />
    //   )}
    //   <Spinner visible={globalLoaderStatus} textContent={'Loading...'} />
    // </NavigationContainer>

    // <NavigationContainer>
    //   {!authStatus ? <GuestStackNavigator /> : <UserStackNavigator />}
    // </NavigationContainer>
    <NavigationContainer>
      {!authStatus && !appLoadFirstTime ? (
        <GuestStackNavigator />
      ) : authStatus ? (
        <UserStackNavigator />
      ) : (
        <PublicStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
