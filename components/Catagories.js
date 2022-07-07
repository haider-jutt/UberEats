import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const items = [
    {
        id: '1',
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick up'
    },
    {
        id: '2',
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    },
    {
        id: '3',
        image: require('../assets/images/bread.png'),
        text: 'Bakery Items'
    },
    {
        id: '4',
        image: require('../assets/images/fast-food.png'),
        text: 'Fast Food'
    },
    {
        id: '5',
        image: require('../assets/images/deals.png'),
        text: 'Deals '
    },
    {
        id: '6',
        image: require('../assets/images/coffee.png'),
        text: 'Coffee & Tea'
    },
    {
        id: '7',
        image: require('../assets/images/desserts.png'),
        text: 'Desserts'
    },


]

export default function Catagories() {
    const renderItem = ({ item }) => (
        //<Item title={item.title} />
        <View style={{
            flexDirection: 'column', margin: 10, alignItems: 'center',
            alignSelf: 'center',
        }}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );
    return (
        <View style={{ backgroundColor: 'white', marginTop: 10 }}>
            <FlatList

                horizontal
                data={items}
                renderItem={renderItem}
                keyExtractor={item => items.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {

        width: 50,
        height: 50,
    },
    text: {
        fontSize: 13,
        fontWeight: '900',

    }

})