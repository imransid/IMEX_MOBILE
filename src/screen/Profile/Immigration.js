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

const Immigration = () => {
  const apiUri = useSelector(state => state.api.domainName);
  const [modalVisible, setModalVisible] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = text => {
    setSearchText(text);
  };
  let data = useFetchData(
    [['immigrant_employee_id', id]],
    'immigration',
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
      if (e[0] !== 'immigrant_employee_id' && e[0] !== 'immigrant_com_id') {
        return e;
      }
    });

    let parmZ = [];

    for (let i = 0; i < filterInfo.length; i++) {
      if (filterInfo[i][0] === 'immigrant_document_type') {
        if (filterInfo[i][1] !== undefined) {
          parmZ.push(filterInfo[i]);
        } else {
          filterInfo[i][1] = documentType;
          console.log('infoValue', documentType);
          parmZ.push(filterInfo[i]);
        }
      } else if (filterInfo[i][0] === 'immigrant_document_file') {
        if (typeof filterInfo[i][1] !== 'string') {
          parmZ.push(filterInfo[i]);
        }
      } else {
        parmZ.push(filterInfo[i]);
      }
    }

    let id = Math.floor(Math.random() * Date.now()).toString();

    let extraData = [
      'immigrant_document_number',
      id,
      'immigrant document number',
    ];

    parmZ.push(extraData);

    let parm = {
      bodyData: parmZ,
      uri: 'immigration-update',
      domainName: apiUri,
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
      ['immigrant_com_id', com_id.toString(), 'immigrant_com_id'],
      ['immigrant_employee_id', id.toString(), 'immigrant_employee_id'],
      ['immigrant_document_type', '', 'immigrant_document_type'],
      ['immigrant_document_number', '', 'immigrant_document_number'],
      ['immigrant_issue_date', 'Select Date', 'immigrant_issue_date'],
      ['immigrant_expired_date', 'Select Date', 'immigrant_expired_date'],
      [
        'immigrant_eligible_review_date',
        'Select Date',
        'immigrant_eligible_review_date',
      ],
      ['immigrant_document_file', '', 'immigrant_document_file'],
      ['immigrant_country', '', 'immigrant_country'],
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
      uri: 'immigration-add',
      domainName: apiUri,
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
      uri: 'immigration-delete',
      domainName: apiUri,
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
              modalName={'Immigration'}
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
            <RnPdf Filename={'Immigration'} value={data[0]} />
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
                      'immigrant_employee_id',
                      id.toString(),
                      'immigrant_employee_id',
                    ],
                    ['id', data.id.toString(), 'id'],
                  ];
                  _onDelete(val);
                  setShowAlert(false);
                }}
                datas={[
                  {title: 'Document Type', value: data.immigrant_document_type},

                  {title: 'Issue Date', value: data.immigrant_issue_date},
                  {
                    title: 'Review Date',
                    value: data.immigrant_eligible_review_date,
                  },
                  {title: 'Expired Dtae', value: data.immigrant_expired_date},

                  {title: 'Document File', value: data.immigrant_document_file},
                  {title: 'Country', value: data.immigrant_country},
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
export default Immigration;
