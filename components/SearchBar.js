import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
const SearchBar = () => {
    return (
        <View
            style={{

                margin: 15,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <GooglePlacesAutocomplete placeholder='search'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '800',
                        alignItems: 'center',
                        height: 45,
                        fontSize: 20,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        alignItems: 'center',

                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>)
                }
                renderRightButton={() => (
                    <View >
                        <TouchableOpacity style={{
                            marginRight: 8,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            padding: 10,
                            borderRadius: 20,
                            flexDirection: 'row',

                        }}>
                            <AntDesign name='clockcircle' size={15} style={{ paddingRight: 5 }} />
                            <Text>Search</Text>
                        </TouchableOpacity>
                    </View>
                )

                }
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})