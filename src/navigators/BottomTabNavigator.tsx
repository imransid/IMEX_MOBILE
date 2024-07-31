// import React, { type FC } from 'react';
// import { Image, Text, TouchableOpacity, View } from 'react-native';
// import { Badge } from 'react-native-paper';
// import { type BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { DrawerActions } from '@react-navigation/native';

// import { type BottomTabParamList } from '@/models';
// import { ActiveJob } from '@/screens';
// import Chat from '@/screens/Chat';
// import TaskJob from '@/screens/TaskJob';
// import UpcomingJob from '@/screens/UpcomingJob';

// import HomePageTopStackNavigator from './HomePageTopStackNavigator';
// import Styles from './style';

// const Tab = createBottomTabNavigator<BottomTabParamList>();

// export const BottomTabNavigator: FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ navigation, route }: BottomTabScreenProps<BottomTabParamList>) => ({
//         tabBarShowLabel: false,
//         headerTitle: () => {
//           return <Text style={Styles.bottomTabheaderTitle}>5 delivery</Text>;
//         },
//         headerLeft: () => {
//           return (
//             <View style={Styles.bottomTabcontainer}>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.dispatch(DrawerActions.openDrawer);
//                 }}>
//                 <Image source={require('../assets/img/list.png')} />
//               </TouchableOpacity>
//               <Badge style={Styles.bottomTabbgColor}>ON</Badge>
//             </View>
//           );
//         },
//         headerRight: () => {
//           return (
//             <View style={Styles.bottomTabheaderRight}>
//               <Image source={require('../assets/img/bell.png')} />
//             </View>
//           );
//         },
//         tabBarIcon: ({ focused }) => {
//           switch (route.name) {
//             case 'TopTabs':
//               return focused ? (
//                 <Image source={require('../assets/img//house-active.png')} />
//               ) : (
//                 <Image source={require('../assets/img/house.png')} />
//               );

//             case 'UpcomingJobs':
//               return focused ? (
//                 <Image source={require('../assets/img/package-active.png')} />
//               ) : (
//                 <Image source={require('../assets/img/package.png')} />
//               );

//             case 'ActiveJobs':
//               return focused ? (
//                 <Image source={require('../assets/img/car-active.png')} />
//               ) : (
//                 <Image source={require('../assets/img/car.png')} />
//               );

//             case 'Chat':
//               return focused ? (
//                 <Image source={require('../assets/img/chat-active.png')} />
//               ) : (
//                 <Image source={require('../assets/img/chat.png')} />
//               );

//             case 'TaskJobs':
//               return focused ? (
//                 <Image source={require('../assets/img/account-active.png')} />
//               ) : (
//                 <Image source={require('../assets/img/account.png')} />
//               );
//             default:
//               return <Image source={require('../assets/img/house-active.png')} />;
//           }
//         }
//       })}>
//       <Tab.Screen name="TopTabs" component={HomePageTopStackNavigator} />
//       <Tab.Screen name="UpcomingJobs" component={UpcomingJob} />
//       <Tab.Screen name="ActiveJobs" component={ActiveJob} />
//       <Tab.Screen name="Chat" component={Chat} />
//       <Tab.Screen name="TaskJobs" component={TaskJob} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;
