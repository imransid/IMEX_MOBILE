import React from 'react';
import { FC } from 'react';
import { View, Text } from 'react-native';
import UploadPrescriptionLogo from '../../assets/upload-prescription';
import Header from '../../Components/Header/Header';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddPrescription: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="Precription" />
      </View>
      <View style={styles.imagePosition}>
        <UploadPrescriptionLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Upload a prescription" />
      </View>
      <View>
        <Header subHeader="Drag or drop file here" />
        <Header subHeader="-OR-" />
        <TouchableOpacity style={styles.chooseFileButton}>
          <Text style={styles.chooseFileText}>Chose File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPrescription;
