import React, { useState, type FC } from 'react';
import { Text, View } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Header from '../../Components/Header/Header';
import styles from './style';

const Login: FC = () => {
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Grid style={styles.container}>
      <Row>
        <Header
          mainHeader="Log In"
          subHeader="Log in to access your personalized Medinest experience"
        />
      </Row>
      <Row>
        <Text style={styles.inputHeader}>Mobile Number</Text>
        <CustomTextInput
          type="mobile"
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter your mobile number..."
          maxLength={11}
          inputStyle={styles.inputText}
        />
      </Row>
      <Row>
        <Text style={styles.inputHeader}>Password {'         '}</Text>
        <CustomTextInput
          type="password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password..."
          maxLength={8}
          inputStyle={styles.inputText}
          isPassword={true}
        />
      </Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </Grid>
  );
};

export default Login;
