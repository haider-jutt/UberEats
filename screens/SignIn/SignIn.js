import { Alert, Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/Authentications/button';
import CustomInput from '../../components/Authentications/CustomInput';
import { firebaseConfig } from '../../firebase';
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = ({ navigation }) => {

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const [storageDataList, setStorageDataList] = useState('');


  const handleLogin = () => {
    addItemToList()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.replace("Home")
      })
      .catch(error => alert(error.message))
  };
 
  const addItemToList = async () => {
    try {
      
      await AsyncStorage.setItem('user_tocken', email);
    } catch (err) {
      console.log(err);
    }
  };


  const onSignUp = () => {
    navigation.navigate('SignUp')
  };
  const onForgetPassword = () => {
    alert("Then try to Remember Idiot \n\nI'am Busy");
    
  };
  const social_login = () => {
    alert("Social API Not Connected");
  };

  return (

    <ScrollView style={styles.container}>

      <Image style={styles.redmilogo} source={require('../../assets/uberlogo.png')} />
      <CustomInput
        placeholder="email"
        value={email}
        setvalue={setemail}
        secureTextEntry={false}
        image={require('../../assets/user_logo.png')}
      />
      <CustomInput
        placeholder="password"
        value={password}
        setvalue={setPassword}
        secureTextEntry={true}
        image={require('../../assets/password_logo.png')}
      />
      <CustomButton placeholder="Sign In" onPress={handleLogin} />
      <CustomButton placeholder="Forgot Password?" onPress={onForgetPassword} type='forget' />
      <CustomButton placeholder="Sign in with Facebook" onPress={social_login} type='social_login_facebook' />
      <CustomButton placeholder="Sign in with Goolge" onPress={social_login} type='social_login_google' />
      <CustomButton placeholder="Sign in with Apple" onPress={social_login} type='social_login_facebook' />
      <CustomButton placeholder="Don't have an account? Create one. " onPress={onSignUp} type='forget' />


    </ScrollView>
  )
}
export default SignIn
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  redmilogo: {
    margin:50,
    alignSelf: "center",
    width: 100,
    height: 100,
    resizeMode: 'contain',

  },


})