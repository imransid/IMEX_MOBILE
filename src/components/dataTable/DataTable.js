import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';

const DataTable = ({tableHead, data, headerColour}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderColor: '#C1C0B9'}}>
            <Row
              data={tableHead.tableHead}
              widthArr={tableHead.widthArr}
              style={[styles.head, {backgroundColor: headerColour}]}
              textStyle={[styles.text, styles.headerText]}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              {data.map((dataRow, index) => (
                <Row
                  key={index}
                  data={dataRow}
                  widthArr={tableHead.widthArr}
                  style={[
                    styles.row,
                    index % 2 && {backgroundColor: '#ffffff'},
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default DataTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  headerText: {color: '#fff', fontWeight: '800', fontSize: 17},
  head: {
    height: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#F7F8FA',
  },
});
