 import React from "react";
 import { createStackNavigator } from 'react-navigation-stack';
 
import{
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator

} from "react-navigation";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";  


 const switchNavigator= createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup:SignupScreen,
    Signin: SigninScreen
    
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })


});

export default createAppContainer(switchNavigator); 


/*  import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start  on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  */



/* sudo sudo apt-get purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
apt-get purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
 */

import React from 'react';
import { View,StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
//import SearchBar from './searchbar/SearchBar';
// import Badge from './badge/Badge';

const SignupScreen= ({navigation})=>{

    return(
        <>
        <Text h3>Sign Up for Tracker</Text>
        <Input label="email"/>
        <Input label="password"/>
        <Button title="Sign Up"/>

    

    </>

    ) 
};

const styles= StyleSheet.create({

});

export default SignupScreen;