import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start'
  },
  headingPosition: {
    top: verticalScale(60)
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginRight: scale(226)
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  resetPasswordButtonPosition: {
    marginTop: verticalScale(20)
  },
  textInputPosition: {
    alignItems: 'center',
    marginTop: verticalScale(20)
  }
});

export default styles;
