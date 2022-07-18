import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'

const Browse = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>Browse</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Browse

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    alignItems: 'center',
    backgroundColor:'orange'
  },
  button:{
    backgroundColor: 'black',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    marginBottom:20,
  },
  buttonText:{
    color:"white",fontWeight: '700',
    fontSize: 16,
  }
})