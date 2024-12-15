import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = ({loading}) => {
  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Loader;
