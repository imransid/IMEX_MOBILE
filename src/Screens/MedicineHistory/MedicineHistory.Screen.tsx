import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';

import styles from './style';

const MedicineHistory: FC = () => {
  const navigation = useNavigation();

  const handleBack: any = () => {
    navigation.navigate('AddedMedicine' as never);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.headingPosition}>
          <Header mainHeader="Medicine History" />
        </View>

        <View style={styles.chipPosition}>
          <View>
            <Text style={styles.medicineHistoryHeading}>Today</Text>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Insulin</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.medicineHistoryHeading}>Yesterday</Text>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Insulin</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.medicineHistoryHeading}>May 5</Text>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Adflox</Text>
              </View>
            </View>
            <View style={styles.chip}>
              <View style={styles.chipContentProperties}>
                <Text style={styles.chipText}>Insulin</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.BackbuttonPosition}>
          <CustomButton onPress={handleBack} icon={<></>} text="Back" />
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicineHistory;
