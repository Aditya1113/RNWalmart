import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
      title="Login Page"
      color='blue'
      onPress={()=>navigation.navigate('Login')}
      />
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});