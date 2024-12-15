import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  ToastAndroid,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

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

import RnPdf from '../../components/GenaratePdf';
import {TextInput} from 'react-native-paper';

const Document = () => {
  const apiUri = useSelector(state => state.api.domainName);
  const [modalVisible, setModalVisible] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = useState('');

  hangeSearchText = text => {
    setSearchText(text);
  };

  let data = useFetchData(
    [['document_employee_id', id]],
    'document',
    'post',
    apiUri,
  );

  const [documentData, setDocumentData] = useState([]);
  const [documentType, setDocumentType] = useState('');
  const [documentLoader, setDocumentLoader] = useState(false);
  const [infoValue, setInfoValue] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const [updateAva, setUpdate] = useState(false);

  // type
  const [type, setType] = useState('');

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
      domainName: apiUri,
    };

    const result = await _postApiFetch(parm);

    result.status ? setDocumentData(result.data) : null;

    setUpdate(true);

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
      domainName: apiUri,
    };

    const result = await _postApiADD(parm);

    result.status ? setDocumentData(result.data) : null;

    setUpdate(true);

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
            <KeyboardAvoidingView
              style={{flex: 1, backgroundColor: '#fff'}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              enabled>
              <CustomModal
                modalName={'Document'}
                type={type}
                onValue={infoValue}
                dropDownValue={[
                  {label: 'Other', value: 'Other'},
                  {label: 'Certificate', value: 'Certificate'},
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
            </KeyboardAvoidingView>
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
                  let val = [
                    [
                      'document_employee_id',
                      id.toString(),
                      'document_employee_id',
                    ],
                    ['id', data.id.toString(), 'id'],
                  ];
                  _onDelete(val);
                  setShowAlert(false);
                }}
                datas={[
                  {
                    title: 'Document Uploaded BY',
                    value: data.document_uploaded_by,
                  },
                  {title: 'Document Type', value: data.document_type},
                  {title: 'Document Title', value: data.document_title},
                  {title: 'Description', value: data.document_description},
                  {title: 'Document File', value: data.document_file},
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

export default Document;
