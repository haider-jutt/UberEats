import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./screens/Account";
import Grocery from "./screens/Grocery";
import Browse from "./screens/Browse";
import Orders from "./screens/Orders";
import Home from "./screens/Home";
import Completion from "./screens/Completion";
import About from "./screens/About";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";


export default function App() {
  const store=configureStore();
  const Stack=createNativeStackNavigator();
  return (
<Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Grocery" component={Grocery} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Completion" component={Completion} />
      
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 35,
  },
});
