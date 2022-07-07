import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import Catagories from '../components/Catagories'
import RestaurantItems from '../components/RestaurantItems'
const Home = () => {
    return (
        <View style={{ backgroundColor: '#eee', flex: 1, }}>
            <View style={{ backgroundColor: 'white' }} >
                <HomeHeader />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Catagories />
                <RestaurantItems />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})