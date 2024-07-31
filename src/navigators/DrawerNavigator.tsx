// /* eslint-disable */

// import React, { type FC, useEffect, useRef } from 'react';
// import { TouchableOpacity, View } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import LinearGradient from 'react-native-linear-gradient';
// import { Divider, Drawer as PaperDrawer } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/AntDesign';
// import IconLogOut from 'react-native-vector-icons/MaterialIcons';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   createDrawerNavigator,
//   type DrawerContentComponentProps,
//   DrawerContentScrollView
// } from '@react-navigation/drawer';
// import { TextItem } from '@/components';
// import { QCLaunchPad, Settings } from '@/screens';
// import { type RootState } from '@/store';
// import { syncNow } from '@/store/slices/features/setting/slice';
// import { logoutUser } from '@/store/slices/features/users/slice';
// import { getAppVersionName } from '@/utils/core';

// import { type DrawerParamList } from '../models';

// import AppStackNavigator from './AppStackNavigator';
// import Styles from './Styles';
// import { scale } from 'react-native-size-matters';

// const Drawer = createDrawerNavigator<DrawerParamList>();
// const CustomDrawerContent: FC<DrawerContentComponentProps> = (
//   props: DrawerContentComponentProps
// ) => {
//   const dispatch = useDispatch();
//   const userName = useSelector((state: RootState) => state.users.user.data?.name);
//   const userEmail = useSelector((state: RootState) => state.users.user.data?.email);
//   const loader = useSelector((state: RootState) => state.setting.globalAppSyncLoader);
//   //const token = useSelector((state: RootState) => state.users.user.data?.accessToken);
//   const deviceId = useRef('');
//   const fetchDeviceId = async (): Promise<void> => {
//     try {
//       const uniqueId = await DeviceInfo.getUniqueId();
//       deviceId.current = uniqueId;
//     } catch (error) {
//       console.error('Error fetching device ID:', error);
//       throw error; // If you want to propagate the error further
//     }
//   };

//   useEffect(() => {
//     fetchDeviceId().catch(error => {
//       // Handle error if needed
//       console.error('Error in useEffect:', error);
//     });
//   }, []);

//   // waste code

//   // waste code
//   const backGroundServiceSync = () => {
//     dispatch(syncNow(''));
//   };

//   return (
//     <>
//       <LinearGradient colors={['#47B5FF', '#B09EFF']}>
//         <View style={Styles.header}>
//           <TextItem
//             txt={userName !== undefined ? userName : ''}
//             color="white"
//             variant="titleMedium"
//           />
//           <TextItem
//             txt={userEmail !== undefined ? userEmail : ''}
//             color="white"
//             variant="titleSmall"
//           />
//           <View style={Styles.customDivider}></View>
//           <TextItem txt={`Version : ${getAppVersionName()}`} color="white" variant="labelSmall" />
//           <TextItem txt={`Device ID: ${deviceId.current}`} color="white" variant="labelSmall" />
//           {!loader && <TouchableOpacity
//             style={Styles.drawerButton}
//             onPress={() => {
//               backGroundServiceSync();
//             }}>
//             <TextItem txt={'Sync'} variant="labelSmall" />
//           </TouchableOpacity>}
//         </View>
//       </LinearGradient>
//       <DrawerContentScrollView {...props}>
//         <PaperDrawer.Item
//           icon={() => {
//             return <Icon size={scale(12)} name="home" />;
//           }}
//           label="Home"
//           onPress={() => {
//             props.navigation.navigate('QCLaunchPad');
//           }}
//         />
//         {/* <Divider /> */}
//         <View style={Styles.drawerDivider}></View>
//         <PaperDrawer.Item
//           icon={() => {
//             return <Icon size={scale(12)} name="setting" />;
//           }}
//           label="Settings"
//           onPress={() => {
//             props.navigation.navigate('Settings');
//           }}
//         />
//         <Divider />
//         <PaperDrawer.Item
//           icon={() => {
//             return <IconLogOut size={scale(12)} name="logout" />;
//           }}
//           label="logout"
//           onPress={() => {
//             dispatch(logoutUser());
//           }}
//         />
//         <Divider />
//       </DrawerContentScrollView>
//     </>
//   );
// };

// const DrawerNavigator: FC = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="AppStackNavigator"
//       drawerContent={props => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen
//         name="AppStackNavigator"
//         component={AppStackNavigator}
//         options={{ headerShown: false }}
//       />
//       <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
//       <Drawer.Screen name="QCLaunchPad" component={QCLaunchPad} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;
