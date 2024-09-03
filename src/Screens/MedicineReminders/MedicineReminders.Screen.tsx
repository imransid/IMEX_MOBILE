import React, { type FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import MedicineReminderLogo from '../../assets/medicine-reminder';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const MedicineReminders: FC = () => {
  const navigation = useNavigation();
  const handleNext: any = () => {
    navigation.navigate('OnceAdayDose' as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="Medicine Reminders" />
      </View>
      <View style={styles.imagePosition}>
        <MedicineReminderLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Set medicine reminders" />
      </View>

      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Total Required :</Text>
              <View style={styles.totalRequiredInputPosition}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={styles.medicineInput}
                  maxLength={3}
                />
                <Text style={styles.medicineText}>Medicine</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Current Stock :</Text>
              <View style={styles.currentStockInputPosition}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={styles.medicineInput}
                  maxLength={3}
                />
                <Text style={styles.medicineText}>Medicine</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Remind When Left :</Text>
              <View style={styles.remindLeftInputPosition}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={styles.medicineInput}
                  maxLength={3}
                />
                <Text style={styles.medicineText}>Medicine</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.NextbuttonPosition}>
        <CustomButton
          onPress={handleNext}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Next"
        />
      </View>
    </View>
  );
};

export default MedicineReminders;
