import React, {useState} from 'react';

const [markedDates, setMarkedDates] = useState({
  '2021-01-20': {
    disabled: true,
    startingDay: true,
    color: 'green',
    endingDay: true,
  },
});

const handleDayPress = day => {
  setMarkedDates({
    [day.dateString]: {
      startingDay: true,
      endingDay: true,
      color: 'orange',
    },
  });
};

const withCalender = OriginalComponent => {
  const NewComponent = () => {
    const [value, setValue] = useState('');

    return (
      <OriginalComponent
        placeholder={'Search'}
        value={value}
        setValue={e => setValue(e)}
      />
    );
  };
  return NewComponent;
};

export default withCalender;
