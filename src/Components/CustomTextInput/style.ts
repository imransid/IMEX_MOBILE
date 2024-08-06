import {StyleSheet} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  textInput: {
    height: verticalScale(50),
    width: scale(330),
    borderRadius: scale(6),
    //backgroundColor: '#F2F1F6',
    backgroundColor: 'red',
    paddingLeft: scale(18),
  },
  iconContainer: {
    position: 'absolute',
    right: scale(10),
  },
});

export default styles;