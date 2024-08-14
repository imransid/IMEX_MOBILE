import React, { type FC, useState } from 'react';
import { View } from 'react-native';
import { DayPicker } from 'react-native-picker-weekday';
import * as Progress from 'react-native-progress';

import DailyDoseLogo from '../../assets/medicine-daily-dose-time';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const WeeklyDose: FC = () => {
  const [weekdays, setWeekdays] = useState([-1]);

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <DailyDoseLogo />
      <Header mainHeader="How many days of a week?" />
      <Header subHeader="Choose Days :" />
      <DayPicker
        wrapperStyles={styles.weekDayPicker}
        dayTextStyle={styles.weekDayText}
        weekdays={weekdays}
        setWeekdays={setWeekdays}
        activeColor={colors.buttonBg}
        textColor="white"
        inactiveColor="grey"
      />
    </View>
  );
};

export default WeeklyDose;
