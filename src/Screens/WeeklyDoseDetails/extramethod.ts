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

interface WeeklyDateEntry {
  day: string;
  date: Date;
}

export const setWeeklyDateDoseTimes = (
  time: TimeEntry[],
  weeklyDate: WeeklyDateEntry[]
): TimeEntry[] =>
  time.map(item => {
    const doseDate = new Date(item.doseDate);
    const doseDayIndex = doseDate.getDay();

    const matchingDay = weeklyDate.find((_, index) => index === doseDayIndex);
    if (!matchingDay) return item;

    const [hour, minutePart] = item.doseTime.split(':');
    const minute = parseInt(minutePart.slice(0, 2));
    const isPM = minutePart.slice(-2).toUpperCase() === 'PM';
    let hourNumber = parseInt(hour);

    if (isPM && hourNumber < 12) hourNumber += 12;
    if (!isPM && hourNumber === 12) hourNumber = 0;

    const newDoseDate = new Date(matchingDay.date);
    newDoseDate.setHours(hourNumber, minute, 0, 0);

    return { ...item, doseDate: newDoseDate };
  });

export const mergeWeeklyDataWithDoseTimes = (
  weeklyData: WeeklyDateEntry[],
  doseTimes: TimeEntry[]
): Array<WeeklyDateEntry & Partial<TimeEntry>> =>
  weeklyData.map((dayEntry, index) => {
    const doseTimeEntry = doseTimes[index];
    return {
      ...dayEntry,
      doseTime: doseTimeEntry?.doseTime || '',
      doseQuantity: doseTimeEntry?.doseQuantity || '',
      medicineLocalId: doseTimeEntry?.medicineLocalId || '',
      doseDate: doseTimeEntry?.doseDate || dayEntry.date
    };
  });
