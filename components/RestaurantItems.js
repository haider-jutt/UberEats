import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const locatRestarurant = [
    {
        id: '1',
        Image: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
        name: 'Farm House Italiano',
        time: '35-40',
        rating: '4'
    },
    {
        id: '2',
        Image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/03202059/Restaurant-ceiling-designs-for-an-attractive-dining-space.jpg",
        name: 'London Grill',
        time: '35-40',
        rating: '4.9'
    },
    {
        id: '3',
        Image: "https://i0.wp.com/dinepartner.com/blog/wp-content/uploads/2019/10/e.png?fit=730%2C415&ssl=1",
        name: 'Foodie',
        time: '35-40',
        rating: '5'
    },
]

const RestaurantItems = () => {
    const [activieTab, setactiveTab] = useState('Delivery');

    const renderItem = ({ item }) => (
        <>
            <TouchableOpacity activeOpacity={1} >
                <View style={{ marginTop: 10, marginBottom: 20, backgroundColor: 'white' }}>
                    <SingleRestaurant image={item.Image} />
                    <RestaurantInfo name={item.name} time={item.time} rating={item.rating} />
                </View>
            </TouchableOpacity>


        </>

    );
    return (


        <>

            <FlatList
                data={locatRestarurant}
                renderItem={renderItem}
                keyExtractor={item => locatRestarurant.id}
            />


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