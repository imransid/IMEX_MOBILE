import React, { type FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

import DailyDoseLogo from '../../assets/medicine-daily-dose-time';
import Header from '../../Components/Header/Header';
import medicineDailyDoseItems from '../../utils/medicineDailyDoseItems';

import styles from './style';

interface timePeriodItemProps {
  item: string;
  index: number;
}

const MedicineDailyDoses: FC = () => {
  const navigation = useNavigation();

  const RenderItems: React.FC<timePeriodItemProps> = ({ item, index }) => {
    const handlePress: any = () => {
      if (index === 0) {
        navigation.navigate('OnceAdayDose' as never);
      }
    };
    return (
      <TouchableOpacity style={styles.medicineDoseItems} onPress={handlePress}>
        <Text style={styles.medicineDoseItemsText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <View style={styles.imagePosition}>
        <DailyDoseLogo />
      </View>
      <View style={styles.headingPosition}>
        <Header mainHeader="How often do you take it?" />
      </View>

      <FlatList
        style={styles.medicineDoseItemsPosition}
        data={medicineDailyDoseItems}
        renderItem={({ item, index }) => (
          <RenderItems item={item} index={index} key={index.toString()} />
        )}
      />
    </View>
  );
};

export default MedicineDailyDoses;
