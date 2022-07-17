import { Image, ScrollView, StyleSheet, Text,Modal, TouchableOpacity, View, Dimensions, FlatList } from "react-native";
import { useEffect } from "react";
import React, { useState } from "react";
import { Divider } from 'react-native-paper';
import { useSelector } from "react-redux";
import { firebaseConfig } from "../../firebase";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";

const ViewCart = ({restaurantName}) => {
const [modelVisible,setModelVisible]=useState(false);
const items=useSelector((state)=>state.cartReducer.selectedItems.items)
const total=items.map((items)=>Number(items.price.replace("$",""))).reduce((prev,curr)=>prev+curr,0)
const navigation=useNavigation();
const AddOrderstoFirebase=()=>{
  const db=firebase.firestore();
  
  db.collection("orders").add({
    items:items,
    restaurantName:restaurantName,
    createdAt:Date()//TO STORE TIME STAMPS IN DB
  })
  setModelVisible(false);
  navigation.navigate("Completion")

}

const checkoutModalContent = () => {
  const renderItem = ({ item }) => (
  
    <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width:300,
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#999",
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.title}</Text>
          <Text style={{ opacity: 0.7, fontSize: 16 }}>{item.price}</Text>
        
        </View>
        
  );
  return (
   <View style={{ 
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",}}
   >
    
    <View style={{
      alignItems:'center',
      backgroundColor: "white",
      padding: 16,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      
      }}>
        <Text style={{fontSize:25,fontWeight:'900'}}>{restaurantName}</Text>
        <Text>
       
        <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return  index.toString();
         }}
      />

      
            
       
        </Text>
        <View style={{
          flexDirection:'row',
          justifyContent: "space-between",
          padding:10,
           width:300,}}>
          <Text style={{opacity: 0.7, fontSize: 16}}>Sub-Total</Text>
          <Text style={{opacity: 0.7, fontSize: 16}}>${total}</Text>
        </View>
        <TouchableOpacity style={{
          marginTop:20,
          alignItems:'center',
          backgroundColor:'black',
          padding:15,
          paddingHorizontal:50,
          borderRadius:30,
          flexDirection:'row'
          }}
          onPress={()=>{AddOrderstoFirebase()}}
          >
        <Text  style={{color:'white',paddingRight:20,fontSize:20}}>Checkout</Text>
        <Text style={{color:'white',fontSize:20}}>${total}</Text>
       
        </TouchableOpacity>    
    </View>
   </View>
  );
};



  return (
    <>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modelVisible}
    onRequestClose={()=>setModelVisible(false)}

    >
    
     {checkoutModalContent()} 
    
    </Modal>
    
    
    {total?(
      <View
      style={{
        position:'absolute',
        bottom:30,
        width:'100%'
      }}
      >
    <TouchableOpacity style={{alignItems:'center'}}
    onPress={() => setModelVisible(true)}    >
     
  
   <View style={{
      alignItems:'center',
      flexDirection:'row',
      height:50,
      justifyContent:'center',
      borderRadius:30 ,
      backgroundColor:'black',
      width:'80%',
      
   }}>
    
   <Text style={{color:'white',fontSize:20,marginRight:20}}>View Cart</Text> 
   <Text style={{color:'white',fontSize:20}}>${total}</Text>
   </View>
    </TouchableOpacity>
    </View>
    ):<></>}
      </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  
});