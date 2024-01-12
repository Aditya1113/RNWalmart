import { View, Text,StyleSheet,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import Toast from 'react-native-simple-toast';


export default function Register({navigation}) {
const [details,setDetails] = useState({
    Name:'',
    Mobile:'',
    Email:'',
    Password:''
})

// const setEmail=(val)=>{
//     emailRef.current.value = val
// }

// const register=()=>{
//     console.log(details)
// }

// const emailRef = useRef()



const register=()=>{
    axios.post('https://users-api-9uui.onrender.com/register',details)
    .then((res)=>{
        Toast.show(res.data.message,Toast.LONG);
        navigation.navigate('Login')
    })
    .catch(err=>console.log(err))
}

  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.inputView}>
      <TextInput

        placeholder="email"
        placeholderTextColor="black"
        style={styles.inputText}
        autoCapitalize='none'
        ref={emailRef}
        onChangeText={(val)=>setDetails({...details,email:val})}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        placeholder="password"
        style={styles.inputText}
        placeholderTextColor="black"
        autoCapitalize='none'
        onChangeText={(val)=>setDetails({...details,Password:val})}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        placeholder="Name"
        placeholderTextColor="black"
        style={styles.inputText}
        autoCapitalize='none'
        onChangeText={(val)=>setDetails({...details,Name:val})}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        placeholder="Mobile"
        placeholderTextColor="black"
        style={styles.inputText}
        autoCapitalize='none'
        onChangeText={(val)=>setDetails({...details,Mobile:val})}
      />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={register}>
      <Text style={styles.loginText}>Register</Text>
    </TouchableOpacity>
    <View style={styles.actions}>
    
        <Text style={styles.forgot}>Already Logged in?</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.signUp}>Login</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
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
  