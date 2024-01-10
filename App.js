import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import Person from './Components/Person';

export default function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView>
      <Text style={styles.text}>{count}</Text>
      <Button title="Update" color="red" onPress={clickHandler} />
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
});
