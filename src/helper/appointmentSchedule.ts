/* eslint-disable */

import moment from 'moment';
import PushNotification, { Importance } from 'react-native-push-notification';

// Generate random unique number for notification ID
function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const appointmentSchedule = async (appointments: any[]) => {
  try {
    // Filter appointments that are in the future
    const futureAppointments = [];
    // appointments.filter(appointment => {
    //   const appointmentDateTime = moment(`${appointment.date} ${appointment.time}`, 'YYYY-MM-DD');

    //   console.log(appointmentDateTime.toLocaleString(), 'appointmentDateTime');
    //   //appointmentDateTime.isBefore(moment());

    //   if (appointmentDateTime.isBefore(moment()) === false) {
    //     return appointment;
    //   }
    // });

    const appointmentDate = appointments.map(e => e.date.toLocaleString());
    console.log(appointmentDate, 'appointmentDate');

    console.log(appointments, 'Appointments');
    console.log(futureAppointments, 'Future Appointments');

    if (futureAppointments.length > 0) {
      await Promise.all(
        futureAppointments.map(async appointment => {
          // Generate fire date and notification data
          // const fireDate = moment(
          //   `${appointment.date} ${appointment.time}`,
          //   'YYYY-MM-DD HH:mm'
          // ).toDate();
          const fireDate = moment(`${appointment.date} ${appointment.time}`).toDate();

          //const fireDate = moment(appointment.selectedDateTime).toDate();

          const notificationData = {
            channelId: 'appointments-channel',
            ticker: 'Appointment Reminder Notification',
            id: generateRandomNumber(1, 9999803),
            title: `Appointment Reminder: ${appointment.doctorName}`,
            message: `You have an appointment with Dr. ${appointment.doctorName} at ${appointment.time} on ${appointment.date}. Location: ${appointment.location}. Reminder: ${appointment.reminder}`,
            autoCancel: true,
            vibrate: true,
            vibration: 100,
            smallIcon: 'ic_launcher',
            largeIcon: 'ic_launcher',
            playSound: true,
            soundName: 'default',
            color: 'blue',
            tag: 'appointment_reminder',
            fire_date: fireDate,
            date: { value: moment(fireDate).format('YYYY-MM-DD HH:mm:ss') }
          };

          // Schedule the notification
          PushNotification.localNotificationSchedule({
            autoCancel: true,
            channelId: notificationData.channelId,
            title: notificationData.title,
            id: notificationData.id,
            message: notificationData.message,
            date: notificationData.fire_date,
            soundName: notificationData.soundName,
            timeoutAfter: 120000,
            actions: ['Snooze', 'Stop Alarm'],
            importance: Importance.HIGH,
            vibrate: true,
            playSound: true,
            allowWhileIdle: true,
            invokeApp: false,
            repeatType: 'time', // Repeat at custom interval
            repeatTime: 30000
          });
        })
      );
    } else {
      console.warn('No future appointments to schedule.');
    }
  } catch (err) {
    console.error('Failed to set appointment schedule due to error:', err);
  }
};
