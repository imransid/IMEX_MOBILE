import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  ToastAndroid,
} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import TableCard from '../../components/TableCard/TableCard';
import { ScaledSheet } from 'react-native-size-matters';
import CustomModal from '../../components/CustomModal/CustomModal';
import SearchBox from '../../components/searchBox/SearchBox';
import { _postApiFetch, _postApiADD, _searchData } from '../../services/Services';

import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import PlusButton from '../../components/plusButton';
import { useSelector } from 'react-redux';
import useFetchData from '../../components/HOC/withGetData';
import TableCardAttachment from '../../components/TableCardAttachment/TableCardAttachment';
import RnPdf from '../../components/GenaratePdf';
import { TextInput } from 'react-native-paper';
const Termination = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = (text) => {
    setSearchText(text);
  }
  const apiUri = useSelector(state => state.api.domainName);

  let data = useFetchData(
    [['termination_employee_id', id]],
    'termination',
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

  // useEffect(() => {
  //   try {
  //     data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
  //     documentData.length === 0 ? setDocumentData(data[0]) : null;
  //   } catch (err) {
  //     console.log('Error in useEffect ', err);
  //   }
  // }, [data, documentLoader, documentData]);

  useEffect(() => {
    const controller = new AbortController();
    try {
      console.log('searchText', searchText.length);
      let lngth = searchText.length
      if (lngth > 0) {
        var newData = _searchData(documentData, searchText);
        // setDocumentData(newData);
        documentData.length !== newData.length ? setDocumentData(newData) : null;
      } else {
        data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
        data[0].length !== documentData.length ? setDocumentData(data[0]) : null;

      }
    } catch (err) {
      console.log('Error in useEffect2 ', err);
    }


    return () => {
      controller.abort();
    }

  }, [data, searchText, documentData, documentLoader]);


  const OnEdit = async (info, type) => {
    setModalVisible(false);

    let filterInfo = info.filter(e => {
      if (
        e[0] !== 'qualification_employee_id' &&
        e[0] !== 'qualification_com_id'
      ) {
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
      uri: 'qualification-update',
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
      ['qualification_com_id', com_id.toString(), 'qualification_com_id'],
      ['qualification_employee_id', id.toString(), 'qualification_employee_id'],
      ['qualification_institute_name', '', 'qualification_institute_name'],
      ['qualification_education_level', '', 'qualification_education_level'],
      ['qualification_from_date', 'Select Date', 'qualification_from_date'],
      ['qualification_to_date', 'Select Date', 'qualification_to_date'],
      ['qualification_language_version', '', 'qualification_language_version'],
      ['qualification_skill', '', 'qualification_skill'],
      ['qualification_description', '', 'qualification_description'],
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
      uri: 'qualification-add',
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
      uri: 'qualification-delete',
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
              modalName={'Qualification'}
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
            <TextInput
              label='Search'
              value={searchText}
              onChangeText={text => onChangeSearchText(text)}
              mode="outlined"
            />
          </View>
          <View style={styles.pdfBox}>
            <RnPdf Filename={'Termination'} value={data[0]} />
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
                    title: 'Employee',
                    value: data.termination_employee_name,
                  },
                  {
                    title: 'Department',
                    value: data.termination_department_name,
                  },
                  {
                    title: 'Termination Type',
                    value: data.termination_type,
                  },
                  { title: 'Description', value: data.termination_desc },
                  {
                    title: 'Termination Date',
                    value: data.termination_date,
                  },
                  {
                    title: 'Notice Date',
                    value: data.termination_notice_date,
                  },
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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#F2F2F2',
  },
  eventList: {
    marginTop: 20,
  },
  listitem: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  sl: {
    flexDirection: 'column',
  },
  slno: {
    fontSize: 50,
    color: '#0099FF',
    fontWeight: '600',
  },
  eventMonth: {
    fontSize: 16,
    color: '#0099FF',
    fontWeight: '600',
  },
  poilcyContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  policyTitle: {
    fontSize: 18,
    color: '#151515',
  },
  addedBy: {
    fontSize: 16,
    color: '#151515',
  },
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
    width: '80%',
    height: '80%',
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
  modalButton: {
    backgroundColor: '#0099FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  activityIndicator: { alignSelf: 'center', paddingVertical: '50%' },
  pdfBox: {
    paddingTop: 10,
    paddingRight: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
});
export default Termination;
