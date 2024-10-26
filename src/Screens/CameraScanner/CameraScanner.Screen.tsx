/* eslint-disable */

import React, { type FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner
} from 'react-native-vision-camera';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { type AppStackParamList } from '@/models/routePageModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import {
  setMedicineName,
  setQrCodeToScanData
} from '@/store/slices/features/medicineDetails/slice';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

type CameraScannerNavigationProp = StackNavigationProp<AppStackParamList, 'CameraScanner'>;

const CameraScanner: FC = () => {
  const navigation = useNavigation<CameraScannerNavigationProp>();
  const dispatch = useDispatch();
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {

    if (hasPermission !== true) requestPermission();

  }, [hasPermission]);



  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      const value = codes[0].value ?? string;
      if (value) {
        const scannedData = JSON.parse(value);

        // 
        dispatch(setQrCodeToScanData(scannedData));
        navigation.navigate('MedicineDetails', { scannedData: value });
      }
    }
  });

  if (device == null) {
    return (
      <View>
        <Text>Device Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {hasPermission && (
        <Camera
          style={StyleSheet.absoluteFill}
          codeScanner={codeScanner}
          device={device}
          isActive={true}
        />
      )}
    </View>
  );
};
export default CameraScanner;
