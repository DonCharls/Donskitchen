import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import BoxContainer from './BoxContainer'

const Menu = () => {
  return (
    <ScrollView className="bg-white" horizontal={true} showsHorizontalScrollIndicator={false}>
    <View className="flext-row">
        <TouchableOpacity>
            <BoxContainer style={styles.container1}>
                <Image source={require('../assets/pictures/bseller.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", fontWeight: "500", bottom: 15}}>Best Sellers</Text>
            </BoxContainer>
        </TouchableOpacity>
    </View>
    
        <TouchableOpacity>
            <BoxContainer style={styles.container2}>
                <Image source={require('../assets/pictures/bbimbap.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Bibimbap</Text>
            </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity>
            <BoxContainer style={styles.container3}>
                <Image source={require('../assets/pictures/seafoods.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Seafoods</Text>
            </BoxContainer>
        </TouchableOpacity>
      
        <TouchableOpacity>
            <BoxContainer style={styles.container4}>
                <Image source={require('../assets/pictures/chicken.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Chicken</Text>
            </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity>
            <BoxContainer style={styles.container5}>
                <Image source={require('../assets/pictures/porkabeef.jpg')} 
                style={{height: 121, width: 150, top: 12, opacity:0.8, borderRadius: 15}}/>
                <Text className="font" 
                style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Pork & Beef</Text>
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

  export default Menu