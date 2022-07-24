import { ScrollView, StyleSheet, Text, RefreshControl,View } from "react-native";
import { useEffect } from "react";
import React, { useState } from "react";
import HomeHeader from "../components/HomeComponents/HomeHeader";
import SearchBar from "../components/HomeComponents/SearchBar";
import Catagories from "../components/HomeComponents/Catagories";
import RestaurantItems from "../components/HomeComponents/RestaurantItems";
import { locatRestarurant } from "../components/HomeComponents/API";
import BottomTab from "../components/HomeComponents/BottomTab";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const YELP_API_KEY =
  "sgrhPOijkSTNlhYhdh0givfvTM8ot_45qvD8KVMLJUtxeGntpR7OZyoN-3YDkCmFW6Bzn0Uy2PheW8VpskGw-T6JntUa4YR6JWEzSdyVmhUbZnTm2hMSw8QktPDHYnYx";
const Home = ({navigation}) => {
  
  const [restaurantsData, setRestaurantsData] = useState(locatRestarurant);
  const [city, setCity] = useState("Newyork");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [refreshing]);
  
  

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={{ backgroundColor: "#eee", flex: 1, }}>
      <View style={{ backgroundColor: "white" }}>
        <HomeHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>

      <Catagories />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
        <RestaurantItems restaurantsData={restaurantsData}  navigation={navigation}/>
      </ScrollView>
      <BottomTab   navigation={navigation}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
