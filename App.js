import {Text, SafeAreaView, StyleSheet, Button,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import React, {useState} from 'react';




export default function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  const TouchableComponent = 
  Platform.OS ==='android'?TouchableNativeFeedback:TouchableOpacity


  return (
    <SafeAreaView>
      <Text style={styles.text}>{count}</Text>
      <Button title="Update" color="red" onPress={clickHandler}/>

      <TouchableComponent onPress={clickHandler} 
        background = {Platform.OS === 'android'?TouchableNativeFeedback.Ripple('#3498db',false):undefined}
        // background = {TouchableComponent===TouchableNativeFeedback?TouchableNativeFeedback.Ripple('#3498db',false):undefined}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableComponent>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'coral',
    textAlign: 'center',
    marginTop: 10,
  },
  grayText: {
    color: 'grey',
  },

  text1: {
    flex: 2,
    fontSize: 34,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },

  text2: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  buttonText:{
    color:'#3498db',
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold'
  },
  button:{
    borderWidth:1,
    borderColor:'#3498db',
    padding: 10,
    borderRadius:5,
    alignItems:'center'
  }
});
