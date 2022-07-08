import { StyleSheet, Text, TextInput, Image, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
const SearchBar = ({ setCity }) => {
    const [text, onChangeText] = React.useState("Newyork");


    return (

        setCity(text),
        < View
            style={{

                marginVertical: 15,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',

            }
            }

        >
            <TextInput
                onSubmitEditing={(event) => onChangeText(event.nativeEvent.text)}
                placeholder={"Type Location Here"}

                style={{
                    alignSelf: 'center',

                    backgroundColor: '#eee',
                    borderRadius: 20,
                    width: '90%',
                    height: 50,
                    paddingHorizontal: 10,
                    fontSize: 20,
                    fontWeight: '900'

                }}



            />

        </View >
    )
}

export default SearchBar

const styles = StyleSheet.create({})