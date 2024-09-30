import React, { type FC, useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { type RootState } from '@/store';

import { checkingLoader } from '../store/slices/features/settings/slice';

import PublicStackNavigator from './PublicStackNavigator';
import UserDrawerNavigator from './UserDrawerNavigator';
import UserStackNavigator from './UserStackNavigator';

const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const [isGuest] = useState(true);
  const globalLoaderStatus = useSelector((state: RootState) => state.settings.isLoading);
  const appLoadFirstTime = useSelector((state: RootState) => state.settings.appLoadFirstTime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingLoader());
  }, []);

  return (
    <NavigationContainer>
      {/* {authStatus ? (
        <UserDrawerNavigator />
      ) : appLoadFirstTime ? (
        <PublicStackNavigator />
      ) : (
        <UserStackNavigator />
      )} */}

      {appLoadFirstTime ? (
        <PublicStackNavigator />
      ) : authStatus && !isGuest ? (
        <UserDrawerNavigator />
      ) : (
        <UserStackNavigator />
      )}
      <Spinner visible={globalLoaderStatus} textContent={'Loading...'} />
    </NavigationContainer>
  );
};

export default Navigator;
