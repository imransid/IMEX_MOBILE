import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fullScreenCamera: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 100
  },
  safeArea: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  }
});

export default styles;
