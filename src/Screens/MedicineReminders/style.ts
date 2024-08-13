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
    marginLeft: 20
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
  medicineInput: {
    width: scale(80),
    height: scale(38),
    borderWidth: scale(0.15),
    fontSize: moderateScale(16),
    fontWeight: '400',
    borderRadius: scale(6),
    color: colors.typedText,
    textAlign: 'center',
    justifyContent: 'center'
  },
  medicineText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: colors.buttonBg,
    alignSelf: 'center',
  },
  inputPosition: {
    flexDirection: 'row', 
    gap: scale(10), 
    marginLeft: scale(50)
  }

});

export default styles;
