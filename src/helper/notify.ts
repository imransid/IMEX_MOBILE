/* eslint-disable */

import moment from 'moment';
import PushNotification, { Importance } from 'react-native-push-notification';

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const localSchedule = async (listOfItem: any[], name: string, medicineId: string) => {
  try {
    // Filter items based on the provided condition
    const alarmData = listOfItem.filter(e => e.medicineLocalId === medicineId);

    // Proceed only if there is data to schedule
    if (alarmData.length > 0) {
      await Promise.all(
        alarmData.map(async e => {
          // Generate fire date and ensure it's in the future
          const fireDate = moment(e.selectedDateTime).toDate();
          if (fireDate <= new Date()) {
            return;
          }

          const alarmNotifData = {
            channelId: 'team-pharmaceuticals',
            ticker: 'Team Pharmaceuticals Notification',
            id: generateRandomNumber(1, 9999803),
            title: `Medication Reminder: ${e.medicineName}`,
            message: `Time to take ${e.doseQuantity} ${e.typeMed}(s) of ${e.medicineName} (${e.strengthMed}). Scheduled dose at ${e.doseTime}.`,
            autoCancel: true,
            vibrate: true,
            vibration: 100,
            smallIcon: 'ic_launcher',
            largeIcon: 'ic_launcher',
            playSound: true,
            soundName: 'alarm_tone',
            color: 'red',
            tag: 'medication_reminder',
            fire_date: fireDate,
            date: { value: moment(e.selectedDateTime).format('YYYY-MM-DD HH:mm:ss') }
          };

          // Schedule the new notification
          PushNotification.localNotificationSchedule({
            autoCancel: true, // (optional)
            channelId: alarmNotifData.channelId,
            title: alarmNotifData.title,
            id: alarmNotifData.id,
            message: alarmNotifData.message,
            date: alarmNotifData.fire_date,
            soundName: alarmNotifData.soundName,
            timeoutAfter: 120000,
            actions: ['Snooze', 'Stop Alarm'],
            importance: Importance.HIGH,
            playSound: true,
            allowWhileIdle: true,
            invokeApp: false,
            repeatType: 'time', // Repeat at custom interval
            repeatTime: 30000 // Repeat every 1 minute (60000 ms)
          });
        })
      );
    } else {
      console.warn('No alarms matched the criteria to schedule.');
    }
  } catch (err) {
    console.error('Failed to set localSchedule due to error:', err);
  }
};
