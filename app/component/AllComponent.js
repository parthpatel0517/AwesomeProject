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

import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';


export default function AllComponent() {
  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});