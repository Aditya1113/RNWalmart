import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  Button
} from 'react-native';
import React, { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


import show from '../assests/show.png'
import hide from '../assests/hide.png'

import instagram from '../assests/instagram.png';
import axios from 'axios';

import Toast from 'react-native-simple-toast';


export default function Login({navigation}) {

    const [hidePassword,setHidePassword] = useState(true)
    const [loginDetails,setLoginDetails] = useState({
      Email:'',
      Password:''
    })

    const changePasswordVisibility=()=>{
        setHidePassword(!hidePassword) 
    }


    useEffect(()=>{
      GoogleSignin.configure({
        webClientId: '659449851446-jedr79au3ackgfqo0rhg1793m40j521n.apps.googleusercontent.com'
      });
    })


    const googleSignIn= async ()=> {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      const user_sign_in = auth().signInWithCredential(googleCredential);

      user_sign_in.then(res=>{
        console.log(res);
        navigation.navigate('Home')
      })
    }

const login =()=>{
  axios.post('https://users-api-9uui.onrender.com/login',loginDetails) 
  .then((res)=>{
      if(res.status===201) {
      Toast.show(res.data.message,Toast.LONG)  
        navigation.navigate('Home')
      
      }
      else{
        console.log('there is some error')
      }
  })
  .catch(err=>console.log(err))
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Image source={instagram} resizeMode="contain" style={styles.logo} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="email"
          placeholderTextColor="black"
          style={styles.inputText}
          onChangeText={(val)=>setLoginDetails({...loginDetails,Email:val})}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="password"
          style={styles.inputText}
          placeholderTextColor="black"
          secureTextEntry={hidePassword}
          autoCapitalize='none'
          onChangeText={(val)=>setLoginDetails({...loginDetails,Password:val})}
        />
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={changePasswordVisibility}
        style={styles.visibilityBtn}
        >
            <Image
            source={
                    hidePassword
                    ?show
                    :hide}
            style={styles.btnImage}
            />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity style={{marginHorizontal: 15}}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={styles.signUp}>Signup</Text>
        </TouchableOpacity>
      </View>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
      />
      <Button
      title="Go back"
      onPress={()=>navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputText: {
    height: 50,
    color: '#777777',
    fontWeight: '800',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#EAEAEA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 0,
  },
  logo: {
    marginBottom: 25,
    width: 250,
    height: 100,
  },
  signUp: {
    color: '#39B54A',
    fontWeight: '500',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#39B54A',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  visibilityBtn:{
    position:'absolute',
    right:12,
    padding:0,
    marginTop:21
  },
  btnImage:{
    height:25,
    width:25
  }
});
