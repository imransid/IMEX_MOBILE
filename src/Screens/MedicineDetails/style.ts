import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    scannedText: {
      fontSize: 16, 
      fontWeight: '600', 
      color: colors.success
    },
  });
  
  export default styles;