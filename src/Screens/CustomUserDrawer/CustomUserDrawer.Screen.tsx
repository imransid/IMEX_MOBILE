import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import GuestImage from '../../assets/guest-image';
import { colors } from '../../theme/colors';

import styles from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useNavigation } from '@react-navigation/native';

const CustomUserDrawer: FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation();

  const handleLogout: any = () => {
    // navigation.navigate('Login' as never);
  };

  const handleShowUserProfile: any = () => {
    navigation.navigate('Profile' as never);
  };

  const userName = useSelector((state: RootState) => state.users.user.data.user.fullName);
  const userEmail = useSelector((state: RootState) => state.users.user.data.user.email);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imagePosition}>
        <GuestImage />
      </View>
      <View style={styles.userNamePosition}>
        <Text style={styles.userNameText}>{userName}</Text>
        <Text style={styles.userEmailText}>{userEmail}</Text>
      </View>

      <View style={styles.userItemsPosition}>
        <TouchableOpacity
          style={styles.userProfileItemStyle}
          onPress={() => handleShowUserProfile()}>
          <View style={styles.userIconPosition}>
            <FontAwesome name="user" size={25} color={colors.mainText} />
          </View>
          <Text style={styles.userItemsText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userContactItemStyle}>
          <MaterialCommunityIcons name="email" size={25} color={colors.mainText} />
          <Text style={styles.userItemsText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userSettingsItemStyle}>
          <Ionicons name="settings" size={25} color={colors.mainText} />
          <Text style={styles.userItemsText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userHelpAndFaqItemsStyle}>
          <MaterialCommunityIcons name="message-question" size={28} color={colors.mainText} />
          <Text style={styles.userItemsText}>Helps & FAQs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logOutButtonPosition}>
        <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
          <Text style={styles.logOutButtonText}>Logout</Text>
          <Feather name="power" size={18} color={colors.white} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomUserDrawer;
