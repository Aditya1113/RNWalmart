import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Person from './Components/Person';

export default function App() {
  const list = [
    {id: '1', name: 'John'},
    {id: '2', name: 'Alex'},
    {id: '3', name: 'David'},
    {id: '4', name: 'Joey'},
    {id: '5', name: 'Tom'}
  ];

  return (
    <>
      {/* <Person firstname="Peter" lastname="Parker" />
      <Person firstname="Rose" lastname="Mary" /> */}
      {/* <Person age={24} /> */}
      <Person list = {list} />
    </>
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
