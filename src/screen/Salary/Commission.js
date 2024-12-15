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

const Commission = () => {

    const [searchText, setSearchText] = useState('');
    const onChangeSearchText = (text) => {
        setSearchText(text);
    }
    const apiUri = useSelector(state => state.api.domainName);


    const id = useSelector(state => state.user.userAllData.id);

    let data = useFetchData(
        [['commission_employee_id', id]],
        'commission',
        'post',
        apiUri
    );

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
        try {
            console.log('searchText', searchText.length);
            let lngth = searchText.length
            if (lngth > 0) {
                var newData = _searchData(documentData, searchText);
                setDocumentData(newData);
            } else {
                data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
                data[0].length !== documentData.length ? setDocumentData(data[0]) : null;

            }
        } catch (err) {
            console.log('Error in useEffect2 ', err);
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
                        <RnPdf Filename={'Commission'} value={data[0]} />
                    </View>


                    {documentLoader ? <CustomIndicator /> :
                        documentData?.map((data, i) => (
                            <TableCard
                                key={i}
                                sl={data.id}
                                datas={[

                                    {
                                        title: 'Commission Type',
                                        value: data.commission_type,
                                    },
                                    { title: 'Commission Title', value: data.commission_title },

                                    { title: 'Commission Description', value: data.commission_desc },
                                    { title: 'Commission Month', value: data.commission_month_year },
                                    { title: 'Commission Amount', value: data.commission_amount },

                                ]}
                                variant="Immigration"
                                onEdit={() => setEditModal(true)}
                                onDelete={() => setDeleteModal(true)}
                                buttonVisible={false}
                            />
                        ))}

                </SafeAreaView>
            </ScrollView>
            {/* <PlusButton OnPress={() => setModalVisible(true)} /> */}
        </>
    );
};
export default Commission;

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
