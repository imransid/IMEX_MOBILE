import React, {useState, useMemo} from 'react';
import {
  FormControl,
  Input,
  Stack,
  Divider,
  Box,
  WarningOutlineIcon,
  Image,
  View,
} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TapButton from '../components/tapButton/TapButton';
import {useDispatch, useSelector} from 'react-redux';
import {LogIn} from '../actions/SignIn';
import {SafeAreaView} from 'react-native';
const SignIn = () => {
  const dispatch = useDispatch();

  // global asset
  const loader = useSelector(state => state.user.loader);
  const errorMsg = useSelector(state => state.user.errorMsg);
  const apiUri = useSelector(state => state.api.domainName);

  const [userName, setUserName] = useState('');
  const [userInvalid, setUserInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  const errorMsgUser = useMemo(() => {
    return 'User Name Required. ';
  }, [userInvalid]);

  const errorMsgPassword = useMemo(() => {
    if (errorMsg !== '' && appLoaded) {
      setPasswordInvalid(true);
      return errorMsg;
    }
    return 'Password Required. ';
  }, [setPasswordInvalid, errorMsg, appLoaded]);

  // button pressed
  const OnPress = () => {
    if (userName !== '' && password !== '') {
      let data = {
        userName: userName,
        password: password,
      };

      dispatch(LogIn(data, apiUri));
      setAppLoaded(true);
    } else {
      if (userName === '' && password === '') {
        setUserInvalid(true);
        setPasswordInvalid(true);
      } else if (userName === '') {
        setUserInvalid(true);
      } else {
        setPasswordInvalid(true);
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: '50%'}}>
      <KeyboardAwareScrollView
        style={{
          width: '100%',
        }}>
        <Stack
          space={2.5}
          alignSelf="center"
          px="4"
          safeArea
          mt="4"
          w={{
            base: '100%',
            md: '25%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 20,
            }}>
            <Image source={require('../assets/fav.png')} />
          </View>
          <Box>
            <FormControl mb="5" isInvalid={userInvalid}>
              <Input
                placeholder="phone number or email."
                onChangeText={e => setUserName(e)}
              />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMsgUser}
              </FormControl.ErrorMessage>
            </FormControl>
            <Divider />
          </Box>
          <Box>
            <FormControl mb="5" isInvalid={passwordInvalid}>
              <Input
                placeholder="Password"
                type="password"
                onChangeText={e => setPassword(e)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMsgPassword}
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <Box>
            <TapButton
              text={'Sign In'}
              _singleTap={() => OnPress()}
              _doubleTap={() => OnPress()}
              _longTap={() => OnPress()}
              spinner={loader}
            />
          </Box>
        </Stack>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
