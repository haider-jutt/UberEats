import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import React, { useState } from "react";
import { Divider } from 'react-native-paper';



const RestaurantInfo = (props) => {
    const { name, image, price, reviews, rating, categories } =
    props.route.params;
    const formatedCatagories=categories.map((cat)=>(cat.title)).join(".");
    const description=`${formatedCatagories}  ${price? "." +price+"💵":""} ${".  🌟"+rating} ${". ("+reviews+") + Reviews"}`


  return (
   <View style={{backgroundColor:'white'}}>
    
    <RenderImage image={image}/>
    <RenderDescription name={name} description={description}/>
    </View>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({});

const RenderImage=(props)=>{
    return(
        <View style={{borderRadius:10}}>
        <Image

        style={{  height: 200,  }}
        source={{ uri: props.image }}
    />
    </View>
    )
}
const RenderDescription=(props)=>{
    return(
    <View style={{margin:10}}>    
        <Text style={{fontWeight:'900',fontSize:25}}>
            {props.name}
       </Text>
       
       <Text>
            {props.description}
       </Text>

    </View>

    )
}