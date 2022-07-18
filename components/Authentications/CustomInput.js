import React from 'react';
import { View, Text,StyleSheet,Pressable,Button,Alert,TextInput, Image } from 'react-native';

export default function CustomInput({placeholder,value,setvalue,secureTextEntry,type,image} ) {
    


  return (
    <View style={styles.container} >
      
    <View style={styles.subcontainer}>
     < View style={{borderWidth:1,
        borderColor:"#f5f5f5",
        backgroundColor:"#f5f5f5",
        borderRadius:5, alignItems:"center",
        alignSelf:"center",
        padding:10,marginRight:5}}>   
     <Image style={styles.button_logo} source={image}  resizeMode={"contain"}/>   
    </View>
    
    <TextInput
        style={styles.input}  
        placeholder={placeholder}
        value={value}
        onChangeText={setvalue}
        secureTextEntry={secureTextEntry}
      />
    </View>  

  </View>
  );
}


const styles = StyleSheet.create({
    button_logo:{
        width:35,
        height:35,
        
        padding:10,
        
    },
    subcontainer:{
        flexDirection:'row',
    },
    container:{ 
      
      width:"90%",
      marginBottom:15,
      alignSelf:"center",
    },
    input:{
        borderColor:"#f5f5f5",
        borderWidth:1,
        padding:14,
        borderRadius:5,
        backgroundColor:"#f5f5f5",
        width:"80%",    }
  
     
  })
