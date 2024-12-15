import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {Box, FormControl, Input, Stack} from 'native-base';
import React, {useEffect, useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
var ImagePicker = require('react-native-image-picker');
import DropDown from '../DorpDown';
import Calendars from '../Calender/Calender';
import InputBox from '../InputBox';
import {TextInput} from 'react-native';

import {Checkbox} from 'react-native-paper';

const CustomModal = ({
  children,
  onPress,
  onValue,
  type,
  modalName,
  dropDownValue,
}) => {
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = useState(onValue);
  const [singleFile, setSingleFile] = useState(null);

  const [pickerValue, setPickerValue] = useState({});

  const [pickerStatus, setPickerStatus] = useState(true);

  const OnTextChange = (name, val) => {
    let filterItem = value.filter(e => {
      console.log('e[0] === name', e[0], name);
      if (e[0] === name) {
        e[1] = val;
      }
      return e;
    });

    setValue(filterItem);
  };

  const Onsubmit = () => {
    onPress(value, type);
  };

  const SelectFile = async () => {
    // Opening Document Picker to select one file
    try {
      // const res = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.allFiles],
      // });

      const options = {
        noData: true,
      };

      const res = await ImagePicker.launchImageLibrary(
        options,
        response => response,
      );

      setSingleFile(res.assets[0]);

      let filterItem = value.filter(e => {
        if (e[2].includes('FILE')) {
          e[1] = res.assets[0];
        }
        return e;
      });

      setValue(filterItem);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  // update picker
  useEffect(() => {
    if (pickerValue) {
      let filterItem = value.filter(e => {
        if (e[2].includes('TYPE')) {
          e[1] =
            e[2] === 'TRAVEL ARRANGEMENT TYPE'
              ? pickerValue.travel_arrangement_type
              : e[2] === 'LEAVE TYPE'
              ? pickerValue.leave_type
              : pickerValue.TYPE;
        } else if (e[2].includes('PRIORITY')) {
          e[1] = pickerValue.PRIORITY;
        } else if (e[2].includes('STATUS')) {
          e[1] = pickerValue.STATUS;
        } else if (e[2] === 'TRAVEL MODE') {
          e[1] = pickerValue.mood;
        }
        return e;
      });

      setValue(filterItem);
    }
  }, [pickerValue, pickerStatus]);

  const getDropDownRender = data => {
    let result = [];
    if (data[2].includes('TYPE')) {
      result[0] = true;
      result[1] =
        data[2] === 'TRAVEL ARRANGEMENT TYPE'
          ? dropDownValue.travel_arrangement_type
          : data[2] === 'LEAVE TYPE'
          ? dropDownValue.leave_type
          : dropDownValue;
    } else if (data[2].includes('PRIORITY')) {
      result[0] = true;
      result[1] = dropDownValue.priority;
    } else if (data[2].includes('STATUS')) {
      result[0] = true;
      result[1] = dropDownValue.status;
    } else if (data[2] === 'TRAVEL MODE') {
      result[0] = true;
      result[1] = [
        {label: 'BY BUS', value: 'BY BUS'},
        {label: 'BY TRAIN', value: 'BY TRAIN'},
        {label: 'BY PLAIN', value: 'BY PLAIN'},
        {label: 'BY TAXI', value: 'BY TAXI'},
        {label: 'BY RENTAL CAR', value: 'BY RENTAL CAR'},
        {label: 'BY OTHERS', value: 'BY OTHERS'},
      ];
    } else {
      result[0] = false;
      result[1] = [];
    }
    return result;
  };

  const getDropDownValue = data => {
    let value = '';

    if (data[2].includes('TYPE')) {
      value =
        data[2] === 'TRAVEL ARRANGEMENT TYPE'
          ? pickerValue.travel_arrangement_type
          : data[2] === 'LEAVE TYPE'
          ? pickerValue.leave_type
          : pickerValue.TYPE;
    } else if (data[2].includes('PRIORITY')) {
      value = pickerValue.PRIORITY;
    } else if (data[2].includes('STATUS')) {
      value = pickerValue.STATUS;
    } else if (data[2] === 'TRAVEL MODE') {
      value = pickerValue.mood;
    }
    return value;
  };

  const setDropDownValue = (data, info) => {
    let result = pickerValue;
    if (data[2].includes('TYPE')) {
      data[2] === 'TRAVEL ARRANGEMENT TYPE'
        ? (result.travel_arrangement_type = info)
        : data[2] === 'LEAVE TYPE'
        ? (result.leave_type = info)
        : (result.TYPE = info);

      setPickerValue(result);
    } else if (data[2].includes('PRIORITY')) {
      result.PRIORITY = info;
      setPickerValue(result);
    } else if (data[2].includes('STATUS')) {
      result.STATUS = info;
      setPickerValue(result);
    } else if (data[2] === 'TRAVEL MODE') {
      result.mood = info;
      setPickerValue(result);
    }

    setPickerStatus(!pickerStatus);
  };

  const _updateDateValue = (key, val) => {
    let filterItem = value.filter(e => {
      if (e[0] === key) {
        e[1] = val;
      }
      return e;
    });

    setValue(filterItem);
  };

  const _getDateShowStatus = name => {
    // let filterItem = value.filter(e => (e[0] === name ? e : null));

    // return filterItem[0][1];

    return name.includes('DATE');
  };

  const _getInputValue = name => {
    let filterItem = value.filter(e => (e[0] === name ? e : null));

    return filterItem[0][1];
  };

  const _isCheckBox = name => {
    return (
      <View style={{height: 50}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            let filterItem = value.filter(e => {
              console.log('e[0] === name', e[0]);
              if (e[0] === 'is_half') {
                e[1] = !checked ? '1' : '';
              }
              return e;
            });

            setValue(filterItem);

            setChecked(!checked);
          }}
        />
      </View>
    );
  };

  const FormControlItem = ({data}) => {
    const checkAttachment = data => {
      return data.includes('ATTACHMENTS') ||
        (data.includes('FILE') && !data.includes('PROFILE'))
        ? true
        : false;
    };

    data[1] === null ? (data[1] = '') : null;

    let checkResult =
      !data[2].includes('ID') ||
      data[0] === 'travel_company_id' ||
      data[0] === 'travel_approver_id'
        ? true
        : false;

    return checkResult ? (
      <>
        <FormControl.Label>{data[2]}</FormControl.Label>

        {checkAttachment(data[2]) ? (
          singleFile?.fileName ? (
            <View>
              <Text style={styles.textStyle}>
                File Name: {singleFile.fileName ? singleFile.fileName : ''}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={SelectFile}>
              <Text style={styles.buttonTextStyle}>
                {data[1].toString() ? 'Upload File' : 'Select File'}
              </Text>
            </TouchableOpacity>
          )
        ) : // check Document && Type
        getDropDownRender(data)[0] ? (
          <DropDown
            data={getDropDownRender(data)[1]}
            selectValue={val => setDropDownValue(data, val)}
            pickerValue={getDropDownValue(data)}
          />
        ) : // check DATE

        _getDateShowStatus(data[2]) ? (
          <Calendars
            valueDate={data[1]}
            keyDate={data[0]}
            updateDateValue={(key, val) => _updateDateValue(key, val)}
          />
        ) : // is checkBox
        data[2] === 'IS HALF' ? (
          _isCheckBox()
        ) : (
          <InputBox
            data={data}
            val={_getInputValue(data[0])}
            OnFocus={(name, val) => OnTextChange(name, val)}
          />
        )}
      </>
    ) : (
      <></>
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{modalName}</Text>
        <Box alignItems="center">
          <Box w="100%" maxWidth="300px">
            <FormControl isRequired>
              <Stack mx="3">
                <ScrollView
                  style={{
                    height: 290,
                  }}>
                  {value?.map((e, i) => (
                    <FormControlItem key={i} data={e} />
                  ))}
                </ScrollView>
              </Stack>
            </FormControl>
          </Box>
        </Box>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={[styles.button, styles.buttonConnect]}
            onPress={() => Onsubmit()}>
            <Text style={styles.textStyle}>
              {type === 'add' ? 'Add' : 'Update'}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonCancel]}
            onPress={onPress}>
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    // width: '80%',
    // height: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 15,
    color: '#151515',
    marginBottom: 10,
  },
  modalButton1: {
    backgroundColor: '#0099FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    // flexDirection:"column-reverse"
  },
  modalButton2: {
    backgroundColor: '#FF0099',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    // flexDirection:"column-reverse"
  },
  modalButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    // padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#c3c3c3',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    // marginLeft: 35,
    // marginRight: 35,
    // marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
  },
  buttonStyle: {
    width: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textInputStyle: {
    width: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#000',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    // height: "30%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '30%',
  },
  buttonCancel: {
    backgroundColor: '#FF0099',
  },
  buttonConnect: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#c3c3c3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // height: 200,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#f2c041',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
  },
});
