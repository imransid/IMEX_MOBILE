import { IMedicine } from '@/store/slices/features/medicineDetails/types';
import moment from 'moment';


const multiScheduleMaker = (data: IMedicine[], startDate: string, endDate: string, interval?: number): IMedicine[] => {
    const inputFormat = 'D MMMM, YYYY';
    const start = moment(startDate, inputFormat, true);
    const end = moment(endDate, inputFormat, true);
  
    console.log("start", start, startDate);
    console.log("end", end, endDate);
    console.log("interval", interval);

    console.log("data", data); 
    if (!startDate && !endDate) {
       return data;
    }

    if (!start.isValid() || !end.isValid()) {
      throw new Error(`Invalid start or end date. Ensure dates match format: ${inputFormat}`);
    }
  
    const allSchedules: IMedicine[] = [];
    console.log("start clone", start.clone());

    let currentDate = start.clone();
    console.log("is same", currentDate.isSameOrBefore(end, 'day'));

    // If interval is undefined or 0, process day by day
    if (interval === 0 || interval === undefined) {
      // Loop day by day from start date to end date
      while (currentDate.isSameOrBefore(end, 'day')) {
        console.log("currentDate", currentDate.isSameOrBefore(end, 'day'), currentDate);

        data.forEach((schedule) => {
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
            millisecond: 0,
          });

          const isDuplicate = allSchedules.some(
            (existingSchedule) =>
              existingSchedule.medicineLocalId === schedule.medicineLocalId &&
              moment(existingSchedule.selectedDateTime).isSame(selectedDateTime, 'minute')
          );

          if (!isDuplicate) {
            const newSchedule: IMedicine = {
              ...schedule,
              selectedDateTime: selectedDateTime.toDate(),
            };

            allSchedules.push(newSchedule);
          }
        });

        // Add 1 day if interval is 0, or use the specified interval
        currentDate.add(1, 'days'); // Add 1 day for interval = 0 or undefined
      }
    } else {
      // If interval is greater than 0, loop with the specified gap between dates
      while (currentDate.isSameOrBefore(end, 'day')) {
        console.log("currentDate", currentDate.isSameOrBefore(end, 'day'), currentDate);

        data.forEach((schedule) => {
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
            millisecond: 0,
          });

          const isDuplicate = allSchedules.some(
            (existingSchedule) =>
              existingSchedule.medicineLocalId === schedule.medicineLocalId &&
              moment(existingSchedule.selectedDateTime).isSame(selectedDateTime, 'minute')
          );

          if (!isDuplicate) {
            const newSchedule: IMedicine = {
              ...schedule,
              selectedDateTime: selectedDateTime.toDate(),
            };

            allSchedules.push(newSchedule);
          }
        });

        // Add the specified interval to the current date
        currentDate.add(interval, 'days'); // Add the given interval
      }
    }

    return allSchedules;
};



// const multiScheduleMaker = (data: IMedicine[], startDate: string, endDate: string, interval?: number): IMedicine[] => {
//     const inputFormat = 'D MMMM, YYYY';
//     const start = moment(startDate, inputFormat, true);
//     const end = moment(endDate, inputFormat, true);
  
//     console.log("srat",start,startDate);
//     console.log("end",end,endDate);
//     console.log("interval",interval);

//     console.log("data",data); 
//     if(!startDate && !endDate ){
//        return data 
//     }

//     if (!start.isValid() || !end.isValid()) {
//       throw new Error(`Invalid start or end date. Ensure dates match format: ${inputFormat}`);
//     }

//     const allSchedules: IMedicine[] = [];
//   console.log("sartastr",start.clone())

//   let startingDate = start.clone(); 
//   console.log("is same",startingDate.isSameOrBefore(end, 'day'))
//   console.log("is interval added",startingDate.add(interval, 'days')) 

//     // Iterate over dates starting from 'start' until 'end', with the given interval
//     // for (let currentDate = start.clone(); currentDate.isSameOrBefore(end, 'day'); currentDate.add(interval, 'days')) {
//     //     console.log("currentDate ",currentDate.isSameOrBefore(end, 'day')), currentDate;
//     //   data.forEach((schedule) => {
//     //     // Trim whitespace and validate doseTime format
//     //     console.log(`Parsing doseTime: ${schedule.doseTime}`);
//     //     const doseTime = moment(schedule.doseTime.trim(), 'hh:mm A'); // Remove strict parsing for leniency
  
//     //     if (!doseTime.isValid()) {
//     //       console.error(`Invalid doseTime format: ${schedule.doseTime}`);
//     //       throw new Error(`Invalid doseTime format: ${schedule.doseTime}`);
//     //     }
  
//     //     const selectedDateTime = currentDate.clone().set({
//     //       hour: doseTime.hour(),
//     //       minute: doseTime.minute(),
//     //       second: 0,
//     //       millisecond: 0,
//     //     });
  
//     //     const isDuplicate = allSchedules.some(
//     //       (existingSchedule) =>
//     //         existingSchedule.medicineLocalId === schedule.medicineLocalId &&
//     //         moment(existingSchedule.selectedDateTime).isSame(selectedDateTime, 'minute')
//     //     );
  
//     //     if (!isDuplicate) {
//     //       const newSchedule: IMedicine = {
//     //         ...schedule,
//     //         selectedDateTime: selectedDateTime.toDate(),
//     //       };
  
//     //       allSchedules.push(newSchedule);
//     //     }
//     //   });
//     // }
  
//     return allSchedules;
//   };
  



export { multiScheduleMaker };

