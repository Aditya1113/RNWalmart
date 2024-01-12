import { View, Text, StyleSheet, SafeAreaView, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import SplashScreen from 'react-native-splash-screen';
import About from './screens/About';
import Login from './screens/Login';
import Register from './screens/Register';


export default function App() {

useEffect(()=>{
  SplashScreen.hide()
},[])

  const Stack = createNativeStackNavigator()

 return (
  
     <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen  name="Home" component={Home} />
             <Stack.Screen  name="About" component={About} />
             <Stack.Screen  name="Login" component={Login} />
             <Stack.Screen  name="Register" component={Register} />
         </Stack.Navigator>
     </NavigationContainer>
  
 
 )
}


const styles = StyleSheet.create({


});
