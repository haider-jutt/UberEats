import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HomeHeader = (props) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 5 }}>
            <HeaderButton text={"Delivery"}
                btnColor={"black"}
                textColor={"white"}
                activieTab={props.activeTab}
                setactiveTab={props.setActiveTab}

            />
            <HeaderButton text={"Pickup"}
                btnColor={"black"}
                textColor={"white"}
                activieTab={props.activeTab}
                setactiveTab={props.setActiveTab}
            />
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})

const HeaderButton = (props) => (
    <View >
        <TouchableOpacity style={{
            backgroundColor: props.activieTab === props.text ? props.btnColor : "white",
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 120,
            height: 40,
            borderRadius: 20,

        }}
            onPress={() => props.setactiveTab(props.text)}
        >
            <Text style={{
                color: props.activieTab === props.text ? props.textColor : "black",
                fontSize: 22,
                fontWeight: '900'
            }}>{props.text}</Text>
        </TouchableOpacity>


    </View>
)