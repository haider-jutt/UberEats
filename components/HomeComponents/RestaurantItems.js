import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const RestaurantItems = ({ navigation, ...props }) => {
//const navigation=useNavigation();


    return (
        <>
            {props.restaurantsData.map((item, index) =>
                <TouchableOpacity activeOpacity={1} key={index} onPress={()=>navigation.navigate("About",{
                    name: item.name,
                    image: item.image_url,
                    price: item.price,
                    reviews: item.review_count,
                    rating: item.rating,
                    categories: item.categories,


                })}>
                    <View style={{ marginTop: 10, marginBottom: 20, backgroundColor: 'white' }}>
                        <SingleRestaurant image={item.image_url} />
                        <RestaurantInfo name={item.name} time={"35-40"} rating={item.rating} />
                    </View>
                </TouchableOpacity>
            )}
        </>
    )
}

export default RestaurantItems

const styles = StyleSheet.create({})

const SingleRestaurant = (props) => (
    <View style={{ alignItems: 'center' }}>
        <Image
            style={{ width: '95%', height: 200, margin: 10, borderRadius: 10, }}
            source={{ uri: props.image }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={30} color='white' />
        </TouchableOpacity>

    </View>
)
const RestaurantInfo = (props) => (
    <View style={{ flexDirection: 'row', marginBottom: 20, width: '95%', flex: 1, marginHorizontal: 10, justifyContent: 'space-between' }}>
        <View>
            <Text style={{ fontWeight: '900', fontSize: 15 }}>{props.name} </Text>
            <Text style={{ color: 'gray' }}>{props.time} mins</Text>
        </View>
        <View
            style={{
                backgroundColor: '#eee',
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text >{props.rating}</Text>
        </View>

    </View>
)