import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import React, { useState } from "react";
import HomeHeader from "../components/HomeComponents/HomeHeader";
import SearchBar from "../components/HomeComponents/SearchBar";
import Catagories from "../components/HomeComponents/Catagories";
import RestaurantItems from "../components/HomeComponents/RestaurantItems";
import { locatRestarurant } from "../components/HomeComponents/API";
import BottomTab from "../components/HomeComponents/BottomTab";

const YELP_API_KEY =
  "sgrhPOijkSTNlhYhdh0givfvTM8ot_45qvD8KVMLJUtxeGntpR7OZyoN-3YDkCmFW6Bzn0Uy2PheW8VpskGw-T6JntUa4YR6JWEzSdyVmhUbZnTm2hMSw8QktPDHYnYx";
const Home = ({navigation}) => {
  
  const [restaurantsData, setRestaurantsData] = useState(locatRestarurant);
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
    <View style={{ backgroundColor: "#eee", flex: 1, }}>
      <View style={{ backgroundColor: "white" }}>
        <HomeHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>

      <Catagories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems restaurantsData={restaurantsData}  navigation={navigation}/>
      </ScrollView>
      <BottomTab   navigation={navigation}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
