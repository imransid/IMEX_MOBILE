import * as React from 'react';
// import DataTable from '../../../components/dataTable/DataTable';
import { SafeAreaView, TouchableOpacity, Text, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'native-base';
import SearchBox from '../../components/searchBox/SearchBox';
import TableCard from '../../components/TableCard/TableCard';
import { _postApiFetch, _searchData } from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';

import { useSelector } from 'react-redux';

import useFetchData from '../../components/HOC/withGetData';
import { TextInput } from 'react-native-paper';
import RnPdf from '../../components/GenaratePdf';

const Announcements = ({ navigation }) => {

  const apiUri = useSelector(state => state.api.domainName);

  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  const [searchText, setSearchText] = React.useState('');
  const onChangeSearchText = (text) => {
    setSearchText(text);
  }
  let data = useFetchData(
    [['announcement_com_id', com_id]],
    'announcement',
    'post',
    apiUri
  );


  const [documentData, setDocumentData] = React.useState([]);
  const [documentLoader, setDocumentLoader] = React.useState(true);

  // React.useEffect(() => {
  //   try {
  //     data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
  //     data[0].length !== documentData.length ? setDocumentData(data[0]) : null;
  //   } catch (err) {
  //     console.log('Error in useEffect ', err);
  //   }
  // }, [data, documentLoader, documentData]);
  React.useEffect(() => {
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
          <RnPdf Filename={'Announcement'} value={data[0]} />
        </View> 
        {documentLoader && <CustomIndicator />}
        {!documentLoader && documentData.map(data => (
          <TouchableOpacity onPress={() => navigation.navigate('Detailss', {
            title: data.announcement_title,
            description: data.announcement_desc,
            announcedBy: data.announcement_by,
            date: data.created_at,
            department: data.announcement_department_name,
            prevRoute: 'Announcements',
          })}>
            <TableCard
              sl={data.id}
              datas={[
                { title: "Department", value: data.announcement_department_name },
                { title: "Title", value: data.announcement_title },
                { title: "Announced By", value: data.announcement_by },
                { title: "Date", value: data.created_at },
                { title: "Description", value: data.announcement_desc },
              ]}
              variant='Announcements'
            />
          </TouchableOpacity>))}

      </SafeAreaView>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: "#F2F2F2",
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
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth: {
    fontSize: 16,
    color: "#0099FF",
    fontWeight: "600",
  },
  poilcyContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  policyTitle: {
    fontSize: 18,
    color: "#151515",
  },
  addedBy: {
    fontSize: 16,
    color: "#151515",
  },
  pdfBox: {
    paddingTop: 10,
    paddingRight: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
});

export default Announcements;
