import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet,ActivityIndicator, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState,useEffect } from "react";
import Account from "./screens/Account";
import Grocery from "./screens/Grocery";
import Browse from "./screens/Browse";
import Orders from "./screens/Orders";
import Home from "./screens/Home";
import Completion from "./screens/Completion";
import About from "./screens/About";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const store=configureStore();
  const Stack=createNativeStackNavigator();
  const [u_token, setUToken] = useState('initial');
  

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('user_tocken');
      setUToken(data);
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItemList(); 
    
     }, []);
   
  if (u_token !== 'initial') 
  return (
<Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator  initialRouteName={u_token ? 'Home' : 'SignIn'}
      screenOptions={{headerShown:false}}>
    <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Grocery" component={Grocery} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Completion" component={Completion} />
      <Stack.Screen name="SignUp" component={SignUp} />
      
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
    );
  else 
  return(
    
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 35,
  },
});
