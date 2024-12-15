import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const TableCardAttachment = props => {
  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.text}>
            <Text style={styles.name}>{props.headline}</Text>
            {props.datas?.map(data => (
              <Text style={styles.fields}>
                {data.title}:{data.value}
              </Text>
            ))}
          </View>
          {props.dates?.map(data => (
            <Text style={styles.date}>
              {data.title}:{data.value}
            </Text>
          ))}
        </View>
      </View>
      {props.attachment && (
        <Image
          source={{uri: `https://hrmspvm.predictionla.com/${props.attachment}`}}
          style={styles.image}
        />
      )}
    </View>
  );
};

export default TableCardAttachment;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    // borderRadius: 25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,
  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  date: {
    fontSize: 12,
    color: '#696969',
  },
  name: {
    fontSize: 16,
    color: '#1E90FF',
  },
  fields: {
    fontSize: 14,
    color: '#000000',
  },
});
