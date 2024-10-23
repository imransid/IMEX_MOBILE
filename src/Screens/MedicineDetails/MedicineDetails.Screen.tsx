import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { type RootState } from '@/store';

import MedicineImage from '../../assets/medicine-image';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { colors } from '../../theme/colors';

import styles from './style';

const MedicineDetails: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedData } = route.params as { scannedData: string };

  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);

  const medicineName = useSelector((state: RootState) => state.medicineDetails.medicineName);
  const genericName = useSelector((state: RootState) => state.medicineDetails.medicineGenericName);
  const manufacturerName = useSelector(
    (state: RootState) => state.medicineDetails.medicineManufacturer
  );
  const medicineForm = useSelector((state: RootState) => state.medicineDetails.typeMed);
  const medicineStrength = useSelector((state: RootState) => state.medicineDetails.strengthMed);
  const description = useSelector((state: RootState) => state.medicineDetails.description);
  const person = useSelector((state: RootState) => state.medicineDetails.person);
  const note = useSelector((state: RootState) => state.medicineDetails.note);

  const handlePress: any = () => {
    authStatus
      ? navigation.navigate('MedicineDoses' as never)
      : navigation.navigate('Login' as never);
  };

  console.log(scannedData);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imagePosition}>
          <MedicineImage />
        </View>

        <View style={styles.medicineNameAndBrandPosition}>
          <View style={styles.medicineNameTypeProperties}>
            <Text style={styles.medicineNameText}>{medicineName}</Text>
            <View style={styles.medicineTypePosition}>
              <Text style={styles.medicineTypeText}>{genericName}</Text>
            </View>
          </View>
          <Text style={styles.brandNameText}>{manufacturerName}</Text>
        </View>

        <View style={styles.medicineTypeAndQuantityPosition}>
          <View style={styles.medicineTypeAndQuantityStyle}>
            <View style={styles.medicineTypeAndQuantityProperties}>
              <View style={styles.iconPosition}>
                <MaterialCommunityIcons name="pill" size={17} color={colors.header} />
              </View>
              <Text style={styles.medicineTypeAndQuantityText}>{medicineForm}</Text>
            </View>
          </View>
          <View style={styles.medicineTypeAndQuantityStyle}>
            <View style={styles.medicineTypeAndQuantityProperties}>
              <View style={styles.iconPosition}>
                <SimpleLineIcons name="drop" size={16} color={colors.header} />
              </View>
              <Text style={styles.medicineTypeAndQuantityText}>{medicineStrength}</Text>
            </View>
          </View>
        </View>

        <View style={styles.medicineDetailsComponentPosition}>
          <View style={styles.medicineDetailsComponentProperties}>
            <Text style={styles.inputHeader}>Product Details</Text>
            <View style={styles.medicineDetailscontainer}>
              <View style={styles.textPosition}>
                <Text style={styles.scannedText}>{description}</Text>
              </View>
            </View>
          </View>
          <View style={styles.medicineDetailsComponentProperties}>
            <Text style={styles.inputHeader}>Dosage & Administration</Text>
            <View style={styles.medicineDetailscontainer}>
              <View style={styles.textPosition}>
                <Text style={styles.scannedText}>Adult: {person}</Text>
                <Text style={styles.scannedText}>Note: {note}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonPosition}>
        <CustomButton
          onPress={() => handlePress()}
          icon={<Icon name="calendar-number-outline" size={30} color={colors.white} />}
          text="Schedule Dosage"
        />
      </View>
    </View>
  );
};

export default MedicineDetails;
