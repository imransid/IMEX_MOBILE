import React, { useState, useEffect } from 'react';
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
import { _postApiFetch, _postApiADD, _searchData } from '../../services/Services';

import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import PlusButton from '../../components/plusButton';
import { useSelector } from 'react-redux';
import useFetchData from '../../components/HOC/withGetData';
import styles from './Styles';

const ApproveEmployeeLeaves = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = text => {
    setSearchText(text);
  };

  const apiUri = useSelector(state => state.api.domainName);

  let data = useFetchData(
    [
      ['id', 95],
      ['leave_approver_id', id],
      ['leave_approver_com_id', com_id],
    ],
    'approving-leave',
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

  useEffect(() => {
    try {
      data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
      documentData.length === 0 ? setDocumentData(data[0]) : null;
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
  }, [data, documentLoader, documentData]);

  useEffect(() => {
    try {
      console.log('searchText', searchText.length);
      let lngth = searchText.length;
      if (lngth > 0) {
        var newData = _searchData(documentData, searchText);
        setDocumentData(newData);
      } else {
        data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
      }
    } catch (err) {
      console.log('Error in useEffect2 ', err);
    }
  }, [data, searchText, documentData]);

  const OnEdit = async (info, type) => {
    setModalVisible(false);

    let filterInfo = info.filter(e => {
      if (e[0] !== 'document_employee_id' && e[0] !== 'document_com_id') {
        return e;
      }
    });

    let parmZ = [];

    // when need to check attachment and type

    for (let i = 0; i < filterInfo.length; i++) {
      if (filterInfo[i][0] === 'document_type') {
        if (filterInfo[i][1] !== undefined) {
          parmZ.push(filterInfo[i]);
        } else {
          filterInfo[i][1] = documentType;
          console.log('infoValue', documentType);
          parmZ.push(filterInfo[i]);
        }
      } else if (filterInfo[i][0] === 'document_file') {
        if (typeof filterInfo[i][1] !== 'string') {
          parmZ.push(filterInfo[i]);
        }
      } else {
        parmZ.push(filterInfo[i]);
      }
    }

    let parm = {
      bodyData: parmZ,
      uri: 'document-update',
    };

    const result = await _postApiFetch(parm);

    result.status ? setDocumentData(result.data) : null;

    let msg = result.status
      ? type === 'edit'
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

    setDocumentType(data.document_type);

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
      ['document_com_id', com_id.toString(), 'document_com_id'],
      ['document_employee_id', id.toString(), 'document_employee_id'],
      ['document_title', '', 'document_title'],
      ['document_type', '', 'document_type'],
      ['document_description', '', 'document_description'],
      ['document_file', '', 'document_employee_id'],
      ['document_date', 'Select Date', 'document_date'],
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
      uri: 'document-add',
    };

    const result = await _postApiADD(parm);

    result.status ? setDocumentData(result.data) : null;

    if (result.status) {
      setDocumentData(result.data);
      setDocumentLoader(false);
    } else {
      setDocumentLoader(false);
    }

    let msg = result.status
      ? type === 'edit'
        ? 'Update Successfully'
        : 'Save Successfully'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
  };

  const _onDelete = async info => {
    setModalVisible(false);
    setDocumentLoader(true);

    let parm = {
      bodyData: info,
      uri: 'document-delete',
    };

    const result = await _postApiADD(parm);

    result.status ? setDocumentData(result.data) : null;

    if (result.status) {
      setDocumentData(result.data);
      setDocumentLoader(false);
    } else {
      setDocumentLoader(false);
    }

    result.status ? setDocumentData(result.data) : null;

    let msg = result.status
      ? 'Deleted Successfully. !'
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
              modalName={'Document'}
              type={type}
              onValue={infoValue}
              dropDownValue={[
                { label: 'Other', value: 'Other' },
                { label: 'Certificate', value: 'Certificate' },
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
            {/* <TextInput
              label="Search"
              value={searchText}
              onChangeText={text => onChangeSearchText(text)}
              mode="outlined"
            /> */}
          </View>
          <View style={styles.pdfBox}>
            <RnPdf Filename={'Document'} value={data[0]} />
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
                  let val = [['id', data.id.toString(), 'ID']];
                  _onDelete(val);
                  setShowAlert(false);
                }}
                datas={[
                  {
                    title: 'EMPLOYEE NAME',
                    value: data.employee_name,
                  },
                  { title: 'Department', value: data.attendance_date },
                  { title: 'Designation', value: data.attendance_status },
                  { title: 'Start Date', value: data.clock_in },
                  { title: 'End Name', value: data.check_in_out },
                ]}
                deleteButton={true}
                buttonVisible={false}
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
      {/* <PlusButton OnPress={() => OnAddNow()} /> */}
    </>
  );
};

export default ApproveEmployeeLeaves;
