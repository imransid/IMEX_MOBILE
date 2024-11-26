import { IMedicine } from '@/store/slices/features/medicineDetails/types';
import moment from 'moment';

// export interface IMedicine {
//   medicineName: string;
//   medicineStatus: string;
//   takeStatus: string;
//   doseQuantity: string;
//   doseTime: string;
//   strengthMed?: string;
//   unitMed?: string;
//   typeMed?: string;
//   medicineId?: string;
//   medicineLocalId: string;
//   createdDate: string;
//   selectedDateTime: Date | null | moment.Moment;
// }

const multiScheduleMaker = (
  data: IMedicine[],
  startDate: string,
  endDate: string,
  interval?: number
): IMedicine[] => {
  const inputFormat = 'D MMMM, YYYY';
  const start = moment(startDate, inputFormat, true);
  const end = moment(endDate, inputFormat, true);

  if (!startDate && !endDate) {
    return data;
  }

  if (!start.isValid() || !end.isValid()) {
    throw new Error(`Invalid start or end date. Ensure dates match format: ${inputFormat}`);
  }

  const allSchedules: IMedicine[] = [];

  // Iterate over dates starting from 'start' until 'end', with the given interval
  for (
    let currentDate = start.clone();
    currentDate.isSameOrBefore(end, 'day');
    currentDate.add(interval, 'days')
  ) {
    data.forEach(schedule => {
      // Trim whitespace and validate doseTime format
      console.log(`Parsing doseTime: ${schedule.doseTime}`);
      const doseTime = moment(schedule.doseTime.trim(), 'hh:mm A'); // Remove strict parsing for leniency

      if (!doseTime.isValid()) {
        console.error(`Invalid doseTime format: ${schedule.doseTime}`);
        throw new Error(`Invalid doseTime format: ${schedule.doseTime}`);
      }

      const selectedDateTime = currentDate.clone().set({
        hour: doseTime.hour(),
        minute: doseTime.minute(),
        second: 0,
        millisecond: 0
      });

      const isDuplicate = allSchedules.some(
        existingSchedule =>
          existingSchedule.medicineLocalId === schedule.medicineLocalId &&
          moment(existingSchedule.selectedDateTime).isSame(selectedDateTime, 'minute')
      );

      if (!isDuplicate) {
        const newSchedule: IMedicine = {
          ...schedule,
          selectedDateTime: selectedDateTime.toDate()
        };

        allSchedules.push(newSchedule);
      }
    });
  }

  return allSchedules;
};

// const multiScheduleMaker = (data: IMedicine[], startDate: string, endDate: string): IMedicine[] => {
//     const inputFormat = 'D MMMM, YYYY';
//     const start = moment(startDate, inputFormat, true);
//     const end = moment(endDate, inputFormat, true);

//     if (!start.isValid() || !end.isValid()) {
//       throw new Error(`Invalid start or end date. Ensure dates match format: ${inputFormat}`);
//     }

//     const allSchedules: IMedicine[] = [];

//     for (let currentDate = start.clone(); currentDate.isSameOrBefore(end, 'day'); currentDate.add(1, 'day')) {
//       data.forEach((schedule) => {
//         // Trim whitespace and validate doseTime format
//         console.log(`Parsing doseTime: ${schedule.doseTime}`);
//         const doseTime = moment(schedule.doseTime.trim(), 'hh:mm A'); // Remove strict parsing for leniency

//         if (!doseTime.isValid()) {
//           console.error(`Invalid doseTime format: ${schedule.doseTime}`);
//           throw new Error(`Invalid doseTime format: ${schedule.doseTime}`);
//         }

//         const selectedDateTime = currentDate.clone().set({
//           hour: doseTime.hour(),
//           minute: doseTime.minute(),
//           second: 0,
//           millisecond: 0,
//         });

//         const isDuplicate = allSchedules.some(
//           (existingSchedule) =>
//             existingSchedule.medicineLocalId === schedule.medicineLocalId &&
//             moment(existingSchedule.selectedDateTime).isSame(selectedDateTime, 'minute')
//         );

//         if (!isDuplicate) {
//           const newSchedule: IMedicine = {
//             ...schedule,
//             selectedDateTime: selectedDateTime.toDate(),
//           };

//           allSchedules.push(newSchedule);
//         }
//       });
//     }

//     return allSchedules;
//   };

// const multiScheduleMaker = (data: IMedicine[], startDate: string, endDate: string) => {
//     // Ensure startDate and endDate are valid by appending a default time
//     const start = moment(`${startDate} 00:00:00`, 'YYYY-MM-DD HH:mm:ss');
//     const end = moment(`${endDate} 00:00:00`, 'YYYY-MM-DD HH:mm:ss');
//   console.log("start",start)
//   console.log("end",end)
//     // Validate startDate and endDate
//     if (!start.isValid() || !end.isValid()) {
//       throw new Error('Invalid start or end date');
//     }

//     // Array to store the final schedules
//     let allSchedules: IMedicine[] = [...data];

//     // Generate new schedules for each day in the range
//     for (let currentDate = start; currentDate.isSameOrBefore(end, 'day'); currentDate.add(1, 'day')) {
//       data.forEach((schedule) => {
//         // Parse the doseTime to extract the hour and minute
//         const doseTime = moment(schedule.doseTime, 'hh:mm A');
//         if (!doseTime.isValid()) {
//           throw new Error(`Invalid doseTime format: ${schedule.doseTime}`);
//         }

//         const selectedDateTime = currentDate.clone().set({
//           hour: doseTime.hour(),
//           minute: doseTime.minute(),
//           second: 0,
//           millisecond: 0,
//         });

//         // Create a new schedule entry
//         const newSchedule: IMedicine = {
//           ...schedule,
//           selectedDateTime: selectedDateTime,
//         };

//         // Add the new schedule to the array
//         allSchedules.push(newSchedule);
//       });
//     }

//     return allSchedules;
//   };
// const multiScheduleMaker = (
//     data: IMedicine[], // Array of DoseData
//     startDate?: string, // Format: 'YYYY-MM-DD'
//     endDate?: string // Format: 'YYYY-MM-DD'
//   ): IMedicine[] => {
//     if (!startDate || !endDate) {
//       // If no startDate or endDate, return the original data
//       return data;
//     }

//     const start = moment(startDate, 'YYYY-MM-DD');
//     const end = moment(endDate, 'YYYY-MM-DD');
//     if (!start.isValid() || !end.isValid() || end.isBefore(start)) {
//       throw new Error('Invalid startDate or endDate');
//     }

//     const newData: IMedicine[] = [];

//     // Iterate through the original data
//     data.forEach((schedule) => {
//       newData.push(schedule); // Keep the original data

//       // Generate new schedules for the date range
//       let currentDate = start.clone();
//       while (currentDate.isSameOrBefore(end)) {
//         const newSchedule: IMedicine = {
//           ...schedule,
//           createdDate: currentDate.format('YYYY-MM-DD'),
//           selectedDateTime: moment(
//             `${currentDate.format('YYYY-MM-DD')}T${schedule.doseTime}`
//           ),
//         };
//         newData.push(newSchedule);
//         currentDate.add(1, 'day'); // Move to the next day
//       }
//     });

//     return newData;
//   };

export { multiScheduleMaker };

// [
//     {
//         "medicineLocalId": "97588968-ec27-4761-8b84-86e41798b3f0",
//         "medicineName": "Ghhhh",
//         "medicineStatus": "Daily",
//         "takeStatus": "Once a Day",
//         "doseQuantity": "3",
//         "doseTime": "5:08 PM",
//         "strengthMed": "3",
//         "unitMed": "mg",
//         "typeMed": "Capsule",
//         "medicineId": "R@f@",
//         "createdDate": "2024-11-26 17:07:26",
//         "selectedDateTime": "2024-11-26T11:08:00.000Z"
//     },
//     {
//         "medicineLocalId": "97588968-ec27-4761-8b84-86e41798b3f0",
//         "medicineName": "Ghhhh",
//         "medicineStatus": "Daily",
//         "takeStatus": "Once a Day",
//         "doseQuantity": "3",
//         "doseTime": "5:08 PM",
//         "strengthMed": "3",
//         "unitMed": "mg",
//         "typeMed": "Capsule",
//         "medicineId": "R@f@",
//         "createdDate": "2024-11-26 17:07:26",
//         "selectedDateTime": "2024-11-27T11:08:00.000Z"
//     },
//     {
//         "medicineLocalId": "97588968-ec27-4761-8b84-86e41798b3f0",
//         "medicineName": "Ghhhh",
//         "medicineStatus": "Daily",
//         "takeStatus": "Once a Day",
//         "doseQuantity": "3",
//         "doseTime": "5:08 PM",
//         "strengthMed": "3",
//         "unitMed": "mg",
//         "typeMed": "Capsule",
//         "medicineId": "R@f@",
//         "createdDate": "2024-11-26 17:07:26",
//         "selectedDateTime": "2024-11-28T11:08:00.000Z"
//     },
//     {
//         "medicineLocalId": "97588968-ec27-4761-8b84-86e41798b3f0",
//         "medicineName": "Ghhhh",
//         "medicineStatus": "Daily",
//         "takeStatus": "Once a Day",
//         "doseQuantity": "3",
//         "doseTime": "5:08 PM",
//         "strengthMed": "3",
//         "unitMed": "mg",
//         "typeMed": "Capsule",
//         "medicineId": "R@f@",
//         "createdDate": "2024-11-26 17:07:26",
//         "selectedDateTime": "2024-11-29T11:08:00.000Z"
//     },
//     {
//         "medicineLocalId": "97588968-ec27-4761-8b84-86e41798b3f0",
//         "medicineName": "Ghhhh",
//         "medicineStatus": "Daily",
//         "takeStatus": "Once a Day",
//         "doseQuantity": "3",
//         "doseTime": "5:08 PM",
//         "strengthMed": "3",
//         "unitMed": "mg",
//         "typeMed": "Capsule",
//         "medicineId": "R@f@",
//         "createdDate": "2024-11-26 17:07:26",
//         "selectedDateTime": "2024-11-30T11:08:00.000Z"
//     }
// ]
