import React, { type FC, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import MedicineLogo from '../../assets/medicine-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import DoseInputModal from '../../Components/DoseInputModal/DoseInputModal';
import Header from '../../Components/Header/Header';
import { type AppStackParamList } from '../../models/routePageModel';
import { colors } from '../../theme/colors';
import addMoreSettings from '../../utils/addMoreSettings';

import styles from './style';

interface addMoreSettingsProps {
  item: string;
  index: number;
}

type OnceAdayDoseScreenRouteProp = RouteProp<AppStackParamList, 'OnceAdayDose'>;

const OnceAdayDose: FC = () => {
  const navigation = useNavigation();

  const route = useRoute<OnceAdayDoseScreenRouteProp>();
  let { instruction = '' } = route.params ?? {};

  const [selectedTime, setSelectedTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false); // for time picker
  const [isModalVisible, setModalVisible] = useState(false); // for dose input
  const [doseInput, setDoseInput] = useState<number>(0);

  useEffect(() => {
    if (instruction !== '') {
      setSelectedTime(selectedTime);
      setDoseInput(doseInput);
    }
  }, [instruction]);

  const handleSelectTime: any = () => {
    setOpen(true);
  };

  const handleSelectDose: any = () => {
    setModalVisible(true);
  };

  const clearTimeSelection: any = () => {
    setSelectedTime('');
  };

  const clearDoseSelection: any = () => {
    setDoseInput(0);
  };

  const clearInstruction: any = () => {
    instruction = '';
  };

  const handleSubmit: any = (inputValue: number) => {
    setDoseInput(inputValue);
    // Handle the submitted value here
    setModalVisible(false);
  };

  const handleNext: any = () => {
    navigation.navigate('AddMedicine' as never);
  };

  const RenderItems: React.FC<addMoreSettingsProps> = ({ item, index }) => {
    const handlePress: any = () => {
      if (index === 0) {
        navigation.navigate('AddInstructions' as never);
      } else if (index === 1) {
        navigation.navigate('SetTreatmentDuration' as never);
      } else if (index === 2) {
        navigation.navigate('MedicineReminders' as never);
      }
    };
    return (
      <TouchableOpacity style={styles.addMoreSettingsItems} onPress={handlePress}>
        <View style={styles.addMoreSettingsContentProperties}>
          {index === 0 && instruction !== '' ? (
            <TouchableOpacity onPress={() => clearInstruction()}>
              <FontAwesome name="minus-circle" size={30} color={'red'} />
            </TouchableOpacity>
          ) : (
            <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          )}

          <Text style={styles.addMoreSettingsItemsText}>{item}</Text>
        </View>
        {index === 0 && instruction !== '' && (
          <AntDesign
            name="check"
            size={28}
            color={colors.buttonBg}
            style={styles.checkMarkIconPosition}
          />
        )}
      </TouchableOpacity>
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

      {/* Dose Chips */}
      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              {selectedTime !== '' && (
                <TouchableOpacity onPress={() => clearTimeSelection()}>
                  <FontAwesome name="minus-circle" size={30} color={'red'}></FontAwesome>
                </TouchableOpacity>
              )}
              <Text style={styles.chipText}>Time</Text>
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectTime()}>
              <Text style={styles.selectButtonText}>
                {selectedTime === '' ? 'Select' : selectedTime}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              {doseInput !== 0 && (
                <TouchableOpacity onPress={() => clearDoseSelection()}>
                  <FontAwesome name="minus-circle" size={30} color={'red'}></FontAwesome>
                </TouchableOpacity>
              )}
              <Text style={styles.chipText}>Dose</Text>
            </View>

            <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectDose()}>
              <Text style={styles.selectButtonText}>{doseInput === 0 ? 'Select' : doseInput}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Time Picker modal */}
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
            setSelectedTime(timeStr);
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
        onSubmit={handleSubmit}></DoseInputModal>

      {/* Add More Settings */}
      {selectedTime !== '' && doseInput !== 0 && (
        <View style={styles.settingsAndButtonContainer}>
          <View style={styles.addMoreSettingsHeaderPosition}>
            <Header subHeader="Would you like to add more settings?" />
          </View>
          <FlatList
            style={styles.addMoreSettingsItemsPosition}
            data={addMoreSettings}
            renderItem={({ item, index }) => (
              <RenderItems item={item} index={index} key={index.toString()} />
            )}
          />
          <View style={styles.buttonPosition}>
            <CustomButton
              onPress={handleNext}
              icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
              text="Next"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default OnceAdayDose;
