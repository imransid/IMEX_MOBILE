import React from 'react';
import {StyleSheet, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomHeader(props) {
  const toggleDrawer = () =>
    props.navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={toggleDrawer}
            style={styles.leftButton}
            testID="CustomHeader-toggleDrawer">
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Title style={styles.headerTxt}>{props.title}</Title>
        </View>
        {props.title == 'Home' && (
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={props.onPress}
              style={styles.rightButton}
              testID="CustomHeader-onPress">
              <Icon name="bell" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    minHeight: 60,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  leftButton: {
    marginLeft: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    paddingLeft: 15,
  },
  buttonTxt: {
    color: '#000',
    fontWeight: 'bold',
  },
  headerTxt: {
    color: '#000',
  },
  headerRight: {
    flexDirection: 'row',
  },
  rightButton: {
    marginRight: 10,
  },
});

export default CustomHeader;
