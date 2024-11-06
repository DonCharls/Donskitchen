import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Top = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', backgroundColor:"#00000f"}}>
        <Image
          source={require('../assets/pictures/dklogo.png')} 
          style={{height: 45, width: 45, marginLeft: 6, marginBottom: 5, marginTop: 5}}/>
        <Image
          source={require('../assets/pictures/logoname2.png')} 
          style={{height: 45, width: 115, marginTop: 5, marginLeft: 67}}/>
    </View>
    
  )
}

export default Top