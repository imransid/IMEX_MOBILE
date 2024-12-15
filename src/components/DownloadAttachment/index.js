import React, { useState } from 'react';
import { Platform, PermissionsAndroid, Alert, View } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import RNFetchBlob from 'rn-fetch-blob';
import { Button } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

const DownLoadAttachment = ({ uri }) => {
  const appUrl = 'https://hrmspvm.predictionla.com/';
  const [url, setUrl] = useState(appUrl + uri);

  const [saving, setSaving] = useState(false);

  const updateUrl = url => {
    setSaving({ url });
  };

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Grant Me Permission to save Image',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        'Failed to save Image: ' + err.message,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  };

  const handleDownload = async () => {
    // if device is android you have to ensure you have permission
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        return;
      }
    }
    setSaving(true);
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png'
    })
      .fetch('GET', url)
      .then(res => {
        CameraRoll.saveToCameraRoll(res.data, 'photo')
          .then(() => {
            Alert.alert(
              'Save remote Image',
              'Image Saved Successfully',
              [{ text: 'OK', onPress: () => console.log('OK Pressed', url) }],
              { cancelable: false }
            );
          })
          .catch(err => {
            Alert.alert(
              'Save remote Image',
              'Failed to save Image: ' + err.message,
              [{ text: 'OK', onPress: () => console.log('OK Pressed', url) }],
              { cancelable: false }
            );
          })
          .finally(() => setSaving(false));
      })
      .catch(error => {
        setSaving(false);
        Alert.alert(
          'Save remote Image',
          'Failed to save Image: ' + error.message,
          [{ text: 'OK', onPress: () => console.log('OK Pressed', url) }],
          { cancelable: false }
        );
      });
  };

  return (
    <Button
      style={styles.ButtonVIew}
      loading={saving}
      icon="download"
      mode="text"
      onPress={() => handleDownload()}>
      {saving ? 'Downloading...' : 'Download Attachment'}
    </Button>
  );
};

export default DownLoadAttachment;

const styles = ScaledSheet.create({
  ButtonVIew: {}
});
