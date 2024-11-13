/* eslint-disable */

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

export const setWeeklyDateDoseTimes = (
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

      const newDoseDate = new Date(e.date);
      newDoseDate.setHours(hourNumber, minute, 0, 0);

      // Check if an item with the same doseDate already exists
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
