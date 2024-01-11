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
import React, { useState } from 'react';

import show from '../assests/show.png'
import hide from '../assests/hide.png'

import instagram from '../assests/instagram.png';


export default function Login({navigation}) {

    const [hidePassword,setHidePassword] = useState(true)


    const changePasswordVisibility=()=>{
        setHidePassword(!hidePassword) 
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
          // onChangeText={}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="password"
          style={styles.inputText}
          placeholderTextColor="black"
          secureTextEntry={hidePassword}
          // onChangeText={}
        />
        <TouchableOpacity
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
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity style={{marginHorizontal: 15}}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUp}>Signup</Text>
        </TouchableOpacity>
      </View>

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
    height:25,
    width:25,
    padding:0,
    marginTop:21
  },
  btnImage:{
    height:25,
    width:25
  }
});
