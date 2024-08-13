import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    gap: scale(8)
  },
  chipPosition: {
    marginTop: verticalScale(-40)
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText,
  },
  
  headingPosition: {
    top: verticalScale(60)
  },
  imagePosition: {
    top: verticalScale(10)
  },
  subHeadingPosition: {
    marginTop: verticalScale(60)
  },
  nameInput: {
    width: scale(150),
    height: scale(38),
    borderWidth: scale(0.15),
    fontSize: moderateScale(16),
    fontWeight: '400',
    borderRadius: scale(6),
    color: colors.typedText,
    textAlign: 'center',
    justifyContent: 'center'
  },
  inputPosition: { 
    marginRight: scale(15)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(145)
  },
  selectButtonText: {
    color: colors.buttonBg
  },

});

export default styles;
