import React, { type FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import MedicineDoseTime from '../../assets/medicine-dose-time';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';
import medicineStrengthUnits from '../../utils/medicineStrengthUnits';

import styles from './style';

interface IMedicineStrengthProps {
  item: string;
  index: number;
}

const AddMedicineStrength: FC = () => {
  const navigation = useNavigation();

  const [strength, setStrength] = useState<string>('');

  const handleNext: any = () => {
    navigation.navigate('AddMedicineStrength' as never);
  };

  const RenderItems: React.FC<IMedicineStrengthProps> = ({ item, index }) => {
    const handlePress: any = () => {
      if (index === 0) {
        // navigation.navigate('MedicineDailyDoses' as never);
      }
    };
    return (
      <TouchableOpacity style={styles.unitItems} onPress={handlePress}>
        <Text style={styles.unitItemsText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.2} width={380} style={styles.progressBarPosition} />
      <View style={styles.imagePosition}>
        <MedicineDoseTime />
      </View>
      <View style={styles.headingPosition}>
        <Header mainHeader="Add the Medicine Strength" />
      </View>
      <View style={styles.textInputPosition}>
        <Text style={styles.inputHeader}>Strength</Text>
        <CustomTextInput
          type="mobile"
          value={strength}
          onChangeText={setStrength}
          placeholder="Enter medicine strength..."
          maxLength={3}
          inputStyle={styles.inputText}
        />
      </View>

      <View style={styles.unitTextPosition}>
        <Text style={styles.unitText}>Unit</Text>
      </View>
      <FlatList
        style={styles.unitItemsPosition}
        data={medicineStrengthUnits}
        renderItem={({ item, index }) => (
          <RenderItems item={item} index={index} key={index.toString()} />
        )}
      />
      <View style={styles.NextButtonPosition}>
        <CustomButton
          onPress={handleNext}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Next"
        />
      </View>
    </View>
  );
};

export default AddMedicineStrength;
