import React, {useState, useMemo, useEffect} from 'react';
import {FormControl, Input, Stack, Box, WarningOutlineIcon} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TapButton from '../../components/tapButton/TapButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Card, Headline, Subheading} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import useFetchData from '../../components/HOC/withGetData';
import DropDown from 'react-native-paper-dropdown';
import {_postApiADD} from '../../services/Services';

const BasicInfo = () => {
  console.log('basci infoooo');
  const dispatch = useDispatch();
  const apiUri = useSelector(state => state.api.domainName);

  const id = useSelector(state => state.user.userAllData.id);
  let data = useFetchData([['id', id]], 'basic-information', 'post', apiUri);

  const [showDropDown, setShowDropDown] = useState(false);

  const [gender, setGender] = useState('');
  // global asset
  const loader = useSelector(state => state.user.loader);
  const errorMsg = useSelector(state => state.user.errorMsg);

  const [userName, setUserName] = useState('');
  const [userInvalid, setUserInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const [documentData, setDocumentData] = useState(null);
  const [appLoaded, setAppLoaded] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [inputValue, setInputValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: '',
  });

  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];

  const [markedDates, setMarkedDates] = useState({
    '2022-04-05': {
      // disabled: true,
      startingDay: true,
      color: 'orange',
      endingDay: true,
    },
  });

  useEffect(() => {
    try {
      data[1] !== appLoaded ? setAppLoaded(data[1]) : null;
      if (data[0].length !== 0) {
        if (data[0] !== documentData) {
          let date = data[0].date_of_birth;

          let selectedDate = {
            [date]: {
              // disabled: true,
              startingDay: true,
              color: 'orange',
              endingDay: true,
            },
          };
          setSelectedDate(date);
          setDocumentData(data[0]);
          setMarkedDates(selectedDate);
        }
      }
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
  }, [data, appLoaded, documentData]);

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    setShowCalender(false);
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,
        endingDay: true,
        color: 'orange',
      },
    });
  };

  const showToastWithGravityAndOffset = msg => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const errorMsgUser = useMemo(() => {
    return 'Required. ';
  }, [userInvalid]);

  // button pressed
  const OnPress = async () => {
    let objectData = [
      ['id', id],
      [
        'first_name',
        inputValue.first_name === '' ? documentData.first_name : inputValue,
      ],
      [
        'last_name',
        inputValue.last_name === '' ? documentData.last_name : inputValue,
      ],
      ['email', inputValue.email === '' ? documentData.email : inputValue],
      ['gender', inputValue.gender === '' ? documentData.gender : inputValue],
      ['phone', inputValue.phone === '' ? documentData.phone : inputValue],
      [
        'date_of_birth',
        selectedDate.toString() === ''
          ? documentData.date_of_birth
          : selectedDate.toString(),
      ],
    ];

    console.log('objectData', objectData);

    let parm = {
      bodyData: objectData,
      uri: 'basic-information-update',
    };

    const result = await _postApiADD(parm);

    let msg = result.status
      ? type === 'edit'
        ? 'Update Successfully'
        : 'Save Successfully'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
  };

  const _SetInputValue = (e, itemPath) => {
    setInputValue({
      ...inputValue,
      [itemPath]: e,
    });
  };

  const RenderBox = ({label, value, itemPath}) => {
    return (
      <Box>
        <FormControl mb="5" isInvalid={userInvalid}>
          <FormControl.Label>{label}</FormControl.Label>
          <Input
            placeholder={label.slice(0, -1)}
            value={inputValue[itemPath] ? inputValue[itemPath] : value}
            onChangeText={e => _SetInputValue(e, itemPath)}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorMsgUser}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
    );
  };

  const RenderDate = ({label, value}) => {
    return showCalender ? (
      <Calendar
        markedDates={markedDates}
        markingType={'period'}
        onDayPress={handleDayPress}
      />
    ) : (
      <Box>
        <FormControl mb="5" isInvalid={userInvalid}>
          <FormControl.Label>{label}</FormControl.Label>
          <TouchableOpacity
            onPress={() => setShowCalender(true)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#c3c3c3',
              borderWidth: 1,
              borderRadius: 5,
              height: 60,
            }}>
            <Subheading>{selectedDate}</Subheading>
          </TouchableOpacity>
        </FormControl>
      </Box>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {appLoaded && <CustomIndicator />}

      {!appLoaded ? (
        <ScrollView style={{marginBottom: 10}}>
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
              <Box>
                <Headline>Details of User</Headline>
              </Box>

              <Card style={{padding: 5}}>
                <RenderBox
                  label={'First Name *'}
                  value={documentData?.first_name}
                  itemPath={'first_name'}
                />
                <RenderBox
                  label={'Last Name *'}
                  value={documentData?.last_name}
                  itemPath={'last_name'}
                />
                <RenderBox
                  label={'Email *'}
                  value={documentData?.email}
                  itemPath={'email'}
                />
                {/* <RenderBox
                  label={'Gender *'}
                  value={documentData?.gender}
                  itemPath={'gender'}
                /> */}

                {console.log('okokokokokokoko')}

                <DropDown
                  label={'Gender'}
                  mode={'outlined'}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={gender}
                  setValue={setGender}
                  list={genderList}
                />

                <RenderBox
                  label={'Phone *'}
                  value={documentData?.phone}
                  itemPath={'phone'}
                />
                <RenderDate
                  label={'DOB *'}
                  value={documentData?.date_of_birth}
                />
              </Card>

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
        </ScrollView>
      ) : null}
    </SafeAreaView>
  );
};

export default BasicInfo;
