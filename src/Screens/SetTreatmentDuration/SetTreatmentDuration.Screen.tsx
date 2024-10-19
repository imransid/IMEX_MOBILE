import React, { type FC, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { setExtraTreatmentDuration } from '@/store/slices/features/medicineDetailsExtraSetting/slice';

import TreatmentDuration from '../../assets/treatment-duration';
import CalendarModal from '../../Components/CalendarModal/CalenderModal';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const SetTreatmentDuration: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [startDateModalOpen, setStartDateModalOpen] = useState(false);
  const [endDateModalOpen, setendDateModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [giveInput, setGiveInput] = useState('');

  const handleStartDateSelectInstruction: any = () => {
    setStartDateModalOpen(!startDateModalOpen);
  };
  const handleEndDateSelectInstruction: any = () => {
    setendDateModalOpen(!endDateModalOpen);
  };

  const handleSetStartDate: any = (date: string) => {
    const formattedDate = format(new Date(date), 'd MMMM, yyyy');
    setStartDate(formattedDate);
  };

  const handleSetEndDate: any = (date: string) => {
    const formattedDate = format(new Date(date), 'd MMMM, yyyy');
    setEndDate(formattedDate);
  };

  const handleNext: any = () => {
    dispatch(
      setExtraTreatmentDuration({
        treatmentDurationStartTime: startDate,
        treatmentDurationEndTime: endDate,
        medicineTakeEachDay: giveInput
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="Treatment Duration" />
      </View>
      <View style={styles.imagePosition}>
        <TreatmentDuration />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Select the period of your treatment" />
      </View>

      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Start Date</Text>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => handleStartDateSelectInstruction()}>
              <Text style={styles.selectButtonText}>{startDate !== '' ? startDate : 'Select'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>End Date</Text>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => handleEndDateSelectInstruction()}>
              <Text style={styles.selectButtonText}>{endDate !== '' ? endDate : 'Select'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.medicineInputHeaderPosition}>
          <Text style={styles.medicineInputHeaderText}>
            How many medicine do you take each day?
          </Text>
        </View>
        <View style={styles.medicineInputContent}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setGiveInput}
            keyboardType="numeric"
            style={styles.medicineInput}
            maxLength={3}
          />
          <Text style={styles.medicineText}>Medicine</Text>
        </View>
      </View>

      {startDateModalOpen && (
        <CalendarModal
          modalVisible={startDateModalOpen}
          setModalVisible={setStartDateModalOpen}
          setStartDate={handleSetStartDate}
          modalFOr="startDate"
        />
      )}
      {endDateModalOpen && (
        <CalendarModal
          modalVisible={endDateModalOpen}
          setModalVisible={setendDateModalOpen}
          setEndDate={handleSetEndDate}
          modalFOr="endDate"
        />
      )}

      {startDate !== '' && endDate !== '' && giveInput.trim() !== '' && Number(giveInput) > 0 && (
        <View style={styles.NextbuttonPosition}>
          <CustomButton
            onPress={handleNext}
            icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
            text="Next"
          />
        </View>
      )}
    </View>
  );
};

export default SetTreatmentDuration;
