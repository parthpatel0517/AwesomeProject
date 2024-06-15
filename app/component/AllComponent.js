// 1.Switch

// import { View, Text ,Switch, StyleSheet} from 'react-native'
// import React, { useState } from 'react'

// export default function Switche() {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
//   return (
//     <View style={styles.container}>
//     <Switch
//       trackColor={{false: '#767577', true: '#81b0ff'}}
//       thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//       ios_backgroundColor="#3e3e3e"
//       onValueChange={toggleSwitch}
//       value={isEnabled}
//     />
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop:100
//     },
//   });


// 2.Buttons

// import { View, Text, StyleSheet, Button,Alert } from 'react-native'
// import React from 'react'

// export default function Buttons() {
//   return (
//     <View>
//       <Button
//         title="Press me"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       />
//     </View>
//   )
// }
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   SectionList,
//   StatusBar,
// } from 'react-native';
// import React from 'react'

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];



// export default function AllComponent() {
//   return (
//     <SafeAreaView style={styles.container}>
//     <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({item}) => (
//         <View style={styles.item}>
//           <Text style={styles.title}>{item}</Text>
//         </View>
//       )}
//       renderSectionHeader={({section: {title}}) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />
//   </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//   }
// });


// 3.BackHandler

// import React, {useEffect} from 'react';
// import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';

// export default function AllComponent() {
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert('Hold on!', 'Are you sure you want to go back?', [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {text: 'YES', onPress: () => BackHandler.exitApp()},
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Click Back button!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });




// 4.DrawerLayoutAndroid

// import React, {useRef, useState} from 'react';
// import {
//   Button,
//   DrawerLayoutAndroid,
//   Text,
//   StyleSheet,
//   View,
// } from 'react-native';

// export default function AllComponent() {
//     const drawer = useRef(null);
//   const [drawerPosition, setDrawerPosition] = useState('left');
//   const changeDrawerPosition = () => {
//     if (drawerPosition === 'left') {
//       setDrawerPosition('right');
//     } else {
//       setDrawerPosition('left');
//     }
//   };

//   const navigationView = () => (
//     <View style={[styles.container, styles.navigationContainer]}>
//       <Text style={styles.paragraph}>I'm in the Drawer!</Text>
//       <Button
//         title="Close drawer"
//         onPress={() => drawer.current.closeDrawer()}
//       />
//     </View>
//   );

//   return (
//     <DrawerLayoutAndroid
//       ref={drawer}
//       drawerWidth={300}
//       drawerPosition={drawerPosition}
//       renderNavigationView={navigationView}>
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
//         <Button
//           title="Change Drawer Position"
//           onPress={() => changeDrawerPosition()}
//         />
//         <Text style={styles.paragraph}>
//           Swipe from the side or press button below to see it!
//         </Text>
//         <Button
//           title="Open drawer"
//           onPress={() => drawer.current.openDrawer()}
//         />
//       </View>
//     </DrawerLayoutAndroid>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   navigationContainer: {
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     padding: 16,
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });



// 5. PermissionsAndroid

// import React from 'react';
// import {
//   Button,
//   PermissionsAndroid,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera');
//     } else {
//       console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };


// export default function AllComponent() {
//   return (
//     <View style={styles.container}>
//     <Text style={styles.item}>Try permissions</Text>
//     <Button title="request permissions" onPress={requestCameraPermission} />
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


// 6.ToastAndroid
// import React from 'react';
// import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';


// export default function AllComponent() {
//   const showToast = () => {
//     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
//   };
//   return (
//     <View style={styles.container}>
//       <Button title="Toggle Toast" onPress={() => showToast()} />
//       <Button
//         title="Toggle Toast With Gravity"
//         onPress={() => showToastWithGravity()}
//       />
//       <Button
//         title="Toggle Toast With Gravity & Offset"
//         onPress={() => showToastWithGravityAndOffset()}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#888888',
//     padding: 8,
//   },
// });


// 7.ActivityIndicator

// import React from 'react';
// import {ActivityIndicator, StyleSheet, View} from 'react-native';

// export default function AllComponent() {
//   return (
//     <View style={[styles.container, styles.horizontal]}>
//     <ActivityIndicator />
//     <ActivityIndicator size="large" />
//     <ActivityIndicator size="small" color="#0000ff" />
//     <ActivityIndicator size="large" color="#00ff00" />
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   horizontal: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
// });



// 8.Alert

// import React from 'react';
// import {View, StyleSheet, Button, Alert} from 'react-native';

// export default function AllComponent() {
//   const createTwoButtonAlert = () =>
//     Alert.alert('Alert Title', 'My Alert Msg', [
//       {
//         text: 'Cancel',
//         onPress: () => console.log('Cancel Pressed'),
//         style: 'cancel',
//       },
//       {text: 'OK', onPress: () => console.log('OK Pressed')},
//     ]);

//   const createThreeButtonAlert = () =>
//     Alert.alert('Alert Title', 'My Alert Msg', [
//       {
//         text: 'Ask me later',
//         onPress: () => console.log('Ask me later pressed'),
//       },
//       {
//         text: 'Cancel',
//         onPress: () => console.log('Cancel Pressed'),
//         style: 'cancel',
//       },
//       {text: 'OK', onPress: () => console.log('OK Pressed')},
//     ]);

//   return (
//     <View style={styles.container}>
//       <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
//       <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
// });



// 9.Animated

// import React, {useRef} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';


// export default function AllComponent() {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.fadingContainer,
//           {
//             // Bind opacity to animated value
//             opacity: fadeAnim,
//           },
//         ]}>
//         <Text style={styles.fadingText}>Fading View!</Text>
//       </Animated.View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In View" onPress={fadeIn} />
//         <Button title="Fade Out View" onPress={fadeOut} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
// });


// 10. Dimensions

// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Text, Dimensions} from 'react-native';

// const windowDimensions = Dimensions.get('window');
// const screenDimensions = Dimensions.get('screen');

// export default function AllComponent() {
//   const [dimensions, setDimensions] = useState({
//     window: windowDimensions,
//     screen: screenDimensions,
//   });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener(
//       'change',
//       ({window, screen}) => {
//         setDimensions({window, screen});
//       },
//     );
//     return () => subscription?.remove();
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Window Dimensions</Text>
//       {Object.entries(dimensions.window).map(([key, value]) => (
//         <Text>
//           {key} - {value}
//         </Text>
//       ))}
//       <Text style={styles.header}>Screen Dimensions</Text>
//       {Object.entries(dimensions.screen).map(([key, value]) => (
//         <Text>
//           {key} - {value}
//         </Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
// });


// 11.KeyboardAvoidingView

// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native';

// export default function AllComponent() {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// });


// 12.Linking
// 12.1 Open Links and Deep Links (Universal Links)

// import React, {useCallback} from 'react';
// import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

// const supportedURL = 'https://www.google.com/';

// const unsupportedURL = 'slack://open?team=123456';

// const OpenURLButton = ({url, children}) => {
//   const handlePress = useCallback(async () => {
//     await Linking.canOpenURL(url).then(supported => {
//       if (supported) {
//         Linking.openURL(url); // Here, use 'url' instead of 'supportedURL'
//       } else {
//         console.log("Don't know how to open URI: " + url); // Use 'url' here as well
//       }
//     })
//     .catch((error) => console.log(error));
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };

// // const OpenURLButton = ({url, children}) => {
// //   const handlePress = useCallback(async () => {
// //     // Checking if the link is supported for links with custom URL scheme.
// //     // const supported = await Linking.canOpenURL(url);

// //     // if (supported) {
// //     //   // Opening the link with some app, if the URL scheme is "http" the web link should be opened
// //     //   // by some browser in the mobile
// //     //   await Linking.openURL(url);
// //     // } else {
// //     //   Alert.alert(`Don't know how to open this URL: ${url}`);
// //     // }

// //     console.log("ff", supportedURL);

// //     await Linking.canOpenURL(supportedURL).then(supported => {
// //       console.log(supported);
// //       if (supported) {
// //         Linking.openURL(supportedURL);
// //       } else {
// //         console.log("Don't know how to open URI: " + supportedURL);
// //       }
// //     })
// //     .catch((error) => console.log(error));
// //   }, [url]);

// //   return <Button title={children} onPress={handlePress} />;
// // };
// export default function AllComponent() {
//   return (
//     <View style={styles.container}>
//       <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
//       <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// import React from 'react';
// import { Button, Linking, View } from 'react-native';

// const supportedURL = 'https://www.google.com/';

// const OpenURLButton = ({ url, children }) => {
//   const handlePress = async () => {
//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       await Linking.openURL(url);
//     } else {
//       console.log("Don't know how to open URI: " + url);
//     }
//   };

//   return <Button title={children} onPress={handlePress} />;
// };

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
//     </View>
//   );
// }

// 12.2 Open Custom Settings

// import React, {useCallback} from 'react';
// import {Button, Linking, StyleSheet, View} from 'react-native';

// const OpenSettingsButton = ({children}) => {
//   const handlePress = useCallback(async () => {
//     // Open the custom settings if the app has one
//     await Linking.openSettings();
//   }, []);

//   return <Button title={children} onPress={handlePress} />;
// };

// export default function AllComponent() {
//   return (
//     <View style={styles.container}>
//       <OpenSettingsButton>Open Settings</OpenSettingsButton>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// 12.3 Get the Deep Link

// import React, {useState, useEffect} from 'react';
// import {Linking, StyleSheet, Text, View} from 'react-native';

// const useInitialURL = () => {
//   const [url, setUrl] = useState(null);
//   const [processing, setProcessing] = useState(true);

//   useEffect(() => {
//     const getUrlAsync = async () => {
//       // Get the deep link used to open the app
//       const initialUrl = await Linking.getInitialURL();

//       // The setTimeout is just for testing purpose
//       setTimeout(() => {
//         setUrl(initialUrl);
//         setProcessing(false);
//       }, 1000);
//     };

//     getUrlAsync();
//   }, []);

//   return {url, processing};
// };
// export default function AllComponent() {
//   const {url: initialUrl, processing} = useInitialURL();

//   return (
//     <View style={styles.container}>
//       <Text>
//         {processing
//           ? 'Processing the initial url from a deep link'
//           : `The deep link is: ${initialUrl || 'none'}`}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// 12.4 Send Intents (Android)

// import React, {useCallback} from 'react';
// import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

// const SendIntentButton = ({action, extras, children}) => {
//   const handlePress = useCallback(async () => {
//     try {
//       await Linking.sendIntent(action, extras);
//     } catch (e) {
//       Alert.alert(e.message);
//     }
//   }, [action, extras]);

//   return <Button title={children} onPress={handlePress} />;
// };


// export default function AllComponent() {
//   return (
//     <View style={styles.container}>
//       <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY">
//         Power Usage Summary
//       </SendIntentButton>
//       <SendIntentButton
//         action="android.settings.APP_NOTIFICATION_SETTINGS"
//         extras={[
//           {
//             key: 'android.provider.extra.APP_PACKAGE',
//             value: 'com.facebook.katana',
//           },
//         ]}>
//         App Notification Settings
//       </SendIntentButton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// 13.Modal

// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


// export default function AllComponent() {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });


// 14.PixelRatio
// 14.1Pixel grid snapping

// import React from 'react';
// import {
//   Image,
//   PixelRatio,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const size = 50;
// const cat = {
//   uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//   width: size,
//   height: size,
// };

// export default function AllComponent() {
//  return(
//   <ScrollView style={styles.scrollContainer}>
//     <View style={styles.container}>
//       <Text>Current Pixel Ratio is:</Text>
//       <Text style={styles.value}>{PixelRatio.get()}</Text>
//     </View>
//     <View style={styles.container}>
//       <Text>Current Font Scale is:</Text>
//       <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
//     </View>
//     <View style={styles.container}>
//       <Text>On this device images with a layout width of</Text>
//       <Text style={styles.value}>{size} px</Text>
//       <Image source={cat} />
//     </View>
//     <View style={styles.container}>
//       <Text>require images with a pixel width of</Text>
//       <Text style={styles.value}>
//         {PixelRatio.getPixelSizeForLayoutSize(size)} px
//       </Text>
//       <Image
//         source={cat}
//         style={{
//           width: PixelRatio.getPixelSizeForLayoutSize(size),
//           height: PixelRatio.getPixelSizeForLayoutSize(size),
//         }}
//       />
//     </View>
//   </ScrollView>
//  )
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flex: 1,
//   },
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   value: {
//     fontSize: 24,
//     marginBottom: 12,
//     marginTop: 4,
//   },
// });
  


// 15.RefreshControl

// import React from 'react';
// import {
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
// } from 'react-native';

// export default function AllComponent() {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }>
//         <Text>Pull down to see RefreshControl indicator</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// 16.StatusBar

// import React, {useState} from 'react';
// import {
//   Button,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

// export default function AllComponent() {
//   const [hidden, setHidden] = useState(false);
//   const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
//   const [statusBarTransition, setStatusBarTransition] = useState(
//     TRANSITIONS[0],
//   );

//   const changeStatusBarVisibility = () => setHidden(!hidden);

//   const changeStatusBarStyle = () => {
//     const styleId = STYLES.indexOf(statusBarStyle) + 1;
//     if (styleId === STYLES.length) {
//       setStatusBarStyle(STYLES[0]);
//     } else {
//       setStatusBarStyle(STYLES[styleId]);
//     }
//   };

//   const changeStatusBarTransition = () => {
//     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
//     if (transition === TRANSITIONS.length) {
//       setStatusBarTransition(TRANSITIONS[0]);
//     } else {
//       setStatusBarTransition(TRANSITIONS[transition]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         animated={true}
//         backgroundColor="#61dafb"
//         barStyle={statusBarStyle}
//         showHideTransition={statusBarTransition}
//         hidden={hidden}
//       />
//       <Text style={styles.textStyle}>
//         StatusBar Visibility:{'\n'}
//         {hidden ? 'Hidden' : 'Visible'}
//       </Text>
//       <Text style={styles.textStyle}>
//         StatusBar Style:{'\n'}
//         {statusBarStyle}
//       </Text>
//       {Platform.OS === 'ios' ? (
//         <Text style={styles.textStyle}>
//           StatusBar Transition:{'\n'}
//           {statusBarTransition}
//         </Text>
//       ) : null}
//       <View style={styles.buttonsContainer}>
//         <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
//         <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
//         {Platform.OS === 'ios' ? (
//           <Button
//             title="Change StatusBar Transition"
//             onPress={changeStatusBarTransition}
//           />
//         ) : null}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ECF0F1',
//   },
//   buttonsContainer: {
//     padding: 10,
//   },
//   textStyle: {
//     textAlign: 'center',
//     marginBottom: 8,
//   },
// });
