import React, {useEffect, useState,useCallback} from 'react';
import {StyleSheet, View,Text, PermissionsAndroid,RefreshControl,ScrollView, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Dashmenu from '../../components/Dashmenu/Dashmenu';
import Controlbar from '../../components/ControlBar/ControlBar';
// import Orientation from 'react-native-orientation'; ///need to remove this pac
import Geolocation from '@react-native-community/geolocation';

import {useDispatch, useSelector} from 'react-redux';
import {setLocation, CheckStatus, CheckIn, CheckOut} from '../../actions/Attendance';
import useFetchData from '../../components/HOC/withGetData';

import Loader from '../../components/Loader';
import { useNavigation } from '@react-navigation/native';
import {getApiFetch, _postApiFetch} from '../../services/Services';

const Dashboard = () => {
  const dispatch = useDispatch();
     const navigation = useNavigation();
  const [initialReduxCheck, setInitialReduxCheck] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const user = useSelector(state => state.user.userAllData);
  const apiUri = useSelector(state => state.api.domainName);
 
  const profilePic = useSelector(state => state.user.profilePic);

  const URL_IMG = `${apiUri.slice(0, -10)}/${
    profilePic !== '' ? profilePic : user.profile_photo
  }`;

  const lat = useSelector(state => state.user.Latitude);
  const long = useSelector(state => state.user.Longitude);
 
  const loader = false; //useSelector(state => state.user.checkInLoader);

    //const userCurentStatus = useSelector(state => state.user.userCurentStatus);
     const checkInStatus = useSelector(state => state.user.checkInStatus);


   let designation = useFetchData(
    [
      ['company_id', user.com_id],
      ['designation_id', user.designation_id],
    ],
    'designation',
    'post',
    apiUri,
  );

  let shiftStatus = useFetchData(
    [
      ['company_id', user.com_id],
      ['office_shift_id', user.office_shift_id],
    ],
    'office-shift',
    'post',
    apiUri,
  );

  let checkStatus = useFetchData(
    [
      ['attendance_com_id', user.com_id],
      ['employee_id', user.id],
    ],
    'attendance-status-for-current-date',
    'post',
    apiUri,
  );

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        dispatch(setLocation(currentLongitude, currentLatitude));

        //Setting Longitude state
       // setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change
        console.log("location change",position);
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        //setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  const [dataResult, setDataResult] = React.useState("")

  const refesh= async () => {

    let parm = {
      bodyData: [
        ['attendance_com_id', user.com_id],
        ['employee_id', user.id],
      ],
      uri: 'attendance-status-for-current-date',
      domainName: apiUri,
    };

    const result = await  _postApiFetch(parm);
    console.log('Refresh result', result);

    if(result.msg){
      //setDataResult(result.data)
      dispatch(CheckStatus(result.data))
    }
    // result.data==="Present" ? dispatch(CheckOut()) : dispatch(CheckIn());

  }

    const OnPress = React.useCallback(async () => {
    let parm = {
      bodyData: [
        ['attendance_com_id', user.com_id],
        ['employee_id', user.id],
      ],
      uri: 'attendance-status-for-current-date',
      domainName: apiUri,
    };

    const result = await _postApiFetch(parm);
    if(result.data==="Present"){
    dispatch(CheckOut(result.data))
    }else{
       dispatch(CheckIn(result.data))
    }

  }, [dispatch]);

  // initial value update

     React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {


async function fetchMyAPI() {
    //  

    let parm = {
      bodyData: [
        ['attendance_com_id', user.com_id],
        ['employee_id', user.id],
      ],
      uri: 'attendance-status-for-current-date',
      domainName: apiUri,
    };

    const result = await _postApiFetch(parm);

    if(result.data){

      dispatch(CheckStatus(result.data))
      setInitialReduxCheck(result.data)
    }

    }

    fetchMyAPI()

      // do something
    });

    return unsubscribe;
  }, [navigation, dispatch]);




  return (
    <View style={styles.container}>
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={loader} onRefresh={() => {
          // getOneTimeLocation();
          // subscribeLocationLocation();
          refesh()
          
        }} />
      }
      >
      {/* <Controlbar  dataObj={dataResult} /> */}

      {/* <View style={{ height: 100, width : '100%', justifyContent : 'center', alignItems : 'center' }}>

<TouchableOpacity style={styles.buttonContainer} onPress={OnPress}>

<Text>  { "Check" + " "}
                {
                  checkInStatus
                  //userCurentStatus
                }</Text>

</TouchableOpacity>
          

      </View> */}

      <View style={styles.header}>
      <View style={styles.headerContent}>
        <Image style={styles.avatar} source={{uri: URL_IMG}} />

        <Text style={styles.name}>
          {user.first_name} {user.last_name}{' '}
        </Text>
        <Text style={styles.designation}>
          {designation.length ? designation[0] : ''}
        </Text>
        <Text style={styles.officeShift}>
          Office Shift: 9:00 AM To 6:00 PM{' '}
          {shiftStatus.length ? '(' + shiftStatus[0] + ')' : ''}
        </Text>
        <Text style={styles.Location}>
          Long: {parseFloat(long).toFixed(2) || 0.0}, Lat:{' '}
          {parseFloat(lat).toFixed(2) || 0.0}
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={OnPress}>
          {!checkStatus[1] ? (
            <Text style={styles.designation}>
              {/* Check {() ? 'In' : 'Out'} */}

                { "Check" + " "}
                {
                  checkInStatus === 'Present' ? 'Out' : 'In'
                }
              {/* {
               (userCurentStatus === null || userCurentStatus === 'Absent') ? 'In' : 'Out' 
               
               //data() 
              } */}
            </Text>
          ) : (
            <ActivityIndicator size="small" color="#CFCFCF" />
          )}
        </TouchableOpacity>
      </View>
    </View>
      <Dashmenu />
      <Loader loading={initialReduxCheck === '' ? true : false} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   header: {
    backgroundColor: '#00BFFF',
  },
  headerContent: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  designation: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  officeShift: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  Location: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
    backgroundColor: '#E15FED',
  },
});

export default Dashboard;
