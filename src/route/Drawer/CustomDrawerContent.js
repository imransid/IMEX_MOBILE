import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { LogOut } from '../../actions/SignIn';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { DrawerChange } from '../../actions/Settings';
import { _fetchPostImage } from '../../services/Services';

function CustomDrawerContent(props) {
  const userID = useSelector(state => state.user.userAllData.id);
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.userAllData);
  const apiUri = useSelector(state => state.api.domainName);
  const profilePic = useSelector(state => state.user.profilePic);

  const URL_IMG = `${apiUri.slice(0, -10)}/${profilePic !== '' ? profilePic : user.profile_photo}`;

  const userData = useSelector(state => state.user.userAllData);

  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const checkRouteName = name => {
    if (name === 'AppointmentLetter' || name === 'DownloadLatestIDCard') {
      return false;
    } else {
      return true;
    }
  };

  const downloadItem = name => {
    let filename = name + '.pdf';

    let appUrl = apiUri; //'https://hrmspvm.predictionla.com/api/user/';

    let fileUri =
      name === 'DownloadLatestIDCard'
        ? `${appUrl}id-card/${userID}`
        : `${appUrl}appointment-letter/${userID}`;

    let data = {
      name: filename,
      uri: fileUri
    };

    _fetchPostImage(data);
    toggleMainDrawer();
  };

  const onItemParentPress = key => {
    const filteredMainDrawerRoutes = props.drawerItems.find(e => {
      return e.key === key;
    });
    if (filteredMainDrawerRoutes.routes.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes.routes[0];
      props.navigation.toggleDrawer();
      props.navigation.navigate(selectedRoute.nav, {
        screen: selectedRoute.routeName
      });
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
    }
  };

  const logOut = async () => dispatch(LogOut());

  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map(parent => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => {
                parent.title === 'Dashboard'
                  ? dispatch(DrawerChange(true))
                  : dispatch(DrawerChange(false));
                onItemParentPress(parent.key);
              }}>
              <View style={styles.parentItem}>
                <Icon name={parent?.icon} size={25} color={'#525E75'} style={{ marginLeft: 5 }} />
                <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {renderLogoutBtn()}
      </View>
    );
  }

  function renderFilteredItemsDrawer() {
    return (
      <View>
        <TouchableOpacity onPress={() => toggleMainDrawer()} style={styles.backButtonRow}>
          <Text style={[styles.backButtonText, styles.title]}>{'BACK'}</Text>
        </TouchableOpacity>
        {filteredItems.routes.map(route => {
          return (
            <TouchableOpacity
              key={route.routeName}
              testID={route.routeName}
              onPress={() => {
                //console.log('header', route.routeName)
                checkRouteName(route.routeName)
                  ? props.navigation.navigate(route.nav, {
                      screen: route.routeName
                    })
                  : downloadItem(route.routeName);
              }}
              style={styles.item}>
              <Text style={styles.title}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  function renderLogoutBtn() {
    return (
      <View>
        <TouchableOpacity onPress={logOut} testID="customDrawer-logout">
          <View style={styles.parentItem}>
            <Icon name="sign-out-alt" size={25} color={'#525E75'} style={{ marginLeft: 5 }} />
            <Text style={styles.title}>{'Log out'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Card>
          <Card.Content>
            {URL_IMG ? (
              <Image style={styles.avatar} source={{ uri: URL_IMG }} />
            ) : (
              <Avatar.Image size={100} source={require('../../assets/download.png')} />
            )}
          </Card.Content>
          <Card.Content>
            <Title>{userData.username}</Title>
            <Paragraph>{userData.email}</Paragraph>
          </Card.Content>
        </Card>

        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 75
  },
  drawerContainer: {
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    zIndex: 1000
  },
  centered: {
    height: 150,
    alignItems: 'center'
  },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c3c3c3',
    paddingTop: 4,
    paddingBottom: 4
  },
  title: {
    margin: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1
  },
  backButtonText: {
    marginLeft: 10,
    color: '#000'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10
  }
});

export default CustomDrawerContent;
