import React, { type FC, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { type RootState } from '@/store';

import { checkingLoader } from '../store/slices/features/settings/slice';

import AuthStackNav from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';
import PublicStackNavigator from './PublicStackNavigator';

const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const globalLoaderStatus = useSelector((state: RootState) => state.settings.isLoading);
  const appLoadFirstTime = useSelector((state: RootState) => state.settings.appLoadFirstTime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingLoader());
  }, []);

  return (
    <NavigationContainer>
      {authStatus ? (
        <DrawerNavigator />
      ) : !appLoadFirstTime ? (
        <PublicStackNavigator />
      ) : (
        <AuthStackNav />
      )}
      <Spinner visible={globalLoaderStatus} textContent={'Loading...'} />
    </NavigationContainer>
  );
};

export default Navigator;
