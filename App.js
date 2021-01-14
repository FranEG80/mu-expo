import 'react-native-gesture-handler'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './screens/HomeScreen/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import LogoTitle from './components/molecules/LogoTitle';

import AppNavigator from './navigations'

import { SafeAreaProvider } from 'react-native-safe-area-context';




// const commonScreens = {
//   Settings: SettingsScreen
// }

// const authScreens = {
//   SignIn: SignInScreen,
//   SignUp: SignUpScreen,
// };

// const MyApp = () => (
//   <Drawer.Navigator>
//   </Drawer.Navigator>
// )


// function AppMain() {
//   return (
//     <>
//       <Stack.Navigator
//         screenOptions={{animationEnabled:true}}
//         initialRouteName="Home" // headerMode="none"
//       >
//         <Stack.Screen name="Home">
//           {() => (
//             <Tabs.Navigator 
//               initialRouteName="Home"  
//               screenOptions={({route})=> ({
//                 tabBarIcon: ({ focused, color, size }) =>{
//                   let iconName;

//                   if (route.name === 'Home') {
//                     iconName = focused
//                       ? 'ios-information-circle'
//                       : 'ios-information-circle-outline'
//                   } else if (route.name === 'Settings') {
//                     iconName = focused ? 'ios-settings' : 'ios-settings-outline'
//                   }

//                   return <Ionicons name={iconName} size={size} color={color} />
//                 },
                
//               })}
//               tabBarOptions={{
//                 activeTintColor: 'tomato',
//                 inactiveTintColor: 'gray'
//               }}
//               //tabBar={() => null}
//             >
//               <Tabs.Screen name="Home" component={HomeScreen} />
//               <Tabs.Screen name="Settings" component={SettingsScreen} />
//             </Tabs.Navigator>
//           )}
//         </Stack.Screen>

//         <Stack.Screen name="Settings" component={SettingsScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//       </>
//   );
// }

// const AppMain2 = () => (
//   <Tabs.Navigator
//     screenOptions={({route})=> ({
//       tabBarIcon: ({ focused, color, size }) =>{
//         let iconName;

//         if (route.name === 'Home') {
//           iconName = focused
//             ? 'ios-information-circle'
//             : 'ios-information-circle-outline'
//         } else if (route.name === 'Settings') {
//           iconName = focused ? 'ios-settings' : 'ios-settings-outline'
//         }

//         return <Ionicons name={iconName} size={size} color={color} />
//       }
//     })}
//     tabBarOptions={{
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray'
//     }}
//   >
//     <Tabs.Screen 
//       name="Home" 
//       component={HomeScreen}
//       options={{
//         //headerTitle: props => <LogoTitle {...props} />,
//         title: 'Bienvenido', //solo titulo arriba
//         // Styles header bar
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         headerOptions: {prueba: '234'}
//       }}
//     />
//     <Tabs.Screen 
//       name="Settings" 
//       component={SettingsScreen}
//       options={{tabBarBadge: 5}} //badge en el icon
//     />
//   </Tabs.Navigator>
// )

// function ScreenAndSideBar() {
//   return (
//     <Drawer.Navigator initialRouteName='Home'>
//       <Drawer.Screen 
//         name='Home' 
//         component={HomeScreen}
//         options={{
//           headerTitle: props => <LogoTitle {...props} />,
//           //title: 'Bienvenido', //solo titulo arriba
//           // Styles header bar
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerOptions: {prueba: '234'}
//         }}
//       />
//       <Drawer.Screen 
//         name='Profile' 
//         component={ProfileScreen}
//       />
//     </Drawer.Navigator>
//   );
// }


// const Screens = () => (
//   <Stack.Navigator 
//       //headerMode='none' oculta el header, no es recomendable
//       initialRouteName="Home" 
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#3f451e'
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }
//       }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerTitle: props => <LogoTitle {...props} />,
//           //title: 'Bienvenido', //solo titulo arriba
//           // Styles header bar
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerOptions: {prueba: '234'}
//         }}
//       />
//       <Stack.Screen
//         name="Profile" 
//         component={ProfileScreen}
//         options={{
//           transitionSpec: {
//             open: config,
//             close: config,
//           },
//         }}
//       />
//     </Stack.Navigator>
// )
// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// const App3 = () => (
//   <SafeAreaProvider>
//     <NavigationContainer>
//       <AppMain/>
//     </NavigationContainer>
//   </SafeAreaProvider>
  
// )

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App;