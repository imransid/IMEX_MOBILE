import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  ToastAndroid,
} from 'react-native';

import TableCard from '../../components/TableCard/TableCard';
import {ScaledSheet} from 'react-native-size-matters';
import CustomModal from '../../components/CustomModal/CustomModal';
import SearchBox from '../../components/searchBox/SearchBox';
import {_postApiFetch, _postApiADD, _searchData} from '../../services/Services';

import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import PlusButton from '../../components/plusButton';
import {useSelector} from 'react-redux';
import useFetchData from '../../components/HOC/withGetData';
import {TextInput} from 'react-native-paper';
import RnPdf from '../../components/GenaratePdf';
const SupportTicket = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const apiUri = useSelector(state => state.api.domainName);

  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = text => {
    setSearchText(text);
  };
  let data = useFetchData(
    [
      ['support_ticket_opener_id', id],
      ['support_ticket_com_id', 1],
    ],
    'working-on-support-ticket',
    'post',
    apiUri,
  );

  const [documentData, setDocumentData] = useState([]);
  const [documentLoader, setDocumentLoader] = useState(false);
  const [infoValue, setInfoValue] = useState([]);

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
    } catch (err) {
      console.log('Error in useEffect2 ', err);
    }

    return () => {
      controller.abort();
    };
  }, [data, searchText, documentData, documentLoader]);

  const OnEdit = async (info, type) => {
    setModalVisible(false);
    
    info[1] = ['support_ticket_opener_id', id, 'SUPPORT TICKET OPENER ID'];
    // info[5]= ['support_ticket_status',type,'SUPPORT TICKET STATUS'];
    console.log(info,"support ticket org")


    let parm = {
      bodyData: info,
      uri: 'support-ticket-update',
      domainName:apiUri,
    };

    console.log('parm', parm, info);

    const result = await _postApiFetch(parm);
console.log(result,"asdsdasdasdasdasd",parm)
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

    let finalData = objectData.filter(e => {
      if (
        e[0] === 'created_at' ||
        e[0] === 'updated_at' ||
        e[0] === 'support_ticket_department_name' ||
        e[0] === 'support_ticket_employee_name' ||
        e[0] === 'support_ticket_desc' ||
        e[0] === 'support_ticket_note' ||
        e[0] === 'support_ticket_attachment' ||
        e[0] === 'support_ticket_priority' ||
        e[0] === 'support_ticket_subject'
      ) {
      } else {
        e[2] = e[0].toUpperCase().replaceAll('_', ' ');
        return e;
      }
    });

    setInfoValue(finalData);
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
              modalName={'Support Ticket'}
              type={type}
              onValue={infoValue}
              dropDownValue={{
                priority: [
                  {label: 'Critical', value: 'Critical'},
                  {label: 'High', value: 'High'},
                  {label: 'Medium', value: 'Medium'},
                  {label: 'Low', value: 'Low'},
                ],
                status: [
                  {label: 'Pending', value: 'Pending'},
                  {label: 'Opened', value: 'Opened'},
                  {label: 'Closed', value: 'Closed'},
                ],
              }}
              onPress={(e, type) => {
                type === 'edit' ? OnEdit(e, type) : setModalVisible(false);
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
            <RnPdf Filename={'SupportTicket'} value={data[0]} />
          </View>
          {documentLoader ? (
            <CustomIndicator />
          ) : (
            documentData?.map((data, i) => (
              <TableCard
                key={i}
                sl={i + 1}
                onEdit={() => onPressEdit(data)}
                datas={[
                  {
                    title: 'Employee',
                    value: data.support_ticket_employee_name,
                  },
                  {
                    title: 'Department',
                    value: data.support_ticket_department_name,
                  },
                  {
                    title: 'Priority',
                    value: data.support_ticket_priority,
                  },
                  {
                    title: 'Subject',
                    value: data.support_ticket_subject,
                  },
                  {
                    title: 'Ticket notes',
                    value: data.support_ticket_note,
                  },
                  {
                    title: 'Ticket Attachments',
                    value: data.support_ticket_attachment,
                  },
                  {
                    title: 'Description',
                    value: data.support_ticket_desc,
                  },
                  {
                    title: 'Status',
                    value: data.support_ticket_status,
                  },
                ]}
                variant="Immigration"
                buttonVisible={true}
                deleteButton={false}
              />
            ))
          )}

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
  activityIndicator: {alignSelf: 'center', paddingVertical: '50%'},
  pdfBox: {
    paddingTop: 10,
    paddingRight: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
});
export default SupportTicket;
