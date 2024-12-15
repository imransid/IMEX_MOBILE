import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

const PlusButton = props => {
  return (
    <View style={styles.loading}>
      <TouchableOpacity style={styles.button} onPress={() => props.OnPress()}>
        <Icon name="plus" style={{ padding: 10 }} size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 10,
    top: 5,
    bottom: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    marginTop: 10,
    borderRadius: 100,
    width: 80,
    height: 80,
    alignItems: "center",
    // flexDirection:"column-reverse"

  }
});

export default PlusButton;
