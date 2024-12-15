import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  ToastAndroid,
  SafeAreaView,
} from 'react-native';

import {Formik} from 'formik';

import React, {useState, useMemo, useEffect} from 'react';
import {FormControl, Input, Stack, Box, WarningOutlineIcon} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TapButton from '../../components/tapButton/TapButton';
import {useDispatch, useSelector} from 'react-redux';

import {Card, Headline, Surface} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import useFetchData from '../../components/HOC/withGetData';

import {_postApiADD} from '../../services/Services';
import CalendarPicker from 'react-native-calendar-picker';
import DropDown from '../../components/DorpDown';

const Basic = () => {
  const apiUri = useSelector(state => state.api.domainName);

  const id = useSelector(state => state.user.userAllData.id);
  let data = useFetchData([['id', id]], 'basic-information', 'post', apiUri);

  const [showDropDown, setShowDropDown] = useState(false);

  const [gender, setGender] = useState('');

  // global asset
  const loader = useSelector(state => state.user.loader);
  const errorMsg = useSelector(state => state.user.errorMsg);

  const [show, setShow] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [documentData, setDocumentData] = useState({
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
  const [appLoaded, setAppLoaded] = useState(false);

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
          setDocumentData(data[0]);
        }
      }
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
  }, [data, appLoaded]);

  const showToastWithGravityAndOffset = msg => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  function onDateChange(date) {
    setSelectedStartDate(
      date._i.year + '-' + date._i.month + '-' + date._i.day,
    );
  }

  const OnPress = async value => {
    let objectData = [
      ['id', id.toString()],
      ['first_name', value.first_name.toString()],
      ['last_name', value.last_name.toString()],
      ['email', value.email.toString()],
      ['gender', gender.toString() ? gender.toString() : data[0][0].gender],
      ['phone', value.phone.toString()],
      [
        'date_of_birth',
        selectedStartDate !== null
          ? selectedStartDate.toString()
          : value.date_of_birth.toString(),
      ],
    ];

    let parm = {
      bodyData: objectData,
      uri: 'basic-information-update',
      domainName: apiUri,
    };

    const result = await _postApiADD(parm);
    console.log(result);
    let msg = result.status
      ? result.msg
        ? result.msg
        : 'Save Successfully'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          Basic information
        </Text>
      </View>
      {appLoaded && <CustomIndicator />}

      {!appLoaded && (
        <Formik
          enableReinitialize={true}
          initialValues={{
            first_name: documentData[0]?.first_name,
            last_name: documentData[0]?.last_name,
            email: documentData[0]?.email,
            gender: documentData[0]?.gender,
            phone: documentData[0]?.phone,
            date_of_birth: documentData[0]?.date_of_birth,
          }}
          onSubmit={values => OnPress(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <Text style={styles.itemTitle}>First Name</Text>
              <Input
                placeholder={documentData.first_name}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                value={values.first_name}
              />
              <Text style={styles.itemTitle}>Last Name</Text>
              <Input
                placeholder="last_name"
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                value={values.last_name}
              />
              <Text style={styles.itemTitle}>Email</Text>
              <Input
                placeholder="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.itemTitle}>Gender</Text>
              {/* <Input
                placeholder="gender"
                onChangeText={handleChange('gender')}
                onBlur={handleBlur('gender')}
                value={values.gender}
              /> */}

              <Surface style={styles.containerStyle}>
                <SafeAreaView style={styles.safeContainerStyle}>
                  <DropDown
                    data={genderList}
                    selectValue={val => {
                      setGender(val);
                      handleChange('gender');
                    }}
                    pickerValue={values.gender?.toLowerCase()}
                  />
                </SafeAreaView>
              </Surface>

              <Text style={styles.itemTitle}>Phone</Text>
              <Input
                placeholder="phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />

              <TouchableOpacity
                onPress={() => setShow(!show)}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Text style={styles.itemTitle}>
                  Date Of Birth : {documentData[0]?.date_of_birth}
                </Text>
              </TouchableOpacity>
              {show && <CalendarPicker onDateChange={onDateChange} />}

              <View
                style={{
                  width: 200,
                  height: 60,
                  marginTop: 30,
                  alignSelf: 'center',
                }}>
                <Button
                  type="outline"
                  onPress={handleSubmit}
                  title="Save User Info"
                />
              </View>
            </View>
          )}
        </Formik>
      )}
    </ScrollView>
  );
};

export default Basic;
const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  safeContainerStyle: {
    //height: 300,
    marginBottom: 10,
  },
});
