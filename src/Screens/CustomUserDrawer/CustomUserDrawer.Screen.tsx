import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import GuestImage from '../../assets/guest-image';
import { colors } from '../../theme/colors';

import styles from './style';

const CustomUserDrawer: FC<DrawerContentComponentProps> = props => {
  const handleGuestLogin: any = () => {
    // navigation.navigate('Login' as never);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imagePosition}>
        <GuestImage />
      </View>
      <View style={styles.guestGreetingsPosition}>
        <Text style={styles.guestGreetingsText}>Hello User</Text>
      </View>

      <View style={styles.guestSignInButtonPosition}>
        <TouchableOpacity style={styles.guestSignInButton} onPress={handleGuestLogin}>
          <Text style={styles.guestSignInButtonText}>Logout</Text>
          <Feather name="power" size={18} color={colors.white} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomUserDrawer;
