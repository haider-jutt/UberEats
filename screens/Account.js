import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text,Image,TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Account = () => {
  const navigation = useNavigation()
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  const handleSignOut = () => {
    clearStorage();
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View >
      <Image style={styles.image} source={require("../assets/imrankhan.jpeg")}/>
      </View>
      <Text style={{fontSize:20,fontWeight:'800'}}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <Text style={{color:"#eee",fontSize:20}}>Allah Hafiz</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    alignItems: 'center',
    backgroundColor:'orange'
  },
  image:{
   borderRadius:100,
   width:200,
   height:200,
   marginBottom:20,

  },
   button: {
    backgroundColor: 'black',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    marginBottom:20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})