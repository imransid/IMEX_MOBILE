import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Modal, View } from 'react-native';
import TableCard from '../../components/TableCard/TableCard';
import { ScaledSheet } from 'react-native-size-matters';
import SearchBox from '../../components/searchBox/SearchBox';
import { _postApiFetch, _searchData } from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import { useSelector } from 'react-redux';

import useFetchData from '../../components/HOC/withGetData';

import { TextInput } from 'react-native-paper';
import RnPdf from '../../components/GenaratePdf';


const Overtime = () => {
    const apiUri = useSelector(state => state.api.domainName);

    const id = useSelector(state => state.user.userAllData.id);
    const [searchText, setSearchText] = useState('');
    const onChangeSearchText = (text) => {
        setSearchText(text);
    }


    let data = useFetchData(
        [['over_time_employee_id', id]],
        'over-time',
        'post',
        apiUri
    );
    console.log('data', data);

    const [documentData, setDocumentData] = useState([]);
    const [documentLoader, setDocumentLoader] = useState(false);

    // useEffect(() => {
    //     try {
    //         data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
    //         data[0].length !== documentData.length ? setDocumentData(data[0]) : null;
    //     } catch (err) {
    //         console.log('Error in useEffect ', err);
    //     }


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


    return (
        <>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.search}>
                        <TextInput
                            label='Search'
                            value={searchText}
                            onChangeText={text => onChangeSearchText(text)}
                            mode="outlined"
                        />
                    </View>
                    <View style={styles.pdfBox}>
                        <RnPdf Filename={'Overtime'} value={data[0]} />
                    </View>


                    {documentLoader ? <CustomIndicator /> :
                        documentData?.map((data, i) => (
                            <TableCard
                                key={i}
                                sl={data.id}
                                datas={[
                                    // { title: 'Company ID', value: data.over_time_com_id },
                                    // { title: 'Employee ID', value: data.over_time_employee_id },
                                    { title: 'Time Date', value: data.over_time_date },
                                    { title: 'Overtime Company Duty in Seconds', value: data.over_time_company_duty_in_seconds },
                                    { title: 'Overtime Employee in Seconds', value: data.over_time_employee_in_seconds },
                                    { title: 'Overtime Rate', value: data.over_time_rate },
                                ]}
                                variant="Other-Allowance"
                                onEdit={() => setEditModal(true)}
                                onDelete={() => setDeleteModal(true)}
                                buttonVisible={false}
                            />
                        ))}

                </SafeAreaView>
            </ScrollView>

        </>
    );
};
export default Overtime;

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
});
