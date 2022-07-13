import { Image, ScrollView,Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import React, { useState } from "react";
import { Divider } from 'react-native-paper';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MenuItem = ({
    restaurantName,
    foods,
  }) => {
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...item,
          restaurantName: restaurantName,
          checkboxValue: checkboxValue,
        },
      });
  
    const cartItems = useSelector(
      (state) => state.cartReducer.selectedItems.items
    );
  
    const isFoodInCart = (food, cartItems) =>
      Boolean(cartItems.find((item) => item.title === food.title));
     
   
  return (
    <ScrollView>
   <View style={{ backgroundColor:'white',}}>

    {foods.map((item,index)=>
    <View key={index}>
    <View style={{flexDirection:'row',
    padding:10,
    
    backgroundColor:'white',
    borderRadius:10
    
    }}>
         <BouncyCheckbox 
       iconStyle={{borderRadius:0,borderColor:"gray"}}
       fillColor="green"
       onPress={(checkboxValue) => selectItem(item, checkboxValue)}
       isChecked={isFoodInCart(item,cartItems)}
       />
       <RenderDescription title={item.title} description={item.description} price={item.price} />
       <RenderImage image={item.image}/>
        
    </View>
        <Divider style={{height:1}}/>
    </View>
    )}
    
     
    </View>
    </ScrollView>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});

const RenderImage=(props)=>{
    return(
        <View style={{}}>
        <Image
        style={{  height: 80,width:80,borderRadius:10  }}
        source={{ uri: props.image }}
        />
        </View>

    )
}
const RenderDescription=(props)=>{
    return(
        <View style={{width:'65%',paddingRight:15, flexDirection:'row'}}>
      
    <View>
        <Text style={{fontWeight:'900',fontSize:15}}>
                {props.title}
        </Text> 
        <View style={{width:'95%'}}>
        <Text >
                {props.description}
        </Text>
        </View>
        <Text>
            {props.price}
        </Text>
        
    </View>        
    
    </View>
    )
}