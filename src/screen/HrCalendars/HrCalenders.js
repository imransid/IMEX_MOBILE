import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity, Modal,StyleSheet,Text,Pressable} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
// import Typography from '../components/Typography';
import {Paragraph} from 'react-native-paper';
import {_postApiFetch} from '../../services/Services';
import useFetchData from '../../components/HOC/withGetData';
import {useSelector} from 'react-redux';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const apiUri = useSelector(state => state.api.domainName);

  const [items, setItems] = useState({});
  const [appLoadItems, setAppLoadItems] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2022-04-05');
  const [documentData, setDocumentData] = useState([]);
  const [documentLoader, setDocumentLoader] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [modalVisible, setModalVisible] = useState(false);
  let data = useFetchData(
    [
      ['company_calendar_employee_id', id],
      ['company_calendar_com_id', com_id],
    ],
    'calendar',
    'post',
    apiUri,
  );

  useEffect(() => {
    console.log('HR Calendar data ', data);
    try {
      data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;

      if (documentData.length !== data[0].length) {
        let value = {};

        let dataDat = '';

        data[0]?.map(e => {
          if (value[e.start] !== undefined) {
            value[e.start].push({
              name: e.title,
            });
          } else {
            value[e.start] = [
              {
                name: e.title,
                calander_detail_type: e.calander_detail_type,
company_calendar_employee_name: e.company_calendar_employee_name,
start: e.start,
end: e.end,
id: e.id,
              },
            ];
          }
          dataDat = e.start;
        });

        setAppLoadItems(value);
        setSelectedDate(dataDat);

        setDocumentData(data[0]);
      }
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
  }, [data, documentLoader, documentData]);

  // const loadItems = day => {
  //   setTimeout(() => {
  //     console.log('data', data);
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach(key => {
  //       newItems[key] = items[key];
  //     });

  //     console.log(newItems);
  //     setItems(newItems);
  //   }, 1000);
  // };
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data);
  const loadItems = day => {
    let itemData = {
      '2017-05-22': [{name: 'item 1 - any js object'}],
      '2017-05-23': [{name: 'item 2 - any js object', height: 80}],
      '2017-05-24': [],
      '2017-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}],
    };

    if (appLoadItems !== null) {
      console.log('value C', itemData, appLoadItems);

      setItems(appLoadItems);
    }
  };

  const renderItem = item => {
    console.log('item', item);
    return (
      <TouchableOpacity
        style={{marginRight: 10, marginTop: 17}}
        onPress={() => setModalVisible(!modalVisible)}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{item.id}</Text>
            <Text style={styles.modalText}>{item.name}</Text>
            <Text style={styles.modalText}>{item.calander_detail_type}</Text>
            <Text style={styles.modalText}>{item.company_calendar_employee_name}</Text>
            <Text style={styles.modalText}>Start:{item.start}</Text>
            <Text style={styles.modalText}>End:{item.end}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Paragraph>{item.name}</Paragraph>
              {/* <Avatar.Text label="J" /> */}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {documentData.length > 0 ? (
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={selectedDate}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Schedule;
