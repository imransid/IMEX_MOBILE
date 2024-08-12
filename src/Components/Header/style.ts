import {StyleSheet} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: verticalScale(50),
    },
    mainHeader: {
        fontSize: moderateScale(24),
        fontWeight: '600',
        color: '#212121',
      },
      subHeader: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: '#555555',
        textAlign: 'center',
      },
})

export default styles;