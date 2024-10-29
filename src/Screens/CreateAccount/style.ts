import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  SignInbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(25)
  },
  askAboutAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10)
  },
  askAboutAccountText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontFamily: 'WorkSansMedium',
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  errorTxt: {
    color: colors.error,
    fontSize: moderateScale(14),
    fontFamily: 'WorkSansMedium',
    marginBottom: 6
  },
  headingPosition: {
    alignItems: 'center'
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontFamily: 'WorkSansMedium',
  },
  inputText: {
    color: colors.header,
    fontSize: moderateScale(16),
    fontFamily: 'WorkSansMedium',
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontFamily: 'WorkSansMedium',
    textDecorationLine: 'underline'
  },
  signUpWithHorizontalLine: {
    backgroundColor: colors.subText,
    height: verticalScale(2),
    width: scale(120)
  },
  signUpWithIcons: {
    alignItems: 'center', // Center horizontally
    borderColor: colors.buttonBg,
    borderRadius: scale(20),
    borderWidth: scale(1.5),
    height: scale(56),
    justifyContent: 'center', // Center vertically
    width: scale(56)
  },
  signUpWithIconsContainer: {
    flexDirection: 'row',
    gap: scale(8),
    justifyContent: 'center',
    marginTop: verticalScale(15)
  },
  signUpWithPart: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(16),
    justifyContent: 'space-between'
  },
  textInputComponentPosition: {
    alignItems: 'center'
  },
  textInputComponentProperties: {
    gap: verticalScale(6),
    marginTop: verticalScale(12)
  },

  genderInputView: {
    alignItems: 'center',
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    flexDirection: 'row',
    height: verticalScale(40),
    position: 'relative',
    width: scale(330)
  },
  genderIconPosition: {
    left: scale(8),
    position: 'absolute'
  },
  genderPlaceHolderStyle: {
    paddingLeft: scale(38),
    paddingVertical: verticalScale(8)
  },
  genderPlaceHolderText: {
    color: colors.typedText,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(14)
  },
  genderText: {
    color: colors.header,
    fontFamily: 'WorkSansMedium',
    fontSize: moderateScale(14)
  },
  dropDownIconPosition: {
    right: scale(10),
    position: 'absolute'
  },
  dropDownStyle: {
    position: 'absolute',
    marginTop: scale(70), // Adjust based on the input's position
    width: scale(300),
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: 1,
    borderColor: colors.textInput,
    zIndex: 1000
  }
});

export default styles;
