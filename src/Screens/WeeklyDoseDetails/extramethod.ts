/* eslint-disable */

import moment from 'moment';

export const getWeekDates = (
  weeklyList: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: Date = new Date()
): { day: string; date: Date }[] => {
  const currentDayIndex = today.getDay(); // Sunday is 0, Monday is 1, etc.

  // Calculate the start of the week (Sunday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDayIndex);

  // Create an array of date objects for each day in `weeklyList`
  const weekDates = weeklyList.map((day, index) => {
    const dayDate = new Date(startOfWeek);
    dayDate.setDate(startOfWeek.getDate() + index); // Increment from the start of the week
    return { day, date: dayDate };
  });

  return weekDates;
};

export const getMothyDates = (
  DayList: string[] = [],
  today: Date = new Date()
): { day: string; date: Date }[] => {
  // Parse the DayList and create date objects using Moment.js
  const isDates = DayList.map(day => {
    // Combine the day string with the current year and use Moment.js to parse it
    const date = moment(`${day} ${today.getFullYear()}`, 'DD MMMM YYYY');

    // Ensure the date is valid
    if (!date.isValid()) {
      console.error(`Invalid date string: ${day}`);
      return null; // Handle invalid date strings
    }

    return {
      day, // The original string from DayList
      date: date.toDate() // The corresponding Date object
    };
  }).filter(item => item !== null); // Remove any invalid date entries

  return isDates;
};

export const getMonthDates = (
  weeklyList: string[] = [],
  today: Date = new Date()
): { day: string; date: Date }[] => {
  const currentYear = today.getFullYear();

  // Parse each date in `weeklyList` and create a Date object for each
  const weekDates = weeklyList.map(dayString => {
    const [day, month] = dayString.split(' '); // Separate day and month
    const date = new Date(`${month} ${day}, ${currentYear}`); // Construct date with current year
    return { day: dayString, date };
  });

  return weekDates;
};

interface TimeEntry {
  doseTime: string;
  doseQuantity: string;
  medicineLocalId: string;
  doseDate: Date;
}

export interface WeeklyDateEntry {
  day: string;
  date: Date;
}

export const setMonthlyDateDoseTimes = (
  time: TimeEntry[],
  weeklyDate: WeeklyDateEntry[]
): TimeEntry[] => {
  let returnData: TimeEntry[] = [];

  time.map(item => {
    weeklyDate.map(e => {
      const [hour, minutePart] = item.doseTime.split(':');
      const minute = parseInt(minutePart.slice(0, 2));
      const isPM = minutePart.slice(-2).toUpperCase() === 'PM';
      let hourNumber = parseInt(hour);

      // Convert hour to 24-hour format
      if (isPM && hourNumber !== 12) {
        hourNumber += 12; // Convert PM hour to 24-hour format
      } else if (!isPM && hourNumber === 12) {
        hourNumber = 0; // Adjust for 12 AM
      }

      const newDoseDate = moment(e.date);
      newDoseDate.set('hour', hourNumber);
      newDoseDate.set('minute', minute);

      // Check if an item with the same doseDate already exists
      const isDuplicate = returnData.some(
        existingItem => existingItem.doseDate?.toISOString() === newDoseDate.toISOString()
      );

      // Only add to returnData if it's not a duplicate
      if (!isDuplicate) {
        let data = {
          doseTime: item.doseTime,
          doseQuantity: item.doseQuantity,
          medicineLocalId: item.medicineLocalId,
          doseDate: newDoseDate
        };

        returnData.push(data);
      }
    });
  });

  returnData.forEach(item => console.log('doseDate:??', item.doseDate.toISOString()));

  return returnData;
};

// export const setWeeklyDateDoseTimes = (
//   time: TimeEntry[],
//   weeklyDate: WeeklyDateEntry[]
// ): TimeEntry[] => {
//   let returnData: TimeEntry[] = [];

//   time.map(item => {
//     weeklyDate.map(e => {
//       const [hour, minutePart] = item.doseTime.split(':');
//       const minute = parseInt(minutePart.slice(0, 2));
//       const isPM = minutePart.slice(-2).toUpperCase() === 'PM';
//       let hourNumber = parseInt(hour);

//       // Convert hour to 24-hour format
//       if (isPM && hourNumber !== 12) {
//         hourNumber += 12; // Convert PM hour to 24-hour format
//       } else if (!isPM && hourNumber === 12) {
//         hourNumber = 0; // Adjust for 12 AM
//       }

//       const newDoseDate = moment(e.date);
//       newDoseDate.set('hour', hourNumber);
//       newDoseDate.set('minute', minute);

//       // Check if an item with the same doseDate already exists
//       const isDuplicate = returnData.some(
//         existingItem => existingItem.doseDate?.toISOString() === newDoseDate.toISOString()
//       );

//       // Only add to returnData if it's not a duplicate
//       if (!isDuplicate) {
//         let data = {
//           doseTime: item.doseTime,
//           doseQuantity: item.doseQuantity,
//           medicineLocalId: item.medicineLocalId,
//           doseDate: newDoseDate
//         };

//         returnData.push(data);
//       }
//     });
//   });

//   returnData.forEach(item => console.log('doseDate:??', item.doseDate.toISOString()));

//   return returnData;
// };

export const setWeeklyDateDoseTimes = (
  time: TimeEntry[],
  weeklyDate: WeeklyDateEntry[]
): TimeEntry[] => {
  let returnData: TimeEntry[] = [];

  time.forEach(item => {
    weeklyDate.forEach(e => {
      const [hour, minutePart] = item.doseTime.split(':');
      const minute = parseInt(minutePart.slice(0, 2));
      const isPM = minutePart.slice(-2).toUpperCase() === 'PM';
      let hourNumber = parseInt(hour);

      // Convert hour to 24-hour format
      if (isPM && hourNumber !== 12) {
        hourNumber += 12;
      } else if (!isPM && hourNumber === 12) {
        hourNumber = 0;
      }

      // Create a new date with correct time
      const newDoseDate = moment(e.date).startOf('day');
      newDoseDate.set('hour', hourNumber);
      newDoseDate.set('minute', minute);

      // Check for duplicates
      const isDuplicate = returnData.some(
        existingItem => existingItem.doseDate?.toISOString() === newDoseDate.toISOString()
      );

      if (!isDuplicate) {
        returnData.push({
          doseTime: item.doseTime,
          doseQuantity: item.doseQuantity,
          medicineLocalId: item.medicineLocalId,
          doseDate: newDoseDate.toDate() // Convert back to a Date object
        });
      }
    });
  });

  return returnData;
};

export const mergeWeeklyDataWithDoseTimes = (
  weeklyData: WeeklyDateEntry[],
  doseTimes: TimeEntry[]
): Array<WeeklyDateEntry & Partial<TimeEntry>> => {
  // console.log('weeklyData', weeklyData, 'doseTimes', doseTimes);

  return weeklyData.map((dayEntry, index) => {
    const doseTimeEntry = doseTimes[index];
    return {
      ...dayEntry,
      doseTime: doseTimeEntry?.doseTime || '',
      doseQuantity: doseTimeEntry?.doseQuantity || '',
      medicineLocalId: doseTimeEntry?.medicineLocalId || '',
      doseDate: doseTimeEntry?.doseDate || dayEntry.date
    };
  });
};
