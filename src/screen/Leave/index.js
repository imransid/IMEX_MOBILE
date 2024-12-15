import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  ToastAndroid,
} from 'react-native';
import CustomModal from '../../components/CustomModal/CustomModal';
import TableCard from '../../components/TableCard/TableCard';
import {ScaledSheet} from 'react-native-size-matters';

import SearchBox from '../../components/searchBox/SearchBox';
import {
  _postApiFetch,
  _searchData,
  _postApiNormalADD,
} from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import PlusButton from '../../components/plusButton';

import {useSelector} from 'react-redux';

import useFetchData from '../../components/HOC/withGetData';
import {TextInput} from 'react-native-paper';
import RnPdf from '../../components/GenaratePdf';

const Leave = ({navigation, route}) => {
  console.log('navigation, route', navigation, route);

  const apiUri = useSelector(state => state.api.domainName);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateAva, setUpdate] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);

  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = text => {
    setSearchText(text);
  };

  let data = useFetchData(
    [['leaves_employee_id', id]],
    'leave',
    'post',
    apiUri,
  );

  const [documentData, setDocumentData] = useState([]);
  const [documentLoader, setDocumentLoader] = useState(false);
  const [type, setType] = useState('');
  const [infoValue, setInfoValue] = useState([]);

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

  const OnAddNow = () => {
    setType('add');

    let objectData = [
      ['com_id', com_id.toString(), 'com_id'],
      ['employee_id', id.toString(), 'employee_id'],
      ['leave_type', '', 'leave_type'],
      ['leave_reason', '', 'leave_reason'],
      ['start_date', 'Select Date', 'start_date'],
      ['end_date', 'Select Date', 'end_date'],
      ['is_half', '', 'is_half'],
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

  const showToastWithGravityAndOffset = msg => {
    let data = msg === '' || undefined ? ' . ' : msg;
    ToastAndroid.showWithGravityAndOffset(
      data,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const OnAddPress = async (info, type) => {
    setModalVisible(false);
    setDocumentLoader(true);

    let parm = {
      bodyData: info,
      uri: 'leave-request-sending',
      domainName: apiUri,
    };

    setUpdate(true);

    const result = await _postApiNormalADD(parm);

    console.log('result', result);

    if (result.status) {
      result.data ? setDocumentData(result.data) : null;
      setDocumentLoader(false);
    } else {
      setDocumentLoader(false);
    }

    let msg =
      result.msg === '' || undefined
        ? result.status
          ? type === 'edit'
            ? 'Update Successfully'
            : 'Save Successfully'
          : 'Failed Please Check Again.!'
        : result.msg;

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
              modalName={'Leave'}
              type={type}
              onValue={infoValue}
              dropDownValue={{
                leave_type: [
                  {label: 'Sick leave', value: '3'},
                  {label: 'Casual Leave', value: '1'},
                ],
                mode: [],
              }}
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
            <RnPdf Filename={'Leave'} value={data[0]} />
          </View>
          {documentLoader && <CustomIndicator />}

          {!documentLoader &&
            documentData?.map((data, i) => (
              <TableCard
                key={i}
                sl={data.id}
                datas={[
                  // {title: 'Commission Name', data: data.id},
                  {title: 'Leave Type', value: data.leaves_leave_type_name},
                  {title: 'Department', value: data.leaves_department_name},
                  {title: 'Designation', value: data.leaves_designation_name},
                  {title: 'Employee Name', value: data.leaves_employee_name},
                  {title: 'Leave Start Date', value: data.leaves_start_date},
                  {title: 'Leave End Date', value: data.leaves_end_date},
                  {title: 'Total Days', value: data.total_days},
                  {title: 'Reason', value: data.leave_reason},
                  {title: 'Status', value: data.leaves_status},
                  {title: 'Region', value: data.leaves_region_name},
                  {title: 'Area', value: data.leaves_area_name},
                  {title: 'Territory', value: data.leaves_territory_name},
                  {title: 'Town', value: data.leaves_town_name},
                  {title: 'House', value: data.leaves_db_house_name},
                  {title: 'Is Half', value: data.is_half},
                ]}
                variant="Leaves"
                buttonVisible={false}
              />
            ))}
        </SafeAreaView>
      </ScrollView>
      <PlusButton OnPress={() => OnAddNow()} />
    </>
  );
};
export default Leave;

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
  activityIndicator: {alignSelf: 'center', paddingVertical: '50%'},
  addbutton: {
    backgroundColor: '#0099FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  pdfBox: {
    paddingTop: 10,
    paddingRight: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
});
