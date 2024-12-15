import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Modal, View ,Pressable,Text} from 'react-native';

import TableCard from '../../components/TableCard/TableCard';
import { ScaledSheet } from 'react-native-size-matters';

import SearchBox from '../../components/searchBox/SearchBox';
import { _postApiFetch, _searchData } from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';

import { useSelector } from 'react-redux';

import useFetchData from '../../components/HOC/withGetData';
import { Button, TextInput } from 'react-native-paper';
import RnPdf from '../../components/GenaratePdf';
import CalendarPicker from 'react-native-calendar-picker';
import axios from 'axios';

const SupervisorDatewise = () => {
    const apiUri = useSelector(state => state.api.domainName);

    const id = useSelector(state => state.user.userAllData.id);
    const [searchText, setSearchText] = useState('');
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startModal, setStartModal] = useState(false)
    const [endModal, setEndModal] = useState(false)


   

    function onStartDateChange(date) {
        setStartDate(
          date._i.year + '-' + (date._i.month+1) + '-' + date._i.day,
        );
        console.log(startDate,"endDate")
      }

      function onEndDateChange(date) {
        setEndDate(
          date._i.year + '-' + (date._i.month+1) + '-' + date._i.day,
        );
        console.log(endDate,"endDate")
      }

    

    const [documentData, setDocumentData] = useState([]);
    const [documentLoader, setDocumentLoader] = useState(false);

    useEffect(() => {
        setDocumentLoader(true)
       
            var config = {
                method: 'post',
                url: `https://hrmspvm.predictionla.com/api/user/supervisor-employee-attendance-show?supervisor_id=7&start_date=${startDate}&end_date=${endDate}`,
                headers: { }
              };
              
              axios(config)
              .then(function (response) {
                setDocumentData(response.data.data)
                console.log(JSON.stringify(response.data));
                setDocumentLoader(false)
              })
              .catch(function (error) {
                console.log("data error",error);
              });
       
    
    },[startDate,endDate] );
   
    return (
        <>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <Modal
                        animationType='slide'
                        onRequestClose={() => setStartModal(false)}
                        transparent={true}
                        visible={startModal}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Select Start Date</Text>
                                <CalendarPicker 
                                onDateChange={(date)=>onStartDateChange(date)}
                                />
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setStartModal(false)}
                                >
                                    <Text style={styles.textStyle}>Select</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType='slide'
                        onRequestClose={() => setEndModal(false)}
                        transparent={true}
                        visible={endModal}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Select Start Date</Text>
                                <CalendarPicker 
                                onDateChange={(date)=>onEndDateChange(date)}
                                />
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setEndModal(false)}
                                >
                                    <Text style={styles.textStyle}>Select</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.search}>
                        <Button onPress={() => setStartModal(true)}>{startDate==""?"Select Start Date":startDate}</Button>
                        <Button onPress={() => setEndModal(true)}>{endDate==""?"Select End Date":endDate}</Button>

                    </View>
                    {/* <View style={styles.pdfBox}>
                        <RnPdf Filename={'Loan'} value={data[0]} />
                    </View> */}


                    {!documentLoader &&

                        documentData?.map((data, index) =>
                            <TableCard
                                key={index}
                                sl={index + 1}
                                datas={[
                                    { title: 'Name', value: data.employee_name },

                                    { title: 'Date', value: data.attendance_date },
                                    {
                                        title: 'Clock in',
                                        value: data.clock_in,
                                    },
                                    { title: 'Clock out', value: data.clock_out },
                                    { title: 'Check in out', value: data.check_in_out },
                                    { title: 'Late', value: data.time_late },
                                    { title: 'Early Leaving', value: data.early_leaving },
                                    { title: 'Overtime', value: data.overtime },
                                    { title: 'Total Work', value: data.total_work },
                                    { title: 'Total Rest', value: data.total_rest },
                                    { title: 'Status', value: data.attendance_status },



                                ]}
                                variant="Immigration"
                                onEdit={() => setEditModal(true)}
                                onDelete={() => setDeleteModal(true)}
                                buttonVisible={false}
                            />)}

                </SafeAreaView>
            </ScrollView>
        </>
    );
};
export default SupervisorDatewise;

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
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
