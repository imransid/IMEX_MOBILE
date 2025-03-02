import React, { type FC, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import type IRefilModalProps from '@/Interfaces/IRefilModalProps';

import styles from './style';

const RefilMedicineModal: FC<IRefilModalProps> = ({
  visible,
  onClose,
  onSubmit,
  numKeybaordType
}) => {
  const [addQuantity, setAddQuantity] = useState<string>('');
  const [remindQuantity, setRemindQuantity] = useState<string>('');

  const handleOkPress: any = () => {
    const addValue = parseInt(addQuantity, 10);
    const remindVaulue = parseInt(remindQuantity, 10);
    // Explicitly check if the parsed value is NaN or 0
    if (!isNaN(addValue) && !isNaN(remindVaulue)) {
      onSubmit(addValue, remindVaulue);
    } else {
      onSubmit(0, 0); // Default to 0 if the input is invalid
    }
    setAddQuantity('');
    setRemindQuantity('');
    onClose();
  };

  const handleCancelPress: any = () => {
    setAddQuantity('');
    setRemindQuantity('');
    onClose();
  };

  return (
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Refil your medicine</Text>
          <Text style={styles.modalSubTitle}>Refil your medicine</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.addMedLabel}>Add:</Text>
          <TextInput
            style={styles.addMedInput}
            maxLength={2}
            value={addQuantity}
            onChangeText={setAddQuantity}
            keyboardType={numKeybaordType ? 'numeric' : 'email-address'}
          />
          <Text style={styles.medLabel}>Med(s)</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.remindMedLabel}>Remind </Text>
            <Text style={styles.remindMedLabel}>When Left:</Text>
            </View>
          <TextInput
            style={styles.remindInput}
            maxLength={2}
            value={remindQuantity}
            onChangeText={setRemindQuantity}
            keyboardType={numKeybaordType ? 'numeric' : 'email-address'}
          />
          <Text style={styles.medLabel}>Med(s)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okButton} onPress={handleOkPress}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RefilMedicineModal;
