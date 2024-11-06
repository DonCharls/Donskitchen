import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import BoxContainer from './BoxContainer'

const Promos = () => {
  return (
    <ScrollView className="bg-primary2" horizontal={true} showsHorizontalScrollIndicator={false}>
    <View className="flex-row">
        <TouchableOpacity>
            <BoxContainer style={styles.container1}>
                <Image source={require('../assets/pictures/bibimbap.jpeg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Free Bibimbap</Text>
            </BoxContainer>
        </TouchableOpacity>
    </View>
    
        <TouchableOpacity>
            <BoxContainer style={styles.container2}>
                <Image source={require('../assets/pictures/kchicken.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Free Chicken</Text>
            </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity>
            <BoxContainer style={styles.container3}>
                <Image source={require('../assets/pictures/slemonade.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Free Pitcher Drink</Text>
            </BoxContainer>
        </TouchableOpacity>
      
        <TouchableOpacity>
            <BoxContainer style={styles.container4}>
                <Image source={require('../assets/pictures/mfloat.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Free Mango Float</Text>
            </BoxContainer>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
  
    container1:{
        borderRadius: 15,
        backgroundColor: 'black',
        height: 120,
        width: 150,
    },
  
    container2:{
        borderRadius: 15,
        backgroundColor: 'black',
        height: 120,
        width: 150,
        right: 30
    },

    container3:{
        borderRadius: 15,
        backgroundColor: 'black',
        height: 120,
        width: 150,
        right:60
      },

      container4:{
        borderRadius: 15,
        backgroundColor: 'black',
        height: 120,
        width: 150,
        right: 90
      },

      container5:{
        borderRadius: 15,
        backgroundColor: 'black',
        height: 120,
        width: 150,
        right: 120,
      },
  });

export default Promos