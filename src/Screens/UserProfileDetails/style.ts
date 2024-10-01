import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  SignInbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(25)
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  detailInfo: {
    alignItems: 'center',
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    flexDirection: 'row',
    height: verticalScale(40),
    position: 'relative',
    width: scale(330)
  },
  detailInfoText: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginLeft: scale(20)
  },
  editProfileText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginTop: scale(5)
  },
  headingPosition: {
    alignItems: 'center'
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  },
  textInputComponentPosition: {
    alignItems: 'center'
  },
  textInputComponentProperties: {
    gap: verticalScale(6),
    marginTop: verticalScale(12)
  },
  userImagePosition: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  userNameUnderProfileImage: {
    color: colors.header,
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginTop: scale(5)
  }
});

export default styles;
