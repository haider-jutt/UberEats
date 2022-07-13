import { StyleSheet, Text, TextInput, Image, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

const BottomTab = () => {
    const navigation=useNavigation();

    return (
        <View style={{ flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent:'space-between',
        }}>
      <Tab name={'home'} text={'Home'} screen="Home" navigation={navigation}/>
      <Tab name={'search'} text={'Browse'} screen="Browse" navigation={navigation}/>
      <Tab name={'shopping-bag'} text={'Grocery'} screen="Grocery" navigation={navigation}/>
      <Tab name={'list'} text={'Orders'} screen="Orders" navigation={navigation}/>
      <Tab name={'user'} text={'Account'}  screen="Account" navigation={navigation}/>
      </View>
    )


}

export default BottomTab

const styles = StyleSheet.create({})

const Tab=(props)=>{
    return(
       // console.log(props.navigation),
        <TouchableOpacity
          onPress={()=> props.navigation.navigate(props.screen)} 
        >
        <View style={{margin:10,alignItems:'center'}}>
        <FontAwesome5 name={props.name} size={20}  />
        <Text >{props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}