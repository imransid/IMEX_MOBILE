import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  ToastAndroid,
} from 'react-native';
import RnPdf from '../../components/GenaratePdf';
import AwesomeAlert from 'react-native-awesome-alerts';
import TableCard from '../../components/TableCard/TableCard';
import CustomModal from '../../components/CustomModal/CustomModal';
import SearchBox from '../../components/searchBox/SearchBox';
import {_postApiFetch, _postApiADD, _searchData} from '../../services/Services';

import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import PlusButton from '../../components/plusButton';
import {useSelector} from 'react-redux';
import useFetchData from '../../components/HOC/withGetData';
import styles from './Styles';
import {TextInput} from 'react-native-paper';

const EmergencyContacts = () => {
  const apiUri = useSelector(state => state.api.domainName);
  const [modalVisible, setModalVisible] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = text => {
    setSearchText(text);
  };
  let data = useFetchData(
    [['emergency_contact_employee_id', id]],
    'emergency-contact',
    'post',
    apiUri,
  );

  const [documentData, setDocumentData] = useState([]);
  const [documentType, setDocumentType] = useState('');
  const [documentLoader, setDocumentLoader] = useState(false);
  const [infoValue, setInfoValue] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // type
  const [type, setType] = useState('');

  const [updateAva, setUpdate] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    try {
      if (!updateAva) {
        let lngth = searchText.length;
        if (lngth > 0) {
          var newData = _searchData(documentData, searchText);
          // setDocumentData(newData);
          documentData.length !== newData.length
            ? setDocumentData(newData)
            : null;
        } else {
          data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
          data[0].length !== documentData.length
            ? setDocumentData(data[0])
            : null;
        }
      }
    } catch (err) {
      console.log('Error in useEffect2 ', err);
    }

    return () => {
      controller.abort();
    };
  }, [data, searchText, documentData, documentLoader, updateAva]);

  const OnEdit = async (info, type) => {
    setModalVisible(false);

    let filterInfo = info.filter(e => {
      if (
        e[0] !== 'emergency_contact_employee_id' &&
        e[0] !== 'emergency_contact_com_id'
      ) {
        return e;
      }
    });

    let parm = {
      bodyData: filterInfo,
      uri: 'emergency-contact-update',
      domainName: apiUri,
    };

    const result = await _postApiFetch(parm);

    result.status ? setUpdate(true) : null;

    result.status ? setDocumentData(result.data) : null;

    let msg = result.status
      ? result.msg
        ? result.msg
        : type === 'edit'
        ? 'Update Successfully'
        : 'Save Successfully'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
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

  const onPressEdit = data => {
    setModalVisible(true);

    setType('edit');

    let objectData = Object.entries(data);

    setDocumentType(data.immigrant_document_type);

    let finalData = objectData.filter(e => {
      if (e[0] === 'created_at' || e[0] === 'updated_at') {
      } else {
        e[2] = e[0].toUpperCase().replaceAll('_', ' ');
        return e;
      }
    });

    setInfoValue(finalData);
  };

  const OnAddNow = () => {
    setType('add');

    let objectData = [
      [
        'emergency_contact_com_id',
        com_id.toString(),
        'emergency_contact_com_id',
      ],
      [
        'emergency_contact_employee_id',
        id.toString(),
        'emergency_contact_employee_id',
      ],
      ['emergency_contact_name', '', 'emergency_contact_name'],
      ['emergency_contact_relation', '', 'emergency_contact_relation'],
      ['emergency_contact_email', '', 'emergency_contact_email'],
      ['emergency_contact_phone', '', 'emergency_contact_phone'],
      ['emergency_contact_address', '', 'emergency_contact_address'],
    ];

    let finalData = objectData.filter(e => {
      if (e[0] === 'created_at' || e[0] === 'updated_at') {
      } else {
        e[2] = e[0].toUpperCase().replaceAll('_', ' ');
        return e;
      }
    });

    setInfoValue(finalData);

    setModalVisible(true);
  };

  const OnAddPress = async (info, type) => {
    setModalVisible(false);
    setDocumentLoader(true);

    let parm = {
      bodyData: info,
      uri: 'emergency-contact-add',
      domainName: apiUri,
    };

    const result = await _postApiADD(parm);

    result.status ? setUpdate(true) : null;

    if (result.status) {
      setDocumentData(result.data);
      setDocumentLoader(false);
    } else {
      setDocumentLoader(false);
    }

    let msg = result.status
      ? result.msg
        ? result.msg
        : type === 'edit'
        ? 'Update Successfully'
        : 'Save Successfully'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
  };

  const _onDelete = async info => {
    setModalVisible(false);
    setDocumentLoader(true);

    console.log('info', info);

    let parm = {
      bodyData: info,
      uri: 'emergency-contact-delete',
      domainName: apiUri,
    };

    const result = await _postApiADD(parm);

    result.status ? setUpdate(true) : null;

    result.status ? setDocumentData(result.data) : null;

    if (result.status) {
      setDocumentData(result.data);
      setDocumentLoader(false);
    } else {
      setDocumentLoader(false);
    }

    result.status ? setDocumentData(result.data) : null;

    let msg = result.status
      ? result.msg
        ? result.msg
        : 'net issue!'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
  };

  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <CustomModal
              modalName={'Emergency Contact'}
              type={type}
              onValue={infoValue}
              dropDownValue={[
                {label: 'VIP', value: 'VIP'},
                {label: 'VVIP', value: 'VVIP'},
              ]}
              onPress={(e, type) => {
                if (type) {
                  type === 'edit' ? OnEdit(e, type) : OnAddPress(e, type);
                } else {
                  setModalVisible(false);
                }
              }}
              children
            />
          </Modal>
          <View style={styles.search}>
            <TextInput
              label="Search"
              value={searchText}
              onChangeText={text => onChangeSearchText(text)}
              mode="outlined"
            />
          </View>
          <View style={styles.pdfBox}>
            <RnPdf Filename={'EmergencyContacts'} value={data[0]} />
          </View>
          {documentLoader ? (
            <CustomIndicator />
          ) : (
            documentData?.map((data, i) => (
              <TableCard
                key={i}
                sl={i + 1}
                onEdit={() => onPressEdit(data)}
                onDelete={() => {
                  let val = [
                    [
                      'emergency_contact_employee_id',
                      id.toString(),
                      'emergency_contact_employee_id',
                    ],
                    ['id', data.id.toString(), 'id'],
                  ];
                  _onDelete(val);
                  setShowAlert(false);
                }}
                datas={[
                  {
                    title: 'Name',
                    value: data.emergency_contact_name,
                  },
                  {title: 'Relation', value: data.emergency_contact_relation},
                  {title: 'Email', value: data.emergency_contact_email},
                  {title: 'Phone', value: data.emergency_contact_phone},
                  {title: 'Address', value: data.emergency_contact_address},
                ]}
                deleteButton={true}
                buttonVisible={true}
                variant="Immigration"
              />
            ))
          )}

          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title=""
            message="Are You Sure Want To Delete it?"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Yes, delete it"
            confirmButtonColor="#DD6B55"
            onCancelPressed={() => {
              // this.hideAlert();
              setShowAlert(false);
            }}
            onConfirmPressed={() => {
              console.log('id', infoValue);
              // this.hideAlert();
            }}
          />

          {/* ))} */}
          {/* </TouchableOpacity> */}
        </SafeAreaView>
      </ScrollView>
      <PlusButton OnPress={() => OnAddNow()} />
    </>
  );
};

export default EmergencyContacts;
