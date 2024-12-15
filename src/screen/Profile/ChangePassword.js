import React, { useState, useCallback } from 'react';
import { Input } from 'native-base';
import {
  Alert,
  SafeAreaView,
  View,
  ToastAndroid,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Card, Button, Subheading } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { _postApiFetch } from '../../services/Services';
import Loader from '../../components/Loader';

const ChangePassword = () => {
  const [password, setPass] = useState('');
  const [confPass, setConfPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = text => setPass(text);
  const handleChangeConfPass = text => setConfPass(text);

  const id = useSelector(state => state.user.userAllData.id);
  const domainName = useSelector(state => state.api.domainName);

  const OnPress = useCallback(async () => {
    console.log("change password");
    setLoading(true);
    if (password && confPass && password === confPass) {
      let data = [
        ['id', id, 'ID'],
        ['password', password, 'PASSWORD'],
        ['confirm_password', confPass, 'CONFIRM PASSWORD'],
      ];

      let parm = {
        bodyData: data,
        uri: 'password-change',
        domainName: domainName,
      };

      const result = await _postApiFetch(parm);

      setLoading(false);

      result.status ? showToastWithGravityAndOffset() : null;
    } else {
      setLoading(false);
      let msg =
        password !== confPass
          ? 'Password and Confirm Password are not same.'
          : "Input Filed can't be Empty.";
      Alert.alert('Warning!', msg, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  }, [password, confPass]);

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Save Successfully.',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title title="Change Password" subtitle="" />

        <Subheading style={{ paddingLeft: 10 }}>New Password * </Subheading>

        <View style={{ padding: 10 }}>
          <Input
            type="text"
            value={password}
            editable={true}
            onChangeText={handleChange}
            variant={'filled'}
            placeholder={'New Password'}
          />
        </View>

        <Subheading style={{ paddingLeft: 10 }}>Confirm Password * </Subheading>

        <View style={{ padding: 10 }}>
          <Input
            type="text"
            value={confPass}
            editable={true}
            onChangeText={handleChangeConfPass}
            variant={'filled'}
            placeholder={'Confirm Password'}
          />
        </View>

        <Card.Actions>
          <Button onPress={!loading ? OnPress : null} mode="contained">
            Submit
          </Button>
        </Card.Actions>
      </Card>

      <Loader loading={loading} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '20@s',
    backgroundColor: '#C3C3C3',
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

export default ChangePassword;
