import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Box, FormControl, Input, Stack} from 'native-base';
import {Subheading} from 'react-native-paper';

const Calendars = ({valueDate, keyDate, updateDateValue}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(valueDate);

  const [markedDates, setMarkedDates] = useState({
    '2021-04-20': {
      // disabled: true,
      startingDay: true,
      color: 'orange',
      endingDay: true,
    },
  });

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,
        endingDay: true,
        color: 'orange',
      },
    });
    updateDateValue(keyDate, day.dateString);
    setShowCalender(false);
  };

  return (
    <>
      {showCalender ? (
        <Calendar
          markedDates={markedDates}
          markingType={'period'}
          onDayPress={handleDayPress}
        />
      ) : (
        <Box>
          {/* <FormControl mb="5"> */}
          <TouchableOpacity
            onPress={() => setShowCalender(true)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#c3c3c3',
              borderWidth: 1,
              borderRadius: 5,
              height: 60,
            }}>
            <Subheading>{selectedDate}</Subheading>
          </TouchableOpacity>
          {/* </FormControl> */}
        </Box>
      )}
    </>
  );
};

export default Calendars;
