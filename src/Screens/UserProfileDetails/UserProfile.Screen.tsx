import React, { type FC, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import GuestImage from '../../assets/guest-image';
import EditProfileModal from '../../Components/EditProfileModal/EditProfileModal';
import Header from '../../Components/Header/Header';

import styles from './style';

const UserProfile: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Function to open modal
  const openModal: any = () => {
    setModalVisible(true);
  };

  // Function to close modal
  const closeModal: any = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="Profile Details" />
      </View>
      <View style={styles.userImagePosition}>
        <GuestImage />
        <Text style={styles.userNameUnderProfileImage}>User Name</Text>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          {modalVisible && <EditProfileModal modalVisible={modalVisible} closeModal={closeModal} />}
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.userDetailsComponentPosition}>
          <View style={styles.userDetailsComponentProperties}>
            <Text style={styles.inputHeader}>Full Name</Text>
            <View style={styles.detailInfo}>
              <Text style={styles.detailInfoText}>User Name</Text>
            </View>
          </View>

          <View style={styles.userDetailsComponentProperties}>
            <Text style={styles.inputHeader}>Mobile Number</Text>
            <View style={styles.detailInfo}>
              <Text style={styles.detailInfoText}>User Mobile</Text>
            </View>
          </View>
          <View style={styles.userDetailsComponentProperties}>
            <Text style={styles.inputHeader}>Gender</Text>
            <View style={styles.detailInfo}>
              <Text style={styles.detailInfoText}>User Gender</Text>
            </View>
          </View>
          <View style={styles.userDetailsComponentProperties}>
            <Text style={styles.inputHeader}>Birth Date</Text>
            <View style={styles.detailInfo}>
              <Text style={styles.detailInfoText}>User Birth Date</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
