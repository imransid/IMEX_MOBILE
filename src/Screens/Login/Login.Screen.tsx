import React, { type FC, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const Login: FC = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleGuestLogin: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleCreateAccount: any = () => {
    navigation.navigate('CreateAccount' as never);
  };

  const handleForgotPassword: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Adjust as needed
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Grid>
          <Col style={styles.container}>
            <Col size={1}>
              <Row style={styles.headerPosition}>
                <Header
                  mainHeader="Log In"
                  subHeader="Log in to access your personalized Medinest experience"
                />
              </Row>
            </Col>
            <Col size={1}>
              <Text style={styles.inputHeader}>Mobile Number</Text>
              <CustomTextInput
                type="mobile"
                value={mobile}
                onChangeText={setMobile}
                placeholder="Enter your mobile number..."
                maxLength={11}
                inputStyle={styles.inputText}
                leftIcon={<Feather name="smartphone" size={30} color={'#888888'} />} // Left icon
              />
              <Text style={styles.inputHeader}>Password {'         '}</Text>
              <CustomTextInput
                type="password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password..."
                maxLength={8}
                inputStyle={styles.inputText}
                isPassword={true}
                leftIcon={
                  <MaterialCommunityIcons name="lock-outline" size={30} color={'#888888'} />
                } // Left icon
              />
            </Col>
            <Col size={2}>
              <CustomButton
                onPress={handleSignIn}
                icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
                text="Sign In"
              />
              <View style={styles.orPart}>
                <View style={styles.orHorizontalLine}></View>
                <Text style={styles.orText}>or</Text>
                <View style={styles.orHorizontalLine}></View>
              </View>
              <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
                <Feather name="user" size={30} color={'#888888'} />
                <Text style={styles.guestButtonText}>Continue as guest</Text>
              </TouchableOpacity>
              <View style={styles.askAboutAccount}>
                <Text style={styles.askAboutAccountText}>Don’t have an account? {'  '}</Text>
                <TouchableOpacity onPress={handleCreateAccount}>
                  <Text style={styles.signUpText}>Create Account</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
            </Col>
          </Col>
        </Grid>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
