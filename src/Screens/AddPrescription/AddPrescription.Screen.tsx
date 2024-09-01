import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import UploadPrescriptionLogo from '../../assets/upload-prescription';
import Header from '../../Components/Header/Header';

import styles from './style';

const AddPrescription: FC = () => {
  return (
    <View>
      <View style={styles.headingPosition}>
        <Header mainHeader="Prescription" />
      </View>
      <View style={styles.imagePosition}>
        <UploadPrescriptionLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Upload a prescription" />
      </View>
      <View style={styles.defaultText}>
        <Header subHeader="Drag or drop file here" />
        <Header subHeader="-OR-" />
        <View style={styles.chooseFileButtonPosition}>
          <TouchableOpacity style={styles.chooseFileButton}>
            <Text style={styles.chooseFileText}>Chose File</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddPrescription;
