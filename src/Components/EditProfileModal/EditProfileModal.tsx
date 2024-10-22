/* eslint-disable */
import React, { type FC, useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../Components/Header/Header';
import EditProfileModalButton from '../EditProfileModalButton/EditProfileModalButton';
import ModalTextInput from '../ModalTextInput/ModalTextInput';

import styles from './style';
import ToastPopUp from '@/utils/Toast.android';
import axios from 'axios';
import { BASE_URL } from '@/utils/environment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { updateUser } from '@/store/slices/features/users/slice';

interface EditProfileModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = ({ modalVisible, closeModal }) => {
  const [fullName, setFullName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.users.user.data.accessToken);

  const handleUpdateProfile: any = async () => {

    if (!fullName && !mobile && !gender && !birthdate) {
      ToastPopUp('Please fill in at least one field to update your profile.');
      return; // Exit the function early
    }


    const updateFields: string[] = [];

    // Add each field to the updateFields array if it has a value
    if (fullName) {
      updateFields.push(`fullName: "${fullName}"`);
    }
    if (mobile) {
      updateFields.push(`mobileNumber: "${mobile}"`);
    }
    if (gender) {
      updateFields.push(`gender: "${gender}"`);
    }
    if (birthdate) {
      updateFields.push(`birthday: "${birthdate}"`);
    }

    // Join the fields to create the mutation input
    const mutationInput = updateFields.join(', ');


    const mutation = `
      mutation {
        updateProfile(updateProfileInput: {
             ${mutationInput}
        }) {
          id
          fullName
          mobileNumber
          email
          gender
          birthday
        }
      }
    `;

    try {
      const response = await axios.post(
        BASE_URL,
        {
          query: mutation,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle response messages
      if (response?.data?.data?.updateProfile) {

        const updatedProfile = response.data.data.updateProfile;

        // Create an object similar to the desired structure
        const updatedUserData = {
          accessToken: accessToken, // Retain the existing access token
          user: {
            fullName: updatedProfile.fullName,
            birthday: updatedProfile.birthday,
            email: updatedProfile.email, // Ensure email is available in the response
            mobileNumber: updatedProfile.mobileNumber,
            gender: updatedProfile.gender,
          },
        };

        dispatch(updateUser(updatedUserData));
        closeModal()
        ToastPopUp('Profile updated successfully!');
      } else if (Array.isArray(response?.data?.errors) && response.data.errors.length > 0) {
        const errorMessage: any = response?.data?.errors[0]?.message;
        if (typeof errorMessage === 'string') {
          ToastPopUp(errorMessage);
        }
      } else {
        ToastPopUp('Something went wrong! Please try again later.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error:', error.response?.data); // Log the error response
      } else {
        console.error('Unexpected Error:', error);
      }
      ToastPopUp('Network Error! Please check your connection.');
    }
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
