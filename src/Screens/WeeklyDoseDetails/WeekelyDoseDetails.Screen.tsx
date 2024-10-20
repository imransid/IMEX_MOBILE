import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { type RootState } from '@/store';

import MedicineLogo from '../../assets/medicine-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import DoseInputModal from '../../Components/DoseInputModal/DoseInputModal';
import MoreSettings from '../../Components/MoreSettingsComponent/MoreSettingsComponent';
import { colors } from '../../theme/colors';

import {
  setDoseList,
  setDoseQuantity,
  setDoseTime
} from '@/store/slices/features/medicineDetails/slice';

import styles from './style';
import ToastPopUp from '@/utils/Toast.android';
import axios from 'axios';
import { BASE_URL } from '@/utils/environment';
import { APPOINTMENT_MUTATION } from '@/mutations/appointment_mutation';

const WeeklyDoseDetails: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const timeInterval = useSelector((state: RootState) => state.medicineDetails.timeInterval);

  // State for time and dose for each intake
  const [times, setTimes] = useState<string[]>(
    Array(timeInterval !== '' ? parseInt(timeInterval) : 0).fill('')
  );
  const [doses, setDoses] = useState<number[]>(
    Array(timeInterval !== '' ? parseInt(timeInterval) : 0).fill(0)
  );

  const [open, setOpen] = useState(false); // for time picker
  const [isModalVisible, setModalVisible] = useState(false); // for dose input
  const [selectedChip, setSelectedChip] = useState<number | null>(null); // to track which chip is being modified
  const [date, setDate] = useState(new Date());

  const handleSelectTime: any = (index: number) => {
    setSelectedChip(index);
    setOpen(true);
  };

  const handleSelectDose: any = (index: number) => {
    setSelectedChip(index);
    setModalVisible(true);
  };

  const clearTimeSelection: any = (index: number) => {
    setTimes(prevTimes => {
      const newTimes = [...prevTimes];
      newTimes[index] = '';
      return newTimes;
    });
  };

  const clearDoseSelection: any = (index: number) => {
    setDoses(prevDoses => {
      const newDoses = [...prevDoses];
      newDoses[index] = 0;
      return newDoses;
    });
  };

  const handleSubmit: any = (inputValue: number) => {
    if (selectedChip !== null) {
      dispatch(setDoseQuantity({ doseQuantity: inputValue.toString() }));

      // setDoseQuantity
      setDoses(prevDoses => {
        const newDoses = [...prevDoses];
        newDoses[selectedChip] = inputValue;
        return newDoses;
      });
      setModalVisible(false);
    }
  };

  // const handleNext: any = () => {
  //   navigation.navigate('AddedMedicine' as never);
  // };

  const handleNext: any = async () => {
    const mutation = `
    mutation {
      medicineDetails(medicineInput: {
        medicineName: "${medicineName}", 
        doseTime: "${doseTime}", 
        doseQuantity: "${doseQuantity}", 
        medicineStatus: "${medicineStatus}", 
        takeStatus: "${takeStatus}"
      }) {
        message
        medicineId
      }
    }
    `;

    try {
      const response = await axios.post(
        BASE_URL,
        { query: mutation },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Check if registration was successful
      if (
        response?.data?.data?.medicineDetails?.message !== undefined &&
        response?.data?.data?.medicineDetails?.message !== null
      ) {
        let updatedStoredList = [...storedMedicineList];

        let data = {
          medicineName: medicineName,
          medicineStatus: medicineStatus,
          takeStatus: takeStatus,
          doseQuantity: doseQuantity,
          doseTime: doseTime,
          strengthMed: strengthMed,
          unitMed: unitMed,
          typeMed: typeMed,
          medicineId: response?.data?.data?.medicineDetails?.medicineId // Corrected ID reference
        };

        // Add the new data to the copied array
        updatedStoredList.push(data);

        let dataAppointment = {
          date: dateAp,
          doctorName: doctorName,
          setReminder: setReminder,
          location: location,
          time: time,
          accessToken: accessToken
        };

        if (doctorName !== '')
          await APPOINTMENT_MUTATION(
            response.data.data.medicineDetails.medicineId,
            dataAppointment
          );
        await handleMedicineDetailsSetting(response.data.data.medicineDetails.medicineId);

        // Dispatch the updated array to the Redux store
        dispatch(setDoseList(updatedStoredList));

        navigation.navigate('AddedMedicine' as never);

        ToastPopUp(response.data.data.medicineDetails.message);
      } else if (Array.isArray(response?.data?.errors) && response.data.errors.length > 0) {
        // Show error message from the response
        const errorMessage: any = response?.data?.errors[0]?.message;
        if (typeof errorMessage === 'string') {
          ToastPopUp(errorMessage);
        }
      } else {
        ToastPopUp('Something Went wrong ! please try again later.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
      ToastPopUp('Network Error! Please check your connection.');
    }
  };

  const handleMedicineDetailsSetting = async (medicineDetailsId: string) => {
    const mutation = `
      mutation{
        medicineDetailsSetting(medicineInputSetting: 
          { 
            InstrucTion : "${instrucTion}", 
            MedicineTakeEachDay : "${medicineTakeEachDay}", 
            medicineReminderTotalReq : "${medicineReminderTotalReq}", 
            treatmentDurationEndTime : "${treatmentDurationEndTime}", 
            treatmentDurationStartTime : "${treatmentDurationStartTime}", 
            medicineReminderCurrentStock : "${medicineReminderCurrentStock}", 
            medicineReminderRemindToLeft: "${medicineReminderRemindToLeft}" 
          })
            {
              message,
            }
      }
    `;

    try {
      const response = await axios.post(
        BASE_URL,
        {
          query: mutation,
          variables: {
            medicineDetailsID: medicineDetailsId
          }
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (
        response?.data?.data?.medicineDetailsSetting?.message !== undefined &&
        response?.data?.data?.medicineDetailsSetting?.message !== null
      ) {
        ToastPopUp(response.data.data.medicineDetailsSetting.message);
      } else if (Array.isArray(response?.data?.errors) && response.data.errors.length > 0) {
        // Show error message from the response
        const errorMessage: any = response?.data?.errors[0]?.message;
        if (typeof errorMessage === 'string') {
          ToastPopUp(errorMessage);
        }
      } else {
        ToastPopUp('Something Went wrong ! please try again later.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
      ToastPopUp('Network Error! Please check your connection.');
    }
  };

  const doseTime = useSelector((state: RootState) => state.medicineDetails.doseTime);
  const doseQuantity = useSelector((state: RootState) => state.medicineDetails.doseQuantity);
  const medicineName = useSelector((state: RootState) => state.medicineDetails.medicineName);
  const medicineStatus = useSelector((state: RootState) => state.medicineDetails.medicineStatus);
  const storedMedicineList = useSelector(
    (state: RootState) => state.medicineDetails.storedMedicineList
  );
  const typeMed = useSelector((state: RootState) => state.medicineDetails.typeMed);
  const unitMed = useSelector((state: RootState) => state.medicineDetails.unitMed);
  const takeStatus = useSelector((state: RootState) => state.medicineDetails.takeStatus);
  const accessToken = useSelector((state: RootState) => state.users.user.data.accessToken);
  const strengthMed = useSelector((state: RootState) => state.medicineDetails.strengthMed);

  const instrucTion = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.instrucTion
  );
  const medicineReminderCurrentStock = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.medicineReminderCurrentStock
  );
  const medicineReminderRemindToLeft = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.medicineReminderRemindToLeft
  );
  const medicineReminderTotalReq = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.medicineReminderTotalReq
  );
  const medicineTakeEachDay = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.medicineTakeEachDay
  );
  const treatmentDurationEndTime = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.treatmentDurationEndTime
  );
  const treatmentDurationStartTime = useSelector(
    (state: RootState) => state.medicineDetailsExtraSetting.treatmentDurationStartTime
  );

  const doctorName = useSelector((state: RootState) => state.appointment.doctorName);
  const dateAp = useSelector((state: RootState) => state.appointment.date);
  const location = useSelector((state: RootState) => state.appointment.location);
  const setReminder = useSelector((state: RootState) => state.appointment.setReminder);
  const time = useSelector((state: RootState) => state.appointment.time);

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imagePosition}>
          <MedicineLogo />
        </View>
        <View style={styles.headingPosition}>
          <Text style={styles.headingText}>When do you need to take the dose?</Text>
        </View>

        {/* Time and Dose Chips */}
        <View>
          {times.map((_, index) => (
            <React.Fragment key={index}>
              <Text style={styles.intakeNumberText}>{`Intake ${index + 1}`}</Text>

              <View style={styles.chipPosition}>
                {/* Time Chip */}
                <View style={styles.chip}>
                  <View style={styles.chipProperties}>
                    <View style={styles.chipContentProperties}>
                      {times[index] !== '' && (
                        <TouchableOpacity onPress={() => clearTimeSelection(index)}>
                          <FontAwesome name="minus-circle" size={30} color={'red'} />
                        </TouchableOpacity>
                      )}
                      <Text style={styles.chipText}>Time</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.selectButton}
                      onPress={() => handleSelectTime(index)}>
                      <Text style={styles.selectButtonText}>
                        {times[index] === '' ? 'Select' : times[index]}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Dose Chip */}
                <View style={styles.chip}>
                  <View style={styles.chipProperties}>
                    <View style={styles.chipContentProperties}>
                      {doses[index] !== 0 && (
                        <TouchableOpacity onPress={() => clearDoseSelection(index)}>
                          <FontAwesome name="minus-circle" size={30} color={'red'} />
                        </TouchableOpacity>
                      )}
                      <Text style={styles.chipText}>Dose</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.selectButton}
                      onPress={() => handleSelectDose(index)}>
                      <Text style={styles.selectButtonText}>
                        {doses[index] === 0 ? 'Select' : doses[index]}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </React.Fragment>
          ))}
        </View>

        {/* Add More Settings */}
        {times.every(time => time !== '') && doses.every(dose => dose !== 0) && (
          <View>
            <View style={styles.addMoreSettingsHeaderPosition}>
              <Text style={styles.addMoreSettingsHeaderText}>
                Would you like to add more settings?
              </Text>
            </View>
            <View style={styles.addMoresettingsContainer}>
              <MoreSettings />
            </View>
          </View>
        )}

        {/* Time Picker Modal */}
        {open && (
          <DatePicker
            modal
            mode="time"
            open={open}
            date={date}
            dividerColor="white"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              const timeStr = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              }).format(new Date(date));
              if (selectedChip !== null) {
                setTimes(prevTimes => {
                  const newTimes = [...prevTimes];
                  newTimes[selectedChip] = timeStr;
                  return newTimes;
                });
              }
            }}
            onCancel={() => {
              setOpen(false);
            }}
            theme="dark"
          />
        )}

        {/* Dose Input Modal */}
        <DoseInputModal
          numKeybaordType={true}
          visible={isModalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          onSubmit={handleSubmit}
        />
      </ScrollView>

      {/* Next Button */}
      {times.every(time => time !== '') && doses.every(dose => dose !== 0) && (
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

export default WeeklyDoseDetails;
