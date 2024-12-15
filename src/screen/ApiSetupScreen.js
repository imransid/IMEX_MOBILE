import React, { useState, useMemo } from 'react';
import { FormControl, Input, Stack, Box, WarningOutlineIcon, Image, View } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TapButton from '../components/tapButton/TapButton';
import { useDispatch, useSelector } from 'react-redux';
import { setDomainName } from '../actions/Settings';
import { SafeAreaView } from 'react-native';
const ApiSetupScreen = () => {
  const dispatch = useDispatch();

  // global asset
  const loader = useSelector(state => state.user.loader);
  const errorMsg = useSelector(state => state.user.errorMsg);

  const [userInvalid, setUserInvalid] = useState(false);
  const [value, setValue] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  const errorMsgUser = useMemo(() => {
    return 'User Name Required. ';
  }, [userInvalid]);

  const errorMsgPassword = useMemo(() => {
    if (value !== '') {
      setPasswordInvalid(true);
      return errorMsg;
    }
    return 'Domain Required. ';
  }, [setPasswordInvalid, value]);

  // button pressed
  const OnPress = () => {
    if (value !== '') {
      let data = {
        value: value
      };

      dispatch(setDomainName(data));
      setAppLoaded(true);
    } else {
      setPasswordInvalid(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: '50%' }}>
      <KeyboardAwareScrollView
        style={{
          width: '100%'
        }}>
        <Stack
          space={2.5}
          alignSelf="center"
          px="4"
          safeArea
          mt="4"
          w={{
            base: '100%',
            md: '25%'
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 20
            }}>
            <Image source={require('../assets/fav.png')} />
          </View>

          <Box>
            <FormControl mb="5" isInvalid={passwordInvalid}>
              <Input
                placeholder="Enter Domain Name"
                type="text"
                value={value}
                onChangeText={e => setValue(e)}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMsgPassword}
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <Box>
            <TapButton
              text={'Submit'}
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

export default ApiSetupScreen;
