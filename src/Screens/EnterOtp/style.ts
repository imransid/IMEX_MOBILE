import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

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
  otpInputPosition: {
    marginTop: verticalScale(80)
  },
  reSendOtpText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  reSendOtpTextPosition: {
    marginTop: verticalScale(20)
  },
  verifyOtpButtonPosition: {
    marginTop: verticalScale(40)
  }
});

export default styles;
