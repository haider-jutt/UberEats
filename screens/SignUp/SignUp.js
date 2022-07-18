import {  Alert, Pressable, StyleSheet, Text,ScrollView, View } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/Authentications/CustomInput';
import CustomButton from '../../components/Authentications/button';
import { firebaseConfig } from '../../firebase';
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase';
import { useEffect } from 'react';


const SignUp = ({navigation}) => {
  
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [check_password, set_check_Password] = useState('');


  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

const social_login=()=>{
  alert("Social API Not Connected");
};
  return (
  <ScrollView>  
    <View>
      <Text style={{ textAlign:"center",paddingTop:"20%",fontSize:25,fontWeight:'bold'}}>Create Account</Text>
      
      <CustomInput 
      placeholder="Username"
      value={username}
      setvalue={setUsername}
      secureTextEntry={false}
      image={require('../../assets/user_logo.png')}
      />

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

      <CustomInput 
      placeholder="repeat password"
      value={check_password}
      setvalue={set_check_Password}
      secureTextEntry={true}
      image={require('../../assets/password_logo.png')}
      />
      
      <Text style={{color:"gray",padding:20}}>
      By registering you confirm that you accept our{" "} 
      <Text style={{color:"#f07d20"}}>Terms of Use</Text>{" "} 
      and {" "}
      <Text style={{color:"#f07d20"}}>Privacy Policy</Text>
      </Text>

      <CustomButton placeholder="Register" onPress={handleSignUp} />

      <CustomButton placeholder="Sign in with Facebook" onPress={social_login} type='social_login_facebook' />
      <CustomButton placeholder="Sign in with Goolge" onPress={social_login} type='social_login_google' />
      <CustomButton placeholder="Sign in with Apple" onPress={social_login} type='social_login_facebook' />
      

    </View>
  </ScrollView>
    
  )
}
export default SignUp
const styles = StyleSheet.create({})