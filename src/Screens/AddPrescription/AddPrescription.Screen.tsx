import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import UploadPrescriptionLogo from '../../assets/upload-prescription';
import Header from '../../Components/Header/Header';

import styles from './style';

const AddPrescription: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="Prescription" />
      </View>
      <View style={styles.imagePosition}>
        <UploadPrescriptionLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Text style={styles.chooseFileHeaderText}>Upload a Prescription</Text>
      </View>
      <View style={styles.fileSelectionContentPosition}>
        <View style={styles.chooseFileBackground}>
          <Text style={styles.mainText}>Drag or drop file here</Text>
          <Text style={styles.subText}>-OR-</Text>
          <View style={styles.chooseFileButtonPosition}>
            <TouchableOpacity style={styles.chooseFileButton}>
              <Text style={styles.chooseFileText}>Chose File</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddPrescription;
