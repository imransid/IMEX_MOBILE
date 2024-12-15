import React, {useState, useEffect, useMemo} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Overlay} from 'react-native-elements';
import Animated, {FadeIn, FadeOut, ZoomIn} from 'react-native-reanimated';
import {NativeModules} from 'react-native';

var {width, height} = Dimensions.get('window');

import {Button, Card, Title, Paragraph} from 'react-native-paper';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  const showNow = useMemo(() => {
    return netInfo.type !== 'unknown' && netInfo.isInternetReachable === false
      ? true
      : false;
  }, [netInfo]);

  //const [showNow, setShowNow] = useState(false);

  return netInfo.type !== 'unknown' && netInfo.isInternetReachable === false ? (
    <Animated.View>
      <Overlay
        isVisible={true}
        overlayStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
        onBackdropPress={() => console.log('ok')}
        style={styles.background}>
        {showNow && (
          <Animated.View
            style={styles.errorWrapper}
            entering={FadeIn.duration(3000)}
            exiting={FadeOut}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.text}>
                  {/* <MaterialCommunityIcons
                    name="wifi-off"
                    size={19}
                    color="#c3c3c3"
                  />{' '} */}
                  Connection lost
                </Title>
                <Paragraph style={styles.text}>
                  You have lost connection with the server. Check Your internet
                  connection and try again.
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => NativeModules.DevSettings.reload()}>
                  try again
                </Button>
              </Card.Actions>
            </Card>
          </Animated.View>
        )}
      </Overlay>
    </Animated.View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    width: '30%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '25%',
    width: '40%',
  },

  card: {
    height: 180,
    width: width - 50,
    backgroundColor: '#808080',
  },
  text: {
    color: '#FFF',
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default OfflineNotice;
