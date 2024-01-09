import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Person({firstname, lastname, age, list}) {
  // props : {

  // firstname,
  // lastname
  // }

  // const {firstname,lastname,age} = props  //destructure props

  return (
    <SafeAreaView>
      <Text style={styles.text}>{firstname}</Text>
      <Text style={styles.text}>{lastname}</Text>
      <Text style={styles.text}>{age}</Text>

        {list.map(item => (  
          <Text style={styles.text} key={item.id}>
            {item.id}:{item.name}
          </Text>
        ))}

    </SafeAreaView>
  );
}

