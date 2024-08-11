import React, { type FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import * as Progress from 'react-native-progress';

import MedicineLogo from '../../assets/medicine-logo';
import Header from '../../Components/Header/Header';
import chips from '../../utils/chips';

import styles from './style';

interface timePeriodItemProps {
  item: string;
  index: number;
}

const OnceAdayDose: FC = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [date, setDate] = useState(new Date());

  const [open, setOpen] = useState(true);

  const handleSelect: any = (index: number) => {
    if (index === 0) {
      setOpen(!open);
    }
  };

  const RenderItems: React.FC<timePeriodItemProps> = ({ item, index }) => {
    return (
      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <Text style={styles.chipText}>{item}</Text>
          <TouchableOpacity style={styles.selectButton} onPress={() => handleSelect(index)}>
            <Text style={styles.selectButtonText}>
              {selectedTime === '' ? 'Select' : selectedTime}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <View style={styles.imagePosition}>
        <MedicineLogo />
      </View>
      <View style={styles.headingPosition}>
        <Header mainHeader="When do you need to take the dose?" />
      </View>

      <FlatList
        style={styles.chipPosition}
        data={chips}
        renderItem={({ item, index }) => (
          <RenderItems item={item} index={index} key={index.toString()} />
        )}
      />
      <View>
        <DatePicker
          modal
          mode="time"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            const timeStr = new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            }).format(new Date(date));
            setSelectedTime(timeStr);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          theme="dark"
        />
      </View>
    </View>
  );
};

export default OnceAdayDose;
