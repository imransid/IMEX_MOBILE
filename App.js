import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {Root, StyleProvider, NativeBaseProvider} from 'native-base';
import {PersistGate} from 'redux-persist/integration/react';
import store from './config/Store';
import Router from './route/';

import OfflineNotice from '../src/components/OfflineNotice';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <NativeBaseProvider>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <SafeAreaView style={styles.container}>
            {isOffline ? <OfflineNotice /> : <Router />}
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
