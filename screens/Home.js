import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import Catagories from '../components/Catagories'
import RestaurantItems from '../components/RestaurantItems'
import { locatRestarurant } from '../components/API'

const YELP_API_KEY = "sgrhPOijkSTNlhYhdh0givfvTM8ot_45qvD8KVMLJUtxeGntpR7OZyoN-3YDkCmFW6Bzn0Uy2PheW8VpskGw-T6JntUa4YR6JWEzSdyVmhUbZnTm2hMSw8QktPDHYnYx"
const Home = () => {
    const [restaurantsData, setRestaurantsData] = useState(locatRestarurant)
    const [city, setCity] = useState("Newyork");
    const [activeTab, setActiveTab] = useState("Delivery");

    //Yepl Api Code Starts
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantsData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    //Yepl Api Code Starts
    return (
        <View style={{ backgroundColor: '#eee', flex: 1, }}>
            <View style={{ backgroundColor: 'white' }} >
                <HomeHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>

            <Catagories />
            <ScrollView showsVerticalScrollIndicator={false} >
                <RestaurantItems restaurantsData={restaurantsData} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})