import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Completion = ({navigation}) => {
    const nav=useNavigation();
  return (
    <View style={styles.container}>
        <Text style={[styles.header,{color:"#1f1b17",fontSize:50,paddingBottom:"10%",}]}>
            Thank You
        </Text>
        <Text style={styles.header}>Your Order has be Registered</Text>
        
        
        
        <TouchableOpacity 
        onPress={()=>nav.navigate("Home")}
        style={{
        backgroundColor:"black",
        marginTop:"10%",
        paddingVertical:10,
        paddingHorizontal:40,
        borderRadius:10
        }}>
            <Text style={{color:'orange'}}>OK</Text>
        </TouchableOpacity>

    </View>
  );
};

export default Completion;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange",
        flex:1,
        paddingTop:"50%",
        alignContent:'center',
        alignItems:'center',
    },
    header:{
        fontSize:35,
        fontWeight:'900',
        alignItems:'center',
        justifyContent:'center',
        textAlign:"center",
        alignContent:'center',
    }
});
