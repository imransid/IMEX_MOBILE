import React, { type FC, useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../Components/Header/Header';
import EditProfileModalButton from '../EditProfileModalButton/EditProfileModalButton';
import ModalTextInput from '../ModalTextInput/ModalTextInput';

import styles from './style';

interface EditProfileModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = ({ modalVisible, closeModal }) => {
  const [fullName, setFullName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');

  const handleUpdateProfile: any = () => {
    // navigation.navigate('MedicineDoses' as never);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Header mainHeader="Edit Profile" />
              <TouchableOpacity onPress={closeModal}>
                <AntDesign name="close" size={25} color="#888888" />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <View style={styles.textInputComponentPosition}>
                <View style={styles.textInputComponentProperties}>
                  <Text style={styles.inputHeader}>Full Name</Text>
                  <ModalTextInput
                    type="email"
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Enter your full name..."
                    maxLength={18}
                    inputStyle={styles.inputText}
                    leftIcon={<AntDesign name="user" size={25} color={'#888888'} />} // Left icon
                  />
                </View>

                <View style={styles.textInputComponentProperties}>
                  <Text style={styles.inputHeader}>Mobile Number</Text>
                  <ModalTextInput
                    type="mobile"
                    value={mobile}
                    onChangeText={setMobile}
                    placeholder="Enter your mobile number..."
                    maxLength={11}
                    inputStyle={styles.inputText}
                    leftIcon={<Feather name="smartphone" size={25} color={'#888888'} />}
                  />
                </View>

                <View style={styles.textInputComponentProperties}>
                  <Text style={styles.inputHeader}>Gender</Text>
                  <ModalTextInput
                    type="email"
                    value={gender}
                    onChangeText={setGender}
                    placeholder="Enter your gender..."
                    maxLength={8}
                    inputStyle={styles.inputText}
                    leftIcon={
                      <MaterialCommunityIcons name="gender-male" size={25} color={'#888888'} />
                    } // Left icon
                  />
                </View>

                <View style={styles.textInputComponentProperties}>
                  <Text style={styles.inputHeader}>Birth Date</Text>
                  <ModalTextInput
                    type="email"
                    value={birthdate}
                    onChangeText={setBirthdate}
                    placeholder="Enter your birth date..."
                    maxLength={10}
                    inputStyle={styles.inputText}
                    leftIcon={<AntDesign name="calendar" size={25} color={'#888888'} />} // Left icon
                  />
                </View>

                <View style={styles.UpdatebuttonPosition}>
                  <EditProfileModalButton
                    onPress={handleUpdateProfile}
                    icon={<></>}
                    text="Update"
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfileModal;
