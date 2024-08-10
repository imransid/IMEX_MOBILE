import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  iconContainer: {
    position: 'absolute',
    right: scale(10)
  },
  textInput: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(50),
    paddingLeft: scale(18),
    width: scale(330)
  }
});

export default styles;
