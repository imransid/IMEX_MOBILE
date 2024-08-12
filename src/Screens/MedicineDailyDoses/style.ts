import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  headingPosition: {
    top: verticalScale(110)
  },
  imagePosition: {
    top: verticalScale(30)
  },
  medicineDoseItems: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  medicineDoseItemsPosition: {
    marginTop: verticalScale(80)
  },
  medicineDoseItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  }
});

export default styles;
