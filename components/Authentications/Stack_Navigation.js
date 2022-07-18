import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forget_password from '../screens/Forget_password';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Tab_navigation from './Tab_Navigation';
import Drawer_navigation from './Drawer_Navigation';
const Stack = createNativeStackNavigator();

const Stack_Navigation = () => {

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>

          <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
          <Stack.Screen name="ForgetPassword" component={Forget_password} options={{ title: 'Reset Password' }} />
          <Stack.Screen name="Home" component={Drawer_navigation} options={{ headerShown: false }} />

        </Stack.Navigator>

      </NavigationContainer>

    </>
  )
}

export default Stack_Navigation

const styles = StyleSheet.create({})