import React, { type FC, useEffect, useState } from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import * as Sentry from '@sentry/react-native';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/navigators';
import SplashScreen from './src/Screens/SplashScreen/Splash.Screen';
import { persistor, store } from './src/store';
import { ApolloProvider } from '@apollo/client';
import client from './src/utils/apolloClient';

// import ReactNativeAN from 'react-native-alarm-notification';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow'
  }
};

Sentry.init({
  dsn: 'https://c2a97730d96c05c0a4a86ac98197deab@o4506316960038912.ingest.us.sentry.io/4507920948527104',
  tracesSampleRate: 1.0,
  _experiments: {
    profilesSampleRate: 1.0
  }
});

// const fireDate = '2024-10-22 15:08:00'; // Correct format

// const alarmNotifData = {
//   title: 'My Notification Title',
//   message: 'My Notification Message',
//   channel: 'my_channel_id',
//   small_icon: 'ic_launcher',

//   // You can add any additional data that is important for the notification
//   // It will be added to the PendingIntent along with the rest of the bundle.
//   // e.g.
//   data: { foo: 'bar' }
// };

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // const handleAlarmOperations = async (alarmNotifData, fireDate) => {
  //   try {
  //     // Schedule Future Alarm
  //     const alarm = await ReactNativeAN.scheduleAlarm({
  //       ...alarmNotifData,
  //       fire_date: fireDate
  //     });
  //     console.log('Scheduled Alarm:', alarm); // { id: 1 }

  //     // Delete the Scheduled Alarm
  //     ReactNativeAN.deleteAlarm(alarm.id);

  //     // Delete the Repeating Alarm
  //     ReactNativeAN.deleteRepeatingAlarm(alarm.id);

  //     // Stop the Alarm Sound (if playing)
  //     ReactNativeAN.stopAlarmSound();

  //     // Send a Local Notification Now
  //     ReactNativeAN.sendNotification(alarmNotifData);

  //     // Get All Scheduled Alarms
  //     const alarms = await ReactNativeAN.getScheduledAlarms();
  //     console.log('All Scheduled Alarms:', alarms);

  //     // Clear Notifications from Notification Center/Tray
  //     ReactNativeAN.removeFiredNotification(alarm.id);
  //     ReactNativeAN.removeAllFiredNotifications();
  //   } catch (error) {
  //     console.error('Error in alarm operations:', error);
  //   }
  // };

  // handleAlarmOperations(alarmNotifData, fireDate);

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <PaperProvider theme={theme}>
            {isLoading ? <SplashScreen /> : <Navigator />}
          </PaperProvider>
        </ApolloProvider>
      </PersistGate>
    </StoreProvider>
  );
};

// export default App;

export default Sentry.wrap(App);
