import React, { type FC, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';

import { setPrescriptionAction } from '@/store/slices/features/prescription/slice';
import { type ImageFile } from '@/store/slices/features/prescription/types';

import UploadPrescriptionLogo from '../../assets/upload-prescription';
import Header from '../../Components/Header/Header';

import styles from './style';

const AddPrescription: FC = () => {
  const dispatch = useDispatch();
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null); // State to store image URI

  const handleChoosePhoto = async (): Promise<void> => {
    try {
      const response = await launchImageLibrary({ noData: true });

      if (response.assets !== undefined) {
        const imageFiles: ImageFile[] = response.assets.map(asset => ({
          originalPath: asset.originalPath ?? '',
          type: asset.type ?? '',
          height: asset.height ?? 0,
          width: asset.width ?? 0,
          fileName: asset.fileName ?? '',
          fileSize: asset.fileSize ?? 0,
          uri: asset.uri ?? ''
        }));

        // Store the first selected image's URI in state
        setSelectedImageUri(imageFiles[0]?.uri ?? null);

        // Dispatch the image information to the Redux store
        dispatch(
          setPrescriptionAction({
            assets: imageFiles
          })
        );
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

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
            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto().catch(error => {
                  console.error('Error selecting image:', error);
                });
              }}
              style={styles.chooseFileButton}>
              <Text style={styles.chooseFileText}>Choose File</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Display the selected image */}
      {selectedImageUri != null ? ( // Use explicit null check
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: selectedImageUri }} style={styles.imagePreview} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default AddPrescription;
