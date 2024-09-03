import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  headingPosition: {
    left: scale(10),
    top: verticalScale(50)
  },
  headingText: {
    color: colors.header,
    fontSize: moderateScale(18),
    fontWeight: '600'
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(20)
  },
  medicineDoseItemsPosition: {
    alignItems: 'center'
  },
  medicineDoseItemsProperties: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    height: verticalScale(38),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  medicineDoseItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  medicineDoseListContainer: {
    marginTop: verticalScale(75)
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  }
});

export default styles;
