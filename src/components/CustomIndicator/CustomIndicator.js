import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

const CustomIndicator = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#0099FF"
      />
    </View>
  );
};

export default CustomIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  activityIndicator: {alignSelf: 'center', paddingVertical: '50%'},
});
