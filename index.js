/* eslint-disable */

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

PushNotification.configure({
  onRegister: function (token) {},
  onNotification: function (notification) {
    if (notification.action === 'Stop Alarm') {
      PushNotification.cancelLocalNotification({ id: notification.id });
      console.log('Notification stopped:', notification.id);
    }
  },

  onAction: function (notification) {},

  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
